/**
 * Site Configuration
 * Central configuration for 10ozGoldBars.com
 */

export const SITE_CONFIG = {
  domain: 'https://www.10ozgoldbars.com',
  brandName: '10ozGoldBars.com',
  
  priceFeeds: {
    /** Symbol for 10 oz gold bar product pricing */
    productSymbol: 'GBX10',
    /** Symbol for gold spot index pricing */
    spotSymbol: 'GBXSPOT',
    /** Monex API base URL */
    apiBaseUrl: 'https://api.monex.com/api/v2/Metals/spot/summary',
  },
} as const

export type SiteConfig = typeof SITE_CONFIG

