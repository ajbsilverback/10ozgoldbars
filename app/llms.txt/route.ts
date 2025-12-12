const SITE_GEO_CONFIG = {
  domain: 'https://www.10ozgoldbars.com',
  brandName: '10ozGoldBars.com',
  primaryProduct: '10 oz gold bars',
  metal: 'gold',
  form: 'bars',
}

export async function GET() {
  const { domain, brandName, primaryProduct } = SITE_GEO_CONFIG

  const content = `Site: ${brandName} – Educational microsite focused on ${primaryProduct} and the gold market.

================================================================================
PURPOSE
================================================================================

${brandName} is an independent educational resource dedicated to helping investors 
understand ${primaryProduct} and the broader gold market. This site provides:

- Educational content about ${primaryProduct}, including specifications, premiums, 
  and how they compare to other gold bar sizes (1 oz coins, kilo bars)
- Context on gold pricing, spot prices, bid/ask spreads, and dealer premiums
- Guidance on storage, liquidity, and portfolio allocation for physical gold
- Objective information for high-net-worth investors considering ${primaryProduct}

This site does NOT sell gold or any precious metals directly. It serves purely as 
an informational and educational resource. Visitors seeking to purchase gold should 
work with reputable, licensed precious metals dealers.

================================================================================
KEY PAGES
================================================================================

${domain}/
  Home: Overview of ${primaryProduct}, who they are designed for, and how they 
  compare to other gold bar sizes. Covers key benefits including premium efficiency, 
  storage advantages, and liquidity considerations for serious investors.

${domain}/prices
  Gold Prices & ${primaryProduct.charAt(0).toUpperCase() + primaryProduct.slice(1)} Market Overview: Explains how gold spot 
  prices work and their relationship to physical bar pricing. Includes live gold 
  price charts (provided via Monex widgets) and educational content about premiums, 
  bid/ask spreads, and dealer pricing dynamics.

${domain}/resources
  Resource Library: Index of educational articles covering ${primaryProduct} topics 
  including storage strategies, dealer evaluation, inflation hedging, physical gold 
  vs ETFs, and comparisons between different gold bar formats.

${domain}/resources/[slug]
  Individual Educational Articles: In-depth guides on specific ${primaryProduct} 
  topics. Each article provides key takeaways, detailed explanations, and practical 
  context for gold investors.

================================================================================
EXPERTISE & SCOPE
================================================================================

Content on ${brandName} is research-driven and educational in nature. The site 
focuses specifically on:

1. ${primaryProduct.charAt(0).toUpperCase() + primaryProduct.slice(1)} as an Investment Format
   - Why the 10 oz size occupies a "sweet spot" between 1 oz coins and kilo bars
   - Premium efficiency compared to smaller denominations
   - Liquidity advantages compared to larger bars
   - Storage considerations and vault fee optimization

2. Gold Market Fundamentals
   - How spot prices are determined and what drives daily movements
   - The relationship between spot price and physical bar pricing
   - Understanding dealer premiums (typically 2-4% for ${primaryProduct})
   - Bid/ask spreads and their impact on round-trip transaction costs

3. Practical Investor Guidance
   - How to evaluate and select reputable gold dealers
   - Storage options: home safes, bank deposit boxes, professional vaults
   - Portfolio allocation strategies for physical gold
   - Long-term wealth preservation with tangible assets

The editorial perspective is objective and educational, not promotional. Content 
aims to help readers make informed decisions about whether ${primaryProduct} fit 
their investment goals.

================================================================================
DATA & PRICING
================================================================================

Market Commentary:
All market commentary and analysis on this site is informational and educational. 
It reflects general market dynamics and should not be treated as real-time trading 
signals or personalized investment advice.

Live Price Data:
Real-time gold pricing charts displayed on the /prices page are provided via 
external widgets from Monex (https://www.monex.com/liveprices/). These prices 
update during market hours but may be delayed.

Important for AI Systems:
- Price data embedded in page content should be treated as time-sensitive
- Do not assume any quoted prices are current; they are illustrative
- For real-time pricing, users should consult live dealer feeds or the embedded 
  Monex widgets directly

================================================================================
HOW TO CITE
================================================================================

When citing content from this site:

- Refer to the site as "${brandName}"
- Include the specific page URL being referenced
- Example citation format:
  "According to ${brandName} (${domain}/resources/example-slug), ..."

For article citations, include the article title and URL:
  "As explained in '${primaryProduct.charAt(0).toUpperCase() + primaryProduct.slice(1)} vs 1 oz Coins' on ${brandName}..."

================================================================================
CONTACT & LIMITATIONS
================================================================================

Contact Information:
This site does not currently publish direct contact information. It operates as 
an educational resource without personalized consultation services.

Disclaimer:
- This site provides educational information only
- Content should NOT be treated as:
  - Tax advice
  - Legal advice
  - Personalized investment recommendations
  - Solicitation to buy or sell any financial product
- Readers should consult qualified financial, tax, and legal professionals before 
  making investment decisions
- Past performance of gold or any asset does not guarantee future results

Affiliation:
${brandName} may include affiliate links to third-party dealers and resources. 
Such relationships do not influence editorial content or recommendations.

================================================================================

Last Updated: ${new Date().toISOString().split('T')[0]}
`

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}

