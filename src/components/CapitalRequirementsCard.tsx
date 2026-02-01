"use client";

import { useEffect, useState } from "react";

/**
 * Client component: fetches 10 oz bar spot from /api/spot and shows
 * approximate capital required. No server-side pricing fetch.
 */
export default function CapitalRequirementsCard() {
  const [ask, setAsk] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(false);
    fetch("/api/spot?metals=GBX10")
      .then((res) => res.json())
      .then((body) => {
        if (cancelled) return;
        if (body?.ok && body?.data?.ask > 0) {
          setAsk(body.data.ask);
          setError(false);
        } else {
          setAsk(null);
          setError(true);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setAsk(null);
          setError(true);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const roundToHundred = (value: number): string => {
    const rounded = Math.round(value / 100) * 100;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(rounded);
  };

  const hasValidPrice = ask !== null && ask > 0;

  return (
    <div className="card p-8 max-w-sm">
      <h3 className="text-xl font-display font-semibold text-bullion-gold mb-4 text-center">
        Capital Requirements
      </h3>
      <p className="text-gray-400 text-sm text-center mb-6">
        {loading
          ? "Loading current pricing…"
          : hasValidPrice
            ? "Based on current 10 oz gold bar ask price:"
            : "To purchase a single 10 oz gold bar:"}
      </p>
      <div className="text-center py-6 rounded-lg bg-bullion-gold/10 border border-bullion-gold/30">
        {loading ? (
          <div className="h-12 w-32 mx-auto bg-white/10 rounded animate-pulse" />
        ) : hasValidPrice ? (
          <>
            <span className="text-4xl font-display font-bold gold-text">
              ≈ {roundToHundred(ask!)}
            </span>
            <p className="text-gray-400 text-sm mt-2">per 10 oz bar</p>
          </>
        ) : (
          <>
            <span className="text-xl font-display font-medium text-gray-400">
              Market pricing unavailable
            </span>
            <p className="text-gray-500 text-sm mt-2">Please check back later</p>
          </>
        )}
      </div>
      <p className="text-gray-500 text-xs text-center mt-4">
        Pricing varies with gold spot and dealer premiums
      </p>
    </div>
  );
}
