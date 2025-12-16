/**
 * SITE CONFIGURATION - Single Source of Truth
 * 
 * Configuration for 10ozGoldBars.com
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
  // MONEX API SYMBOLS
  // ============================================================
  
  /** 
   * Product price symbol for Monex API
   * GBX10 = 10 oz gold bar
   */
  productSymbol: "GBX10",
  
  /**
   * Spot index symbol for Monex API (raw metal spot price)
   * GBXSPOT = Gold Spot Index
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
 * Helper: Get Monex API URL for product symbol
 */
export function getProductApiUrl(): string {
  return `https://api.monex.com/api/v2/Metals/spot/summary?metals=${SITE_CONFIG.productSymbol}`;
}

/**
 * Helper: Get Monex API URL for spot symbol
 */
export function getSpotApiUrl(): string {
  return `https://api.monex.com/api/v2/Metals/spot/summary?metals=${SITE_CONFIG.spotSymbol}`;
}
