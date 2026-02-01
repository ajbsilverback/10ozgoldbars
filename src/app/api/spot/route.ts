import { NextRequest, NextResponse } from "next/server";
import { getPricingOrigin } from "@/lib/siteConfig";

export interface SpotApiData {
  last: number;
  bid: number;
  ask: number;
  high: number;
  low: number;
  open: number;
  previousClose: number;
  timestamp: string;
  change: number;
  changePercent: number;
}

/** Response shape: consistent so clients can rely on ok, metals, data; error is optional and never leaks URLs or stack. */
export type SpotApiResponse =
  | { ok: true; metals: string; data: SpotApiData; error?: never }
  | { ok: false; metals: string; data: null; error?: string };

const CACHE_CONTROL = "s-maxage=15, stale-while-revalidate=45";

function jsonResponse(payload: SpotApiResponse, status = 200) {
  return NextResponse.json(payload, {
    status,
    headers: { "Cache-Control": CACHE_CONTROL },
  });
}

function extractSpotData(
  json: unknown,
  metals: string
): SpotApiData | null {
  if (!json || typeof json !== "object") return null;

  const obj = json as Record<string, unknown>;
  let raw: Record<string, unknown> | null = null;

  if (Array.isArray(obj)) {
    raw =
      (obj as Record<string, unknown>[]).find(
        (item) =>
          item.symbol === metals || item.metal === metals
      ) ?? obj[0] ?? null;
  } else if (obj[metals]) {
    raw = obj[metals] as Record<string, unknown>;
  } else if (Array.isArray(obj.data)) {
    raw =
      (obj.data as Record<string, unknown>[]).find(
        (item) =>
          item.symbol === metals || item.metal === metals
      ) ?? obj.data[0] ?? null;
  } else if (obj.data && typeof obj.data === "object") {
    const dataRecord = obj.data as Record<string, unknown>;
    raw = (dataRecord[metals] ?? dataRecord) as Record<string, unknown> | null;
  } else if (
    obj.symbol === metals ||
    obj.metal === metals ||
    obj.bid !== undefined ||
    obj.ask !== undefined ||
    obj.last !== undefined
  ) {
    raw = obj;
  }

  if (!raw) return null;

  const last = Number(raw.last ?? raw.Last ?? raw.price ?? 0);
  const bid = Number(raw.bid ?? raw.Bid ?? raw.bidPrice ?? 0);
  const ask = Number(raw.ask ?? raw.Ask ?? raw.askPrice ?? last ?? 0);
  const high = Number(raw.high ?? raw.High ?? raw.dayHigh ?? 0);
  const low = Number(raw.low ?? raw.Low ?? raw.dayLow ?? 0);
  const open = Number(raw.open ?? raw.Open ?? raw.dayOpen ?? 0);
  const previousClose = Number(
    raw.previousClose ?? raw.PreviousClose ?? raw.close ?? raw.Close ?? 0
  );

  if (bid === 0 && ask === 0 && last === 0) return null;

  const currentPrice = ask || last;
  const change =
    previousClose > 0 ? currentPrice - previousClose : 0;
  const changePercent =
    previousClose > 0 ? (change / previousClose) * 100 : 0;

  return {
    last,
    bid,
    ask,
    high,
    low,
    open,
    previousClose,
    timestamp: String(
      raw.timestamp ??
        raw.Timestamp ??
        raw.lastUpdate ??
        raw.updatedAt ??
        new Date().toISOString()
    ),
    change,
    changePercent,
  };
}

export async function GET(request: NextRequest) {
  const metals = request.nextUrl.searchParams.get("metals")?.trim() ?? "";

  if (!metals) {
    return jsonResponse({ ok: false, metals: "", data: null });
  }

  let origin: string;
  try {
    origin = getPricingOrigin();
  } catch {
    return jsonResponse({
      ok: false,
      metals,
      data: null,
      error: "Pricing temporarily unavailable",
    });
  }

  const upstreamUrl = `${origin}/api/v2/Metals/spot/summary?metals=${encodeURIComponent(metals)}`;

  try {
    const res = await fetch(upstreamUrl, {
      headers: { Accept: "application/json" },
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      return jsonResponse({
        ok: false,
        metals,
        data: null,
        error: "Pricing temporarily unavailable",
      });
    }
    const json = await res.json();
    const data = extractSpotData(json, metals);
    if (!data) {
      return jsonResponse({
        ok: false,
        metals,
        data: null,
        error: "Pricing temporarily unavailable",
      });
    }
    return jsonResponse({ ok: true, metals, data });
  } catch {
    return jsonResponse({
      ok: false,
      metals,
      data: null,
      error: "Pricing temporarily unavailable",
    });
  }
}
