export interface Resource {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  monexLink: string;
}

export const resources: Resource[] = [
  {
    slug: "premiums-explained",
    title: "Understanding 10 oz Gold Bar Premiums: A Complete Guide",
    description:
      "Learn what premiums are, why 10 oz bars have lower premiums than 1 oz bars, and how to evaluate costs when purchasing 10 oz gold bars.",
    excerpt:
      "Discover why 10 oz gold bars offer better premium efficiency than 1 oz bars and how to maximize your gold buying power.",
    category: "Pricing",
    monexLink: "https://www.monex.com/gold-prices/",
  },
  {
    slug: "size-comparison",
    title: "10 oz vs 1 oz vs Kilo Gold Bars: Finding Your Ideal Size",
    description:
      "A detailed comparison of gold bar sizes to help you choose the right denomination for your investment goals and capital.",
    excerpt:
      "Compare 10 oz, 1 oz, and kilo gold bars across premiums, liquidity, and practical considerations for investors.",
    category: "Investment",
    monexLink: "https://www.monex.com/investing-in-gold/",
  },
  {
    slug: "storage-options",
    title: "Storing Your 10 oz Gold Bars: Options and Best Practices",
    description:
      "Compare storage solutions for 10 oz gold bars from home safes to bank safe deposit boxes and professional vaults.",
    excerpt:
      "A comprehensive guide to securing your gold bar investment with appropriate storage solutions.",
    category: "Security",
    monexLink: "https://www.monex.com/knowledge-base/gold-investing/",
  },
  {
    slug: "brand-differences",
    title: "Comparing 10 oz Gold Bar Brands: PAMP, Credit Suisse, Perth & More",
    description:
      "An in-depth comparison of major 10 oz gold bar manufacturers and what differentiates their products.",
    excerpt:
      "Learn the differences between PAMP Suisse, Credit Suisse, Perth Mint, Royal Canadian Mint, and other top 10 oz bar producers.",
    category: "Products",
    monexLink: "https://www.monex.com/investing-in-gold/",
  },
  {
    slug: "liquidity-considerations",
    title: "Liquidity Considerations for 10 oz Gold Bars",
    description:
      "Understanding the liquidity of 10 oz bars compared to other sizes and how to plan for resale.",
    excerpt:
      "Explore the liquidity dynamics of 10 oz gold bars and strategies for efficient buying and selling.",
    category: "Investment",
    monexLink: "https://www.monex.com/10-oz-gold-bullion-bar-price-charts/",
  },
  {
    slug: "market-dynamics",
    title: "Gold Market Dynamics: What Moves Gold Bar Prices",
    description:
      "Understanding the economic factors, geopolitical events, and market forces that influence gold prices.",
    excerpt:
      "Explore the key drivers behind gold price movements and what they mean for 10 oz bar investors.",
    category: "Market",
    monexLink: "https://www.monex.com/gold-prices/",
  },
  {
    slug: "spreads-explained",
    title: "Understanding Bid-Ask Spreads on 10 oz Gold Bars",
    description:
      "Learn how dealer spreads work and strategies to minimize costs when buying and selling 10 oz gold bars.",
    excerpt:
      "Master the concept of bid-ask spreads and learn how to get the best prices on your 10 oz bar trades.",
    category: "Pricing",
    monexLink: "https://www.monex.com/gold-prices/",
  },
  {
    slug: "authentication-guide",
    title: "Authenticating 10 oz Gold Bars: Security Features & Verification",
    description:
      "Best practices for verifying authenticity and understanding security features on 10 oz gold bars.",
    excerpt:
      "Protect your investment with proper authentication knowledge and verification techniques.",
    category: "Security",
    monexLink: "https://www.monex.com/knowledge-base/gold-investing/",
  },
  {
    slug: "institutional-vs-retail",
    title: "Institutional vs Retail Gold Bar Purchasing",
    description:
      "Understanding the differences between institutional and retail gold bar markets and their implications.",
    excerpt:
      "Learn how institutional standards affect gold bar quality, pricing, and resale value for retail investors.",
    category: "Market",
    monexLink: "https://www.monex.com/investing-in-gold/",
  },
  {
    slug: "portfolio-allocation",
    title: "Allocating to 10 oz Gold Bars in Your Portfolio",
    description:
      "Strategic considerations for incorporating 10 oz gold bars into a diversified investment portfolio.",
    excerpt:
      "Discover how 10 oz bars fit into portfolio diversification strategies for serious investors.",
    category: "Investment",
    monexLink: "https://www.monex.com/investing-in-gold/",
  },
  {
    slug: "first-time-buyers-guide",
    title: "Buying 10 oz Gold Bars: What First-Time Buyers Should Know",
    description:
      "A comprehensive guide for first-time buyers covering the practical process of purchasing 10 oz gold bars, including payment methods, delivery, and settlement.",
    excerpt:
      "Learn what to expect when purchasing your first 10 oz gold bar, from choosing a dealer to taking delivery.",
    category: "Buying Guide",
    monexLink: "https://www.monex.com/10-oz-gold-bullion-bar-price-charts/",
  },
  {
    slug: "tax-considerations",
    title: "Tax Considerations When Buying and Selling 10 oz Gold Bars",
    description:
      "A high-level overview of tax considerations related to physical gold ownership, including capital gains, state variations, and IRA ownership.",
    excerpt:
      "Understand the tax landscape for physical gold investments before making your purchase decision.",
    category: "Tax & Legal",
    monexLink: "https://www.monex.com/knowledge-base/gold-investing/",
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

export function getResourceCategories(): string[] {
  return [...new Set(resources.map((r) => r.category))];
}
