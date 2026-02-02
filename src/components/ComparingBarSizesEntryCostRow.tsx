"use client";

import { useEffect, useState } from "react";
import { formatUSD } from "@/lib/formatPrice";

function roundTo100(value: number): number {
  return Math.round(value / 100) * 100;
}

function formatEntryCost(value: number): string {
  return "~" + formatUSD(roundTo100(value)).replace(".00", "");
}

function priceFromData(data: { ask?: number; last?: number }): number | null {
  const v = data.ask ?? data.last;
  return typeof v === "number" && v > 0 ? v : null;
}

export default function ComparingBarSizesEntryCostRow() {
  const [oneOz, setOneOz] = useState<string | null>(null);
  const [tenOz, setTenOz] = useState<string | null>(null);
  const [oneKilo, setOneKilo] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setUnavailable(false);
    Promise.all([
      fetch("/api/spot?metals=GBOZ").then((r) => r.json()),
      fetch("/api/spot?metals=GBX10").then((r) => r.json()),
      fetch("/api/spot?metals=GBX1K").then((r) => r.json()),
    ])
      .then(([gbozRes, gbx10Res, gbx1kRes]) => {
        if (cancelled) return;
        const gboz = gbozRes?.ok && gbozRes?.data ? priceFromData(gbozRes.data) : null;
        const gbx10 = gbx10Res?.ok && gbx10Res?.data ? priceFromData(gbx10Res.data) : null;
        const gbx1k = gbx1kRes?.ok && gbx1kRes?.data ? priceFromData(gbx1kRes.data) : null;
        if (gboz !== null && gbx10 !== null && gbx1k !== null) {
          setOneOz(formatEntryCost(gboz));
          setTenOz(formatEntryCost(gbx10));
          setOneKilo(formatEntryCost(gbx1k));
          setUnavailable(false);
        } else {
          setOneOz(null);
          setTenOz(null);
          setOneKilo(null);
          setUnavailable(true);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setOneOz(null);
          setTenOz(null);
          setOneKilo(null);
          setUnavailable(true);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <tr className="border-b border-gray-800">
        <td className="py-4 px-6 font-medium">Entry Cost</td>
        <td className="py-4 px-6 text-center text-gray-500">Loading live pricing…</td>
        <td className="py-4 px-6 text-center text-gray-500">Loading live pricing…</td>
        <td className="py-4 px-6 text-center text-gray-500">Loading live pricing…</td>
      </tr>
    );
  }

  if (unavailable || oneOz === null) {
    return (
      <tr className="border-b border-gray-800">
        <td className="py-4 px-6 font-medium">Entry Cost</td>
        <td
          className="py-4 px-6 text-center text-gray-500"
          colSpan={3}
        >
          Live pricing temporarily unavailable.
        </td>
      </tr>
    );
  }

  return (
    <tr className="border-b border-gray-800">
      <td className="py-4 px-6 font-medium">Entry Cost</td>
      <td className="py-4 px-6 text-center">{oneOz}</td>
      <td className="py-4 px-6 text-center text-bullion-gold">{tenOz}</td>
      <td className="py-4 px-6 text-center">{oneKilo}</td>
    </tr>
  );
}
