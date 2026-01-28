# 10ozGoldBars.com

An educational microsite about 10 oz gold bars built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Home Page**: Comprehensive overview of 10 oz gold bars, including benefits, who buys them, key specifications, and size comparisons
- **Prices Page**: Live gold pricing with GBX10 and GBXSPOT data, plus educational content about premiums
- **Resources**: 12 in-depth educational articles covering:
  - Understanding 10 oz Bar Premiums
  - Size Comparison (1 oz vs 10 oz vs Kilo)
  - Storage Options for 10 oz Bars
  - Brand Differences (PAMP, Credit Suisse, Perth, Royal Canadian Mint)
  - Liquidity Considerations
  - Market Dynamics
  - Bid-Ask Spreads
  - Authentication Guide
  - Institutional vs Retail Markets
  - Portfolio Allocation
  - First-Time Buyer's Guide
  - Tax Considerations
- **Where to Buy**: Independent dealer guide with multiple sources and neutrality disclaimer
- **About**: Site mission and editorial independence

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Deployed on Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Home page
│   ├── live-gold-prices/
│   │   └── page.tsx        # Gold prices page
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── where-to-buy-10-oz-gold-bars/
│   │   └── page.tsx        # Buying guide
│   └── resources/
│       ├── page.tsx        # Resources index
│       └── [slug]/
│           └── page.tsx    # Dynamic resource pages
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── LiveGbozSpotCard.tsx       # 10 oz bar price card
│   ├── LiveGoldSpotIndexCard.tsx  # Gold spot index card
│   └── MonexWidgets.tsx
├── lib/
│   ├── siteConfig.ts       # ⭐ SINGLE SOURCE OF TRUTH
│   └── monexSpot.ts        # Pricing API utilities
└── data/
    ├── resources.ts        # Resource metadata
    ├── qa-content.ts       # Q&A content
    └── article-content.ts  # Article content
```

## Pricing Configuration

This site uses Monex for pricing data. The pricing feed origin is configured via the `PRICING_API_ORIGIN` environment variable.

Prices are fetched once per page load (no polling/intervals).

## SEO Features

- Schema.org markup on all pages (WebPage, Product, Article, FAQPage)
- OpenGraph and Twitter meta tags
- Semantic HTML structure
- Canonical URLs
- Robots.txt and sitemap.xml
- llms.txt for AI crawlers

## Deployment

This site is configured for deployment on Vercel.

## License

All rights reserved.
