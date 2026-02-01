"use client";

import { useEffect, useState } from "react";
import { formatUSD } from "@/lib/formatPrice";

export default function PremiumComparisonBySize() {
  const [spotPerOz, setSpotPerOz] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(false);
    fetch("/api/spot?metals=GBXSPOT")
      .then((res) => res.json())
      .then((body) => {
        if (cancelled) return;
        if (body?.ok && body?.data && typeof body.data.last === "number") {
          setSpotPerOz(body.data.last);
          setError(false);
        } else {
          setSpotPerOz(null);
          setError(true);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setSpotPerOz(null);
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

  const formatSpotPrice = (price: number) =>
    formatUSD(price).replace(".00", "");

  return (
    <div className="card">
      <h3 className="text-xl md:text-2xl font-display font-semibold mb-4 text-bullion-gold">
        Premium Comparison by Size
      </h3>
      <p className="text-gray-300 leading-relaxed mb-3">
        The premium savings on 10 oz bars are meaningful when building a gold
        position:
      </p>

      {loading && (
        <div className="bg-bullion-darker/50 rounded-lg p-4">
          <p className="text-gray-400 text-sm">Loading live pricing…</p>
        </div>
      )}

      {!loading && (error || spotPerOz === null) && (
        <div className="bg-bullion-darker/50 rounded-lg p-4">
          <p className="text-gray-400 text-sm">
            Live pricing temporarily unavailable.
          </p>
        </div>
      )}

      {!loading && !error && spotPerOz !== null && (
        <div className="bg-bullion-darker/50 rounded-lg p-4">
          <p className="text-gray-400 text-sm mb-2">
            <strong className="text-bullion-gold">
              Example at {formatSpotPrice(spotPerOz)}/oz spot:
            </strong>
          </p>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>
              •{" "}
              <strong className="text-white">
                10 × 1 oz bars (5% avg premium):
              </strong>{" "}
              ~
              {formatSpotPrice(
                Math.round(spotPerOz * 10 * 1.05)
              )}
            </li>
            <li>
              •{" "}
              <strong className="text-white">
                1 × 10 oz bar (2% premium):
              </strong>{" "}
              ~
              {formatSpotPrice(Math.round(spotPerOz * 10 * 1.02))}
            </li>
            <li className="pt-2 border-t border-bullion-gold/20">
              <strong className="text-bullion-gold">Savings:</strong> ~
              {formatSpotPrice(
                Math.round(spotPerOz * 10 * 1.05) -
                  Math.round(spotPerOz * 10 * 1.02)
              )}{" "}
              by choosing 10 oz over 1 oz bars
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
