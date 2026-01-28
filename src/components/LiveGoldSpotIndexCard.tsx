import { fetchMetalSpotIndex, formatUSD, formatChange, formatTimestamp } from "@/lib/monexSpot";
import LocalTimestamp from "./LocalTimestamp";

/**
 * Server Component - Fetches Gold Spot Price ONCE per page load
 * 
 * This is RAW GOLD SPOT pricing, NOT product-specific pricing.
 * 
 * ABSOLUTELY NO setInterval, useEffect, or client-side polling.
 * This renders ONCE per page load and never refreshes again.
 */
export default async function LiveGoldSpotIndexCard() {
  // Fetches GBXSPOT (gold spot index) from Monex
  const data = await fetchMetalSpotIndex();

  // Error state - if data === null
  if (data === null) {
    return (
      <div className="max-w-3xl mx-auto rounded-xl border border-bullion-gold/30 shadow-md p-6 sm:p-10 bg-[#111]">
        <p className="text-gray-400 text-center text-lg">
          Gold spot pricing is temporarily unavailable.
        </p>
      </div>
    );
  }

  const isPositive = data.change >= 0;
  const isNeutral = data.change === 0;

  return (
    <div className="max-w-3xl mx-auto rounded-xl border border-bullion-gold/30 shadow-md p-6 sm:p-10 bg-[#111] space-y-6">
      {/* Header with live indicator */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-display font-semibold text-white">
            Gold Spot Price
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Raw gold spot
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm text-gray-400 font-medium">Live</span>
        </div>
      </div>

      {/* Main Price Display */}
      <div className="relative text-center py-6">
        {/* Subtle gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-yellow-500/10 to-yellow-500/5 rounded-lg" />
        
        <div className="relative">
          <p className="text-lg text-gray-400 mb-2">Current Gold Spot</p>
          <p className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight gold-text">
            {formatUSD(data.last)}
          </p>
          <p className="text-base text-gray-500 mt-2">per troy ounce (spot)</p>
        </div>
      </div>

      {/* Change indicator */}
      <div className="flex justify-center">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
          isNeutral
            ? "bg-neutral-500/10 border border-neutral-500/20"
            : isPositive 
              ? "bg-emerald-500/10 border border-emerald-500/20" 
              : "bg-red-500/10 border border-red-500/20"
        }`}>
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
          <span className={`text-lg font-semibold ${
            isNeutral 
              ? "text-neutral-300" 
              : isPositive 
                ? "text-emerald-400" 
                : "text-red-400"
          }`}>
            {formatChange(data.change, data.changePercent)}
          </span>
        </div>
      </div>

      {/* Market Stats - OHLC + Previous Close */}
      <div className="space-y-3">
        <p className="text-sm text-gray-500 uppercase tracking-wide text-center">Market Stats</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="rounded-md bg-[#161616] border border-yellow-500/10 px-4 py-3 text-center">
            <p className="text-xs text-neutral-400 uppercase tracking-wide mb-1">Open</p>
            <p className="text-sm md:text-base font-semibold text-neutral-100">
              {data.open > 0 ? formatUSD(data.open) : "—"}
            </p>
          </div>
          <div className="rounded-md bg-[#161616] border border-yellow-500/10 px-4 py-3 text-center">
            <p className="text-xs text-neutral-400 uppercase tracking-wide mb-1">High</p>
            <p className="text-sm md:text-base font-semibold text-emerald-400">
              {data.high > 0 ? formatUSD(data.high) : "—"}
            </p>
          </div>
          <div className="rounded-md bg-[#161616] border border-yellow-500/10 px-4 py-3 text-center">
            <p className="text-xs text-neutral-400 uppercase tracking-wide mb-1">Low</p>
            <p className="text-sm md:text-base font-semibold text-red-400">
              {data.low > 0 ? formatUSD(data.low) : "—"}
            </p>
          </div>
          <div className="rounded-md bg-[#161616] border border-yellow-500/10 px-4 py-3 text-center">
            <p className="text-xs text-neutral-400 uppercase tracking-wide mb-1">Prev Close</p>
            <p className="text-sm md:text-base font-semibold text-neutral-100">
              {data.previousClose > 0 ? formatUSD(data.previousClose) : "—"}
            </p>
          </div>
        </div>
      </div>

      {/* Timestamp */}
      <p className="text-sm text-gray-500 text-center">
        <LocalTimestamp
          value={data.timestamp}
          fallback={formatTimestamp(data.timestamp)}
          prefix="As of: "
        />
      </p>

      {/* Attribution */}
      <p className="text-xs text-gray-600 text-center pt-4 border-t border-bullion-gold/10">
        Gold spot data from{" "}
        <a
          href="https://www.monex.com/gold-prices/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bullion-gold hover:underline"
        >
          Monex
        </a>
        {" "}• Updated on page load
      </p>
    </div>
  );
}


