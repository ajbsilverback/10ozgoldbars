import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { GoldPriceChart } from "@/components/MonexWidgets";
import AISummary from "@/components/AISummary";
import QASection from "@/components/QASection";
import LiveGbozSpotCard from "@/components/LiveGbozSpotCard";
import LiveGoldSpotIndexCard from "@/components/LiveGoldSpotIndexCard";
import { pricesQA } from "@/data/qa-content";
import { fetchProductSpot, fetchMetalSpotIndex, formatUSD } from "@/lib/monexSpot";

export const metadata: Metadata = {
  title: "Live 10 oz Gold Bar Prices & Gold Spot Price Charts",
  description:
    "Track live 10 oz gold bar prices and gold spot prices with interactive charts. Understand premiums, bid-ask spreads, and market dynamics for informed gold investing.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/live-gold-prices`,
  },
  openGraph: {
    title: "Live 10 oz Gold Bar Prices & Gold Spot Price Charts",
    description:
      "Track live 10 oz gold bar prices and gold spot prices with interactive charts. Understand premiums and market dynamics.",
    url: `${SITE_CONFIG.domain}/live-gold-prices`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Live 10 oz Gold Bar Prices & Gold Spot Price Charts",
    description:
      "Track live 10 oz gold bar prices and gold spot prices with interactive charts and market data.",
  },
};

