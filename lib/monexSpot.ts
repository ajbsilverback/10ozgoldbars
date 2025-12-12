/**
 * Monex Spot Price Fetching
 * Server-side only, page-load fetch (no polling)
 */

import { SITE_CONFIG } from './siteConfig'

export interface MonexSpotData {
  symbol: string
  bid: number | null
  ask: number | null
  open: number | null
  high: number | null
  low: number | null
  previousClose: number | null
  change: number | null
  changePercent: number | null
  lastUpdated: string | null
}

export interface MonexApiResponse {
  success: boolean
  data: MonexSpotData | null
  error: string | null
}

/**
 * Core fetch function for Monex spot data
 * Uses cache: "no-store" for fresh data on each page load
 */
async function fetchMonexSpot(symbol: string): Promise<MonexApiResponse> {
  const url = `${SITE_CONFIG.priceFeeds.apiBaseUrl}?metals=${symbol}`
  
  try {
    const response = await fetch(url, {
      cache: 'no-store', // Server-side, page-load only - no caching
      headers: {
        'Accept': 'application/json',
      },
    })
    
    if (!response.ok) {
      return {
        success: false,
        data: null,
        error: `HTTP ${response.status}: ${response.statusText}`,
      }
    }
    
    const json = await response.json()
    
    // Parse Monex API response format
    // Adjust parsing based on actual API response structure
    const spotData = json?.data?.[0] || json?.[0] || json
    
    return {
      success: true,
      data: {
        symbol: spotData.symbol || symbol,
        bid: spotData.bid ?? null,
        ask: spotData.ask ?? null,
        open: spotData.open ?? null,
        high: spotData.high ?? null,
        low: spotData.low ?? null,
        previousClose: spotData.previousClose ?? spotData.previous_close ?? null,
        change: spotData.change ?? null,
        changePercent: spotData.changePercent ?? spotData.change_percent ?? null,
        lastUpdated: spotData.lastUpdated ?? spotData.last_updated ?? new Date().toISOString(),
      },
      error: null,
    }
  } catch (error) {
    return {
      success: false,
      data: null,
      error: error instanceof Error ? error.message : 'Unknown fetch error',
    }
  }
}

/**
 * Fetch 10 oz gold bar product pricing
 * Uses symbol: GBX10
 */
export async function fetchProductSpot(): Promise<MonexApiResponse> {
  return fetchMonexSpot(SITE_CONFIG.priceFeeds.productSymbol)
}

/**
 * Fetch gold spot index pricing
 * Uses symbol: GBXSPOT
 */
export async function fetchMetalSpotIndex(): Promise<MonexApiResponse> {
  return fetchMonexSpot(SITE_CONFIG.priceFeeds.spotSymbol)
}

/**
 * Fetch both product and spot prices in parallel
 */
export async function fetchAllPrices(): Promise<{
  product: MonexApiResponse
  spot: MonexApiResponse
}> {
  const [product, spot] = await Promise.all([
    fetchProductSpot(),
    fetchMetalSpotIndex(),
  ])
  
  return { product, spot }
}

