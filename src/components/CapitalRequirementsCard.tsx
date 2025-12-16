import { fetchProductSpot, ProductSpotSummary } from "@/lib/monexSpot";
import { SITE_CONFIG } from "@/lib/siteConfig";

interface CapitalRequirementsCardProps {
  /** Optional pre-fetched price data to avoid duplicate API calls */
  priceData?: ProductSpotSummary | null;
}

/**
 * Server Component - Displays the approximate capital required to purchase a 10 oz gold bar.
 * 
 * Uses 10 oz gold bar (GBX10) pricing from Monex API.
 * Can receive pre-fetched price data or will fetch its own if not provided.
 * NO polling, NO intervals - renders ONCE per page load only.
 */
export default async function CapitalRequirementsCard({ priceData }: CapitalRequirementsCardProps = {}) {
  // Use provided data or fetch GBX10 (10 oz gold bar) if not available
  const data = priceData !== undefined ? priceData : await fetchProductSpot();

  // Round to nearest $100 for display
  const roundToHundred = (value: number): string => {
    const rounded = Math.round(value / 100) * 100;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(rounded);
  };

  // Check if we have valid data
  const hasValidPrice = data !== null && data.ask > 0;

  return (
    <div className="card p-8 max-w-sm">
      <h3 className="text-xl font-display font-semibold text-bullion-gold mb-4 text-center">
        Capital Requirements
      </h3>
      <p className="text-gray-400 text-sm text-center mb-6">
        {hasValidPrice
          ? `Based on current 10 oz gold bar (${SITE_CONFIG.productSymbol}) ask price:`
          : "To purchase a single 10 oz gold bar:"}
      </p>
      <div className="text-center py-6 rounded-lg bg-bullion-gold/10 border border-bullion-gold/30">
        {hasValidPrice ? (
          <>
            <span className="text-4xl font-display font-bold gold-text">
              ≈ {roundToHundred(data.ask)}
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
        {SITE_CONFIG.productSymbol} pricing varies with gold spot and dealer premiums
      </p>
    </div>
  );
}