export default async function PricesPage() {
  // Fetch price data once for the entire page
  const priceData = await fetchProductSpot();
  const spotData = await fetchMetalSpotIndex();
  
  // Get spot price per oz for examples (rounded to nearest dollar)
  const spotPerOz = spotData ? Math.round(spotData.last) : 2000;
  const formatSpotPrice = (price: number) => formatUSD(price).replace(".00", "");
  
  // Calculate example prices based on current spot
  const tenOneOzBars = Math.round(spotPerOz * 10 * 1.05); // 5% premium
  const oneTenOzBar = Math.round(spotPerOz * 10 * 1.02);  // 2% premium
  const savings = tenOneOzBars - oneTenOzBar;
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "10 oz Gold Bar Price & Live Gold Spot Prices",
    description:
      "Track live 10 oz gold bar prices and gold spot prices. Real-time charts and market data for gold investors.",
    url: `${SITE_CONFIG.domain}/live-gold-prices`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What determines the price of a 10 oz gold bar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The price of a 10 oz gold bar consists of the spot price of gold multiplied by 10 troy ounces, plus a premium that covers manufacturing, distribution, and dealer margins. 10 oz bar premiums typically range from 1.5-3% over spot.",
        },
      },
      {
        "@type": "Question",
        name: "Why do 10 oz gold bars have lower premiums than 1 oz bars?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "10 oz bars have lower premiums because manufacturing costs are spread across more gold content. Producing one 10 oz bar is more efficient than producing 10 individual 1 oz bars. The per-ounce production cost decreases with bar size.",
        },
      },
      {
        "@type": "Question",
        name: "How often do gold prices change?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gold prices change continuously during market hours as the precious metals market operates nearly 24 hours a day, five days a week. Major price movements are influenced by currency fluctuations, central bank policies, geopolitical events, and supply and demand dynamics.",
        },
      },
    ],
  };

  const aiSummaryBullets = [
    "This page displays live 10 oz gold bar prices via Monex data",
    "Track gold spot prices per troy ounce for reference",
    "Understand how spot prices relate to 10 oz bar retail pricing",
    "Learn about premium structures: 10 oz bars have 1.5-3% premiums",
    "Compare premiums across bar sizes (1 oz vs 10 oz vs kilo)",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="py-12 md:py-16 gold-bar-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bullion-darker via-transparent to-bullion-darker" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              <span className="gold-text">10 oz Gold Bar Price</span>
              <br />
              <span className="text-white">& Live Gold Spot Prices</span>
            </h1>

            {/* AI Summary - placed after H1 */}
            <AISummary bullets={aiSummaryBullets} />

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-6 text-left">
              Track live gold prices and understand how spot pricing affects 
              the cost of 10 oz gold bars. Use these tools to make informed 
              decisions about your precious metals investments. Return to our{" "}
              <Link href="/" className="text-bullion-gold hover:underline">
                overview of 10 oz gold bars
              </Link>{" "}
              or explore our{" "}
              <Link href="/resources" className="text-bullion-gold hover:underline">
                educational resources
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Zone - Live Cards */}
      <section className="py-10 md:py-12 section-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Live 10 oz Gold Bar Price Card */}
          <LiveGbozSpotCard showCta={false} />

          {/* Live Gold Spot Index Card */}
          <LiveGoldSpotIndexCard />

          {/* Chart Widget */}
          <div>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-4 text-white text-center">
              Gold Price Chart
            </h2>
            <div className="max-w-4xl mx-auto">
              <GoldPriceChart />
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Gold Prices */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              Understanding <span className="gold-text">10 oz Bar Pricing</span>
            </h2>

            <div className="prose prose-lg prose-invert max-w-none space-y-6">
              <div className="card">
                <h3 className="text-2xl font-display font-semibold mb-4 text-bullion-gold">
                  Spot Price vs. 10 oz Bar Price
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  When purchasing a 10 oz gold bar, you&apos;ll pay a premium 
                  above the calculated spot value (spot price × 10 oz). 
                  The spot price represents the current market rate for gold 
                  traded in bulk on commodities exchanges.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The 10 oz bar offers a <strong className="text-white">great balance 
                  of premium savings and flexibility</strong>, typically with 
                  1.5-3% premiums over spot. This is lower than 1 oz bars (3-8%) 
                  while being more accessible than kilo bars.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl md:text-2xl font-display font-semibold mb-4 text-bullion-gold">
                  Why 10 oz Bars Have Lower Premiums
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-bullion-gold mr-3">•</span>
                    <span>
                      <strong className="text-white">Economy of Scale:</strong> Producing 
                      one 10 oz bar is more efficient than producing 10 individual 
                      1 oz bars with the same total gold content.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bullion-gold mr-3">•</span>
                    <span>
                      <strong className="text-white">Reduced Handling:</strong> Fewer 
                      individual units to package, ship, and inventory reduces 
                      per-ounce costs throughout the supply chain.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bullion-gold mr-3">•</span>
                    <span>
                      <strong className="text-white">Strong Demand:</strong> 10 oz 
                      bars are popular with serious individual investors, creating 
                      efficient markets with competitive pricing.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bullion-gold mr-3">•</span>
                    <span>
                      <strong className="text-white">Simpler Packaging:</strong> Less 
                      elaborate packaging compared to premium 1 oz bars in 
                      sealed assay cards.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl md:text-2xl font-display font-semibold mb-4 text-bullion-gold">
                  Premium Comparison by Size
                </h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  The premium savings on 10 oz bars are meaningful when building 
                  a gold position:
                </p>
                <div className="bg-bullion-darker/50 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-2">
                    <strong className="text-bullion-gold">Example at {formatSpotPrice(spotPerOz)}/oz spot:</strong>
                  </p>
                  <ul className="text-gray-400 text-sm space-y-2">
                    <li>• <strong className="text-white">10 × 1 oz bars (5% avg premium):</strong> ~{formatSpotPrice(tenOneOzBars)}</li>
                    <li>• <strong className="text-white">1 × 10 oz bar (2% premium):</strong> ~{formatSpotPrice(oneTenOzBar)}</li>
                    <li className="pt-2 border-t border-bullion-gold/20">
                      <strong className="text-bullion-gold">Savings:</strong> ~{formatSpotPrice(savings)} by choosing 10 oz over 1 oz bars
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <QASection items={pricesQA} includeSchema={false} priceData={priceData} />

      {/* Monex Research Link */}
      <section className="py-10 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-6">
            For detailed market analysis and pricing information:
          </p>
          <a
            href="https://www.monex.com/gold-prices/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-bullion-gold hover:text-bullion-goldLight transition-colors"
          >
            <span>Research gold prices at Monex</span>
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 section-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Learn More About 10 oz Gold Bars
          </h2>
          <p className="text-gray-400 mb-6">
            Explore our comprehensive{" "}
            <Link href="/resources" className="text-bullion-gold hover:underline">
              educational resources
            </Link>{" "}
            to deepen your understanding of 10 oz bar investing, or return to our{" "}
            <Link href="/" className="text-bullion-gold hover:underline">
              10 oz gold bar overview
            </Link>.
          </p>
          <Link href="/resources" className="btn-primary">
            Explore Resources
          </Link>
        </div>
      </section>
    </>
  );
}
