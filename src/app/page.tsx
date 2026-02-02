import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/siteConfig";
import QASection from "@/components/QASection";
import LiveGbozSpotCard from "@/components/LiveGbozSpotCard";
import CapitalRequirementsCard from "@/components/CapitalRequirementsCard";
import ComparingBarSizesEntryCostRow from "@/components/ComparingBarSizesEntryCostRow";
import { homeQA } from "@/data/qa-content";

export const metadata: Metadata = {
  title: "10 oz Gold Bars | Expert Guide to Ten Ounce Gold Bar Investing",
  description:
    "Comprehensive guide to 10 oz gold bars covering pricing, premiums, storage, and purchasing. The balanced choice for investors seeking lower premiums than 1 oz bars with more flexibility than kilo bars.",
  alternates: {
    canonical: SITE_CONFIG.canonicalDomain,
  },
  openGraph: {
    title: "10 oz Gold Bars | Expert Guide to Ten Ounce Gold Bar Investing",
    description:
      "Comprehensive guide to 10 oz gold bars covering pricing, premiums, storage, and purchasing. The balanced choice for serious gold investors.",
    url: SITE_CONFIG.domain,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "10 oz Gold Bars | Expert Guide to Ten Ounce Gold Bar Investing",
    description:
      "Comprehensive guide to 10 oz gold bars covering pricing, premiums, storage, and purchasing.",
  },
};

