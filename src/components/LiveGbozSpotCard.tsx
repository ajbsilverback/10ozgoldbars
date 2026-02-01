"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LocalTimestamp from "./LocalTimestamp";
import { formatUSD, formatChange, formatTimestamp } from "@/lib/formatPrice";

type LiveGbozSpotCardProps = {
  showCta?: boolean;
};

interface SpotData {
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

export default function LiveGbozSpotCard({ showCta = true }: LiveGbozSpotCardProps) {
  const [data, setData] = useState<SpotData | null>(null);
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
        if (body?.ok && body?.data) {
          setData(body.data);
          setError(false);
        } else {
          setData(null);
          setError(true);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setData(null);
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

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto rounded-xl border border-bullion-gold/30 shadow-md p-6 sm:p-10 bg-[#111] space-y-6 animate-pulse">
        <div className="flex justify-between">
          <div className="h-7 w-40 bg-white/10 rounded" />
          <div className="h-5 w-12 bg-white/10 rounded" />
        </div>
        <div className="text-center py-6">
          <div className="h-12 w-48 mx-auto bg-white/10 rounded mb-2" />
          <div className="h-14 w-56 mx-auto bg-bullion-gold/20 rounded" />
          <div className="h-5 w-24 mx-auto mt-2 bg-white/10 rounded" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-20 bg-white/5 rounded-lg" />
          <div className="h-20 bg-white/5 rounded-lg" />
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="max-w-3xl mx-auto rounded-xl border border-bullion-gold/30 shadow-md p-6 sm:p-10 bg-[#111]">
        <p className="text-gray-400 text-center text-lg">
          10 oz gold bar pricing is temporarily unavailable.
        </p>
      </div>
    );
  }

  const isPositive = data.change >= 0;
  const isNeutral = data.change === 0;

  return (
    <div className="max-w-3xl mx-auto rounded-xl border border-bullion-gold/30 shadow-md p-6 sm:p-10 bg-[#111] space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl sm:text-2xl font-display font-semibold text-white">
            10 oz Gold Bar Price
          </h2>
          <p className="text-xs text-gray-500 mt-1">Product pricing</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm text-gray-400 font-medium">Live</span>
        </div>
      </div>

      <div className="relative text-center py-6">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-yellow-500/20 to-yellow-500/10 rounded-lg" />
        <div className="relative">
          <p className="text-lg text-gray-400 mb-2">Current Ask Price</p>
          <p className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight gold-text">
            {formatUSD(data.ask)}
          </p>
          <p className="text-lg text-gray-400 mt-2">per 10 oz bar</p>
        </div>
      </div>

      <div className="flex justify-center">
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
            isNeutral
              ? "bg-neutral-500/10 border border-neutral-500/20"
              : isPositive
                ? "bg-emerald-500/10 border border-emerald-500/20"
                : "bg-red-500/10 border border-red-500/20"
          }`}
        >
          {!isNeutral && (
            <svg
              className={`w-5 h-5 ${isPositive ? "text-emerald-400" : "text-red-400 rotate-180"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          )}
          <span
            className={`text-lg font-semibold ${
              isNeutral
                ? "text-neutral-300"
                : isPositive
                  ? "text-emerald-400"
                  : "text-red-400"
            }`}
          >
            {formatChange(data.change, data.changePercent)}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 rounded-lg bg-white/5">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Bid</p>
          <p className="text-xl font-semibold text-gray-200">{formatUSD(data.bid)}</p>
        </div>
        <div className="text-center p-4 rounded-lg bg-bullion-gold/10 border border-bullion-gold/20">
          <p className="text-sm text-bullion-gold uppercase tracking-wide mb-1">Ask</p>
          <p className="text-xl font-semibold text-bullion-gold">{formatUSD(data.ask)}</p>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm text-gray-500 uppercase tracking-wide text-center">Market Stats</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="rounded-md bg-[#161616] border border-yellow-500/10 px-4 py-3 text-center">
            <p className="text-xs text-neutral-400 uppercase tracking-wide mb-1">Open</p>
            <p className="text-sm md:text-base font-semibold text-neutral-100">
              {data.open > 0 ? formatUSD(data.open) : "N/A"}
            </p>
          </div>
          <div className="rounded-md bg-[#161616] border border-yellow-500/10 px-4 py-3 text-center">
            <p className="text-xs text-neutral-400 uppercase tracking-wide mb-1">High</p>
            <p className="text-sm md:text-base font-semibold text-emerald-400">
              {data.high > 0 ? formatUSD(data.high) : "N/A"}
            </p>
          </div>
          <div className="rounded-md bg-[#161616] border border-yellow-500/10 px-4 py-3 text-center">
            <p className="text-xs text-neutral-400 uppercase tracking-wide mb-1">Low</p>
            <p className="text-sm md:text-base font-semibold text-red-400">
              {data.low > 0 ? formatUSD(data.low) : "N/A"}
            </p>
          </div>
          <div className="rounded-md bg-[#161616] border border-yellow-500/10 px-4 py-3 text-center">
            <p className="text-xs text-neutral-400 uppercase tracking-wide mb-1">Prev Close</p>
            <p className="text-sm md:text-base font-semibold text-neutral-100">
              {data.previousClose > 0 ? formatUSD(data.previousClose) : "N/A"}
            </p>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-500 text-center">
        <LocalTimestamp
          value={data.timestamp}
          fallback={formatTimestamp(data.timestamp)}
          prefix="As of: "
        />
      </p>

      {showCta && (
        <div className="text-center pt-2">
          <Link
            href="/live-gold-prices"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-bullion-gold/10 border border-bullion-gold/30 text-bullion-gold font-medium hover:bg-bullion-gold/20 transition-colors"
          >
            <span>View Full Pricing &amp; Charts</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}

      <p className="text-xs text-gray-600 text-center pt-4 border-t border-bullion-gold/10">
        10 oz gold bar pricing from{" "}
        <a
          href="https://www.monex.com/10-oz-gold-bullion-bar-price-charts/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bullion-gold hover:underline"
        >
          Monex
        </a>{" "}
        • Updated on page load
      </p>
    </div>
  );
}
