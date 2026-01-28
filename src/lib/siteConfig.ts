/**
 * SITE CONFIGURATION - Single Source of Truth
 * 
 * Configuration for 10ozGoldBars.com
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 * GUARDRAILS - Do Not Modify Without Intentional Review
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PROTECTED ELEMENTS:
 * - Pricing symbols (GBXSPOT vs GBX10)
 * - Pricing feed endpoints (configured via PRICING_API_ORIGIN env var)
 * - Chart embed script
 * - Navigation IA (matches kilo site)
 * - Repo remote (must remain ajbsilverback/10ozgoldbars)
 * 
 * PRICING RULES:
 * - GBXSPOT: live gold spot price per troy ounce (market reference ONLY)
 * - GBX10: 10 oz gold bar product pricing (product cards + charts ONLY)
 * - Do NOT interchange these symbols
 * 
 * DEPLOYMENT:
 * - main branch is protected
 * - No force-pushes
 * - Vercel auto-deploys from main only
 * 
 * DESIGN:
 * - Built from 1kilogoldbars.com baseline
 * - Layout changes should maintain parity with kilo site
 * 
 * CONTENT:
 * - This site is strictly about 10 oz gold bars
 * - Do NOT reintroduce kilo-specific claims:
 *   • 32.15 oz references (except in educational comparisons)
 *   • Institutional sizing language
 *   • Kilo-only premium logic
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const SITE_CONFIG = {
  // ============================================================
  // DOMAIN & BRANDING
  // ============================================================
  
  /** Primary domain with https:// prefix */
  domain: "https://www.10ozgoldbars.com",
  
  /** Canonical domain (usually same as domain) */
  canonicalDomain: "https://www.10ozgoldbars.com",
  
  /** Brand name displayed in UI and metadata */
  brandName: "10ozGoldBars.com",

  // ============================================================
  // PRODUCT DEFINITION
  // ============================================================
  
  /** Primary product name */
  primaryProduct: "10 oz gold bars",
  
  /** Metal type: "gold" | "silver" | "platinum" | "palladium" */
  metal: "gold",
  
  /** Product form: "bars" | "coins" | "rounds" */
  form: "bars",
  
  /** Size or series identifier */
  sizeOrSeries: "10 oz",

  /** Troy ounce equivalent */
  troyOunces: 10,

  // ============================================================
  // PRICING FEED SYMBOLS
  // ============================================================
  
  /** 
   * Product price symbol for pricing feed
   * GBX10 = 10 oz gold bar (product cards + charts ONLY)
   */
  productSymbol: "GBX10",
  
  /**
   * Spot index symbol for pricing feed (raw metal spot price)
   * GBXSPOT = Gold Spot Index (market reference ONLY)
   */
  spotSymbol: "GBXSPOT",

  // ============================================================
  // CONTENT & MESSAGING
  // ============================================================
  
  /** Target audience description */
  angle:
    "serious investors seeking meaningful gold positions with lower premiums than 1 oz bars and more flexibility than kilo bars",

  /** Array of relevant Monex.com links for citations */
  monexLinks: [
    "https://www.monex.com/gold/",
    "https://www.monex.com/gold-prices/",
    "https://www.monex.com/10-oz-gold-bullion-bar-price-charts/",
    "https://www.monex.com/knowledge-base/gold-investing/",
  ],
} as const;

export type SiteConfig = typeof SITE_CONFIG;

/**
 * Helper: Get pricing API origin from environment variable
 * Server-only - do not import into client components
 */
export function getPricingOrigin(): string {
  const origin = process.env.PRICING_API_ORIGIN;
  if (!origin) {
    throw new Error("PRICING_API_ORIGIN environment variable is not set");
  }
  return origin;
}

/**
 * Helper: Get pricing feed URL for product symbol
 */
export function getProductApiUrl(): string {
  return `${getPricingOrigin()}/api/v2/Metals/spot/summary?metals=${SITE_CONFIG.productSymbol}`;
}

/**
 * Helper: Get pricing feed URL for spot symbol
 */
export function getSpotApiUrl(): string {
  return `${getPricingOrigin()}/api/v2/Metals/spot/summary?metals=${SITE_CONFIG.spotSymbol}`;
}

/**
 * Helper: Get pricing feed URL for kilo bar (comparison only)
 */
export function getKiloBarApiUrl(): string {
  return `${getPricingOrigin()}/api/v2/Metals/spot/summary?metals=GBX1K`;
}