export default async function HomePage() {
  // Static fallbacks for SSG; live pricing is loaded client-side via cards and /api/spot
  const approxBarPrice = "~$20,000";
  const approxKiloPrice = "~$140,000";
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${SITE_CONFIG.brandName} - Your Guide to 10 oz Gold Bars`,
    description:
      "Comprehensive educational resource about 10 oz gold bars, the balanced choice for investors seeking lower premiums than 1 oz bars with more flexibility than kilo bars.",
    url: SITE_CONFIG.domain,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "10 oz Gold Bars",
    description:
      "Ten troy ounce gold bullion bars, offering a balanced combination of lower premiums and practical portability for precious metals investors.",
    brand: {
      "@type": "Brand",
      name: SITE_CONFIG.brandName,
    },
    category: "Gold Bars",
    material: "Gold",
    weight: {
      "@type": "QuantitativeValue",
      value: 10,
      unitCode: "ONT",
      unitText: "troy ounces",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Hero Section */}
      <section className="relative gold-bar-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bullion-darker via-transparent to-bullion-darker" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-bullion-gold/10 border border-bullion-gold/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-bullion-gold mr-3 animate-pulse" />
                <span className="text-bullion-gold text-sm font-medium">
                  10 Troy Ounces of Pure Gold
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-4">
                <span className="gold-text">10 oz Gold Bars</span>
                <br />
                <span className="text-white">
                  Practical Size. Strong Value.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-prose">
                Discover why 10 oz gold bars are the balanced choice for 
                investors seeking lower premiums than 1 oz bars with more 
                flexibility than kilo bars. Learn{" "}
                <Link href="/where-to-buy-10-oz-gold-bars" className="text-bullion-gold hover:underline">
                  where to buy 10 oz gold bars
                </Link>{" "}
                in our independent buying guide.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/live-gold-prices" className="btn-primary">
                  View Current Gold Prices
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
                <Link href="/resources" className="btn-secondary">
                  Explore Educational Library
                </Link>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="mt-12 lg:mt-0 flex justify-center lg:justify-end">
              <Image
                src="/10-oz-gold-bars-stacked.png"
                alt="10 oz gold bars stacked"
                width={500}
                height={500}
                className="max-w-sm w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Live Gold Price Section */}
      <section className="pt-4 pb-10 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
              <span className="gold-text">Live Gold Pricing</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Track real-time 10 oz gold bar prices with live market data updated on page load.
            </p>
          </div>
          <LiveGbozSpotCard />
        </div>
      </section>

      {/* Why 10 oz Gold Bars Section */}
      <section className="py-16 md:py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Why <span className="gold-text">10 oz Gold Bars</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              The 10 oz gold bar represents the optimal balance of 
              premium efficiency and practical flexibility for serious investors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card group">
              <div className="w-16 h-16 rounded-xl gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-white">
                Lower Premiums
              </h3>
              <p className="text-gray-400 leading-relaxed">
                10 oz bars typically carry 1.5-3% premiums over spot price, significantly 
                lower than 1 oz bars (3-8% premium). You get more gold for your money 
                while maintaining practical portability and liquidity.
              </p>
            </div>

            <div className="card group">
              <div className="w-16 h-16 rounded-xl gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-white">
                Balanced Flexibility
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Unlike kilo bars which require {approxKiloPrice}+ per bar, 10 oz bars let you 
                build meaningful positions at ~{approxBarPrice} per bar. Easier to buy, sell, 
                or gift in smaller increments while still benefiting from lower premiums.
              </p>
            </div>

            <div className="card group">
              <div className="w-16 h-16 rounded-xl gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-white">
                Easy Storage
              </h3>
              <p className="text-gray-400 leading-relaxed">
                A 10 oz bar is compact enough to fit in a home safe while holding 
                substantial value. Perfect for investors who want meaningful gold 
                positions without the storage challenges of larger denominations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Buys 10 oz Gold Bars */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 gold-bar-pattern opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                Who Buys <span className="gold-text">10 oz Gold Bars</span>?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                10 oz bars serve investors seeking the sweet spot between 
                premium efficiency and practical flexibility.
              </p>
              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-bullion-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-bullion-gold font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Serious Accumulators
                    </h3>
                    <p className="text-gray-400">
                      Investors building $25,000-$100,000+ gold positions find 
                      10 oz bars offer better value than 1 oz while remaining 
                      more practical than kilo bars for most storage situations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-bullion-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-bullion-gold font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Home Storage Buyers
                    </h3>
                    <p className="text-gray-400">
                      Those who prefer direct custody of their gold appreciate 
                      that 10 oz bars fit easily in home safes and safe deposit 
                      boxes while holding meaningful value per bar.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-bullion-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-bullion-gold font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Long-Term Holders
                    </h3>
                    <p className="text-gray-400">
                      Investors with 5-10+ year horizons prioritize lower 
                      premiums over divisibility. The savings on 10 oz bars 
                      versus 1 oz bars compound significantly over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
              <CapitalRequirementsCard />
            </div>
          </div>
        </div>
      </section>

      {/* Size Comparison */}
      <section className="py-16 md:py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Comparing <span className="gold-text">Bar Sizes</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Understanding how 10 oz gold bars compare to other sizes 
              helps you choose the right bar for your investment goals.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-bullion-gold/30">
                  <th className="text-left py-4 px-6 text-bullion-gold font-display">
                    Feature
                  </th>
                  <th className="text-center py-4 px-6 text-gray-500 font-display">
                    1 oz Bar
                  </th>
                  <th className="text-center py-4 px-6 text-bullion-gold font-display">
                    10 oz Bar
                  </th>
                  <th className="text-center py-4 px-6 text-gray-500 font-display">
                    1 Kilo Bar
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Premium Over Spot</td>
                  <td className="py-4 px-6 text-center">3-8%</td>
                  <td className="py-4 px-6 text-center text-green-400">
                    1.5-3% (Best Balance)
                  </td>
                  <td className="py-4 px-6 text-center">1-2%</td>
                </tr>
                <ComparingBarSizesEntryCostRow />
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Divisibility</td>
                  <td className="py-4 px-6 text-center">★★★★★</td>
                  <td className="py-4 px-6 text-center text-bullion-gold">★★★★☆</td>
                  <td className="py-4 px-6 text-center">★★☆☆☆</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Home Storage</td>
                  <td className="py-4 px-6 text-center">Easy</td>
                  <td className="py-4 px-6 text-center text-green-400">Easy</td>
                  <td className="py-4 px-6 text-center">Challenging</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6 font-medium">Liquidity</td>
                  <td className="py-4 px-6 text-center">★★★★★</td>
                  <td className="py-4 px-6 text-center text-bullion-gold">★★★★☆</td>
                  <td className="py-4 px-6 text-center">★★★☆☆</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Best For</td>
                  <td className="py-4 px-6 text-center">Flexibility</td>
                  <td className="py-4 px-6 text-center text-bullion-gold">
                    Best Balance
                  </td>
                  <td className="py-4 px-6 text-center">Maximum Value</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Considerations Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Important <span className="gold-text">Considerations</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              While 10 oz bars offer excellent balance, consider these factors 
              when deciding if they&apos;re right for your investment strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-xl font-display font-semibold text-white mb-4">
                Capital Commitment
              </h3>
              <p className="text-gray-400 mb-4">
                At ~{approxBarPrice} per bar, 10 oz bars require meaningful capital per 
                purchase. This is lower than kilo bars but higher than building 
                positions one ounce at a time.
              </p>
              <p className="text-gray-500 text-sm">
                <strong className="text-bullion-gold">Consider:</strong> If 
                you&apos;re investing $5,000-$10,000 initially, you might start 
                with 1 oz bars and graduate to 10 oz as your position grows.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-display font-semibold text-white mb-4">
                Partial Liquidation
              </h3>
              <p className="text-gray-400 mb-4">
                Unlike holding many 1 oz bars, selling means converting ~{approxBarPrice}{" "}
                at once. For flexibility, some investors hold a mix of 1 oz and 
                10 oz bars.
              </p>
              <p className="text-gray-500 text-sm">
                <strong className="text-bullion-gold">Consider:</strong> Keep 
                some 1 oz bars for smaller liquidity needs while using 10 oz 
                bars for core holdings.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-display font-semibold text-white mb-4">
                Storage Options
              </h3>
              <p className="text-gray-400 mb-4">
                A 10 oz bar is compact (roughly 60mm × 31mm × 9mm) and weighs 
                about 311 grams. Most home safes easily accommodate multiple 
                10 oz bars.
              </p>
              <p className="text-gray-500 text-sm">
                <strong className="text-bullion-gold">Consider:</strong> Bank 
                safe deposit boxes, home safes, or professional vault storage 
                all work well for 10 oz bars.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-display font-semibold text-white mb-4">
                Authentication
              </h3>
              <p className="text-gray-400 mb-4">
                Buy from established dealers and choose bars from recognized 
                refiners like PAMP Suisse, Credit Suisse, Royal Canadian Mint, 
                or Perth Mint. Look for assay certificates and security features.
              </p>
              <p className="text-gray-500 text-sm">
                <strong className="text-bullion-gold">Consider:</strong> Bars 
                in tamper-evident packaging from major mints command the best 
                resale prices and are easiest to authenticate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <QASection items={homeQA} priceData={null} />

      {/* CTA Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 gold-gradient opacity-5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Ready to Learn More?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore{" "}
            <Link href="/live-gold-prices" className="text-bullion-gold hover:underline">
              current gold prices
            </Link>
            , dive into our{" "}
            <Link href="/resources" className="text-bullion-gold hover:underline">
              educational library
            </Link>
            , and discover whether 10 oz gold bars are right for your 
            investment strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/live-gold-prices" className="btn-primary">
              View Current Gold Prices
            </Link>
            <Link href="/resources" className="btn-secondary">
              Explore Educational Library
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
