import type { Metadata } from 'next'
import Link from 'next/link'
import GoldCharts from './GoldCharts'
import AISummary from '@/components/AISummary'

export const metadata: Metadata = {
  title: 'Gold Prices & 10 oz Gold Bar Market Overview | 10ozGoldBars.com',
  description: 'Track live gold spot prices and understand how they relate to 10 oz gold bar pricing. Learn about premiums, bid/ask spreads, and dealer pricing for 10 oz bars.',
  alternates: {
    canonical: 'https://www.10ozgoldbars.com/prices',
  },
}

const faqs = [
  {
    question: 'Why do 10 oz gold bar prices differ between dealers?',
    answer: 'Dealer pricing varies based on their business model, overhead costs, inventory levels, and profit margins. Some dealers offer lower premiums but charge higher shipping, while others include shipping but have higher per-ounce costs. LBMA-approved bars from premium refiners (PAMP Suisse, Valcambi) typically command higher premiums than generic bars. Always calculate total cost including shipping and insurance when comparing dealers.',
  },
  {
    question: 'How do 10 oz bars compare to 1 oz coins and kilo bars in pricing?',
    answer: '10 oz gold bars typically carry premiums of 2-4% over spot, positioning them between 1 oz coins (4-8% premiums) and kilo bars (1-3% premiums). This makes 10 oz bars the "sweet spot" for many investors—offering better premium efficiency than coins while requiring less capital than kilos. For a $20,000 spot value, you might save $200-400 versus buying ten 1 oz coins.',
  },
  {
    question: 'How often do gold prices move?',
    answer: 'Gold spot prices change continuously during market hours, which span nearly 24 hours across global exchanges (London, New York, Shanghai, Tokyo). During active trading, prices can update multiple times per second. Major price movements typically occur around economic data releases, Fed announcements, and geopolitical events. For long-term 10 oz bar investors, daily fluctuations matter less than multi-month trends.',
  },
  {
    question: 'What are typical spreads when buying and selling 10 oz gold bars?',
    answer: 'When buying, expect to pay 2-4% over spot for 10 oz bars from reputable dealers. When selling, dealers typically pay 1-2% below spot. This creates a total round-trip spread of 3-6%. LBMA-approved bars from recognized refiners command tighter spreads due to easier authentication. Generic or lesser-known bars may face wider spreads, especially when selling.',
  },
  {
    question: 'Should I wait for gold prices to drop before buying 10 oz bars?',
    answer: 'Timing the market is notoriously difficult, even for professionals. Most financial advisors recommend dollar-cost averaging—buying at regular intervals regardless of price. This strategy reduces the risk of buying at a peak while ensuring you acquire gold over time. For 10 oz bars, consider buying one bar quarterly rather than waiting for the "perfect" price that may never come.',
  },
]

export default function PricesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.10ozgoldbars.com/prices/#webpage',
        url: 'https://www.10ozgoldbars.com/prices',
        name: 'Gold Prices & 10 oz Gold Bar Market Overview | 10ozGoldBars.com',
        description: 'Track live gold spot prices and understand how they relate to 10 oz gold bar pricing. Learn about premiums, bid/ask spreads, and dealer pricing dynamics.',
        isPartOf: {
          '@id': 'https://www.10ozgoldbars.com/#website',
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.10ozgoldbars.com',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Gold Prices',
              item: 'https://www.10ozgoldbars.com/prices',
            },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.10ozgoldbars.com/prices/#faq',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="py-14 md:py-20 bg-[#000000]">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <nav className="mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center justify-center gap-2 text-sm text-[#888888]">
                <li><Link href="/" className="hover:text-[#C69A35] transition-colors">Home</Link></li>
                <li className="text-[#666666]">/</li>
                <li className="text-[#CCCCCC]">Gold Prices</li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Gold Prices & <span className="gold-shimmer">10 oz Bar Market Overview</span>
            </h1>
            <p className="text-lg text-[#CCCCCC] leading-relaxed">
              The gold spot price is the baseline for all physical gold products, including 10 oz bars. 
              Understanding spot prices, premiums, and market dynamics helps you make informed purchasing decisions.
            </p>
          </div>
        </div>
      </section>

      {/* At a Glance Summary for AI/GEO */}
      <section className="py-8 bg-[#EFE9D9]">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <AISummary
            title="At a Glance"
            bullets={[
              'This page explains how gold spot prices work and their relationship to 10 oz gold bar pricing.',
              'View live gold price charts (provided via Monex) to track current market conditions.',
              'Understand premiums, bid/ask spreads, and why dealer prices vary for 10 oz bars.',
              'Learn practical strategies for timing purchases and comparing dealer offers.',
            ]}
          />
        </div>
      </section>

      {/* Spot Summary Cards */}
      <section className="py-12 md:py-16 bg-[#EFE9D9]">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="bg-white border border-[#E5E0D1] rounded-lg p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#111111] mb-6 flex items-center gap-3 font-display">
              <span className="w-9 h-9 rounded-lg bg-[rgba(198,154,53,0.1)] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#C69A35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </span>
              Understanding Gold Spot Prices
            </h2>
            
            <div className="grid md:grid-cols-3 gap-5 mb-6">
              <div className="bg-[#F5F0E3] rounded-lg p-5 border border-[#E5E0D1]">
                <p className="text-sm text-[#666666] mb-1">Spot Price</p>
                <p className="text-2xl font-bold text-[#111111]">USD/oz</p>
                <p className="text-xs text-[#888888] mt-2">Per troy ounce</p>
              </div>
              <div className="bg-[#F5F0E3] rounded-lg p-5 border border-[#E5E0D1]">
                <p className="text-sm text-[#666666] mb-1">10 oz Bar Value</p>
                <p className="text-2xl font-bold text-[#C69A35]">Spot × 10</p>
                <p className="text-xs text-[#888888] mt-2">+ dealer premium</p>
              </div>
              <div className="bg-[#F5F0E3] rounded-lg p-5 border border-[#E5E0D1]">
                <p className="text-sm text-[#666666] mb-1">Typical Premium</p>
                <p className="text-2xl font-bold text-[#111111]">2-4%</p>
                <p className="text-xs text-[#888888] mt-2">Over spot price</p>
              </div>
            </div>
            
            <p className="text-sm text-[#666666]">
              <strong className="text-[#111111]">Note:</strong> The values shown in the charts below are for educational purposes. 
              For real-time pricing and to execute purchases, always verify current prices with a reputable dealer.
            </p>
          </div>
        </div>
      </section>

      {/* Live Charts Section */}
      <section className="py-12 md:py-16 bg-[#F5F0E3]">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-2 font-display">
            Live Gold Price Charts
          </h2>
          <p className="text-[#666666] mb-8 leading-relaxed">
            Track real-time gold spot prices and compare precious metals. Use these charts to monitor 
            market movements and identify potential entry points for your 10 oz gold bar purchases.
          </p>
          
          <GoldCharts />
        </div>
      </section>

      {/* How Spot Price Relates Section */}
      <section className="py-14 md:py-20 bg-[#EFE9D9]">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-8 font-display">
            How Spot Price Relates to 10 oz Gold Bar Pricing
          </h2>
          
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-[#000000] rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#C69A35] font-display">Premiums Over Spot</h3>
              <p className="text-[#CCCCCC] mb-5 leading-relaxed">
                When you buy a 10 oz gold bar, you pay the spot price multiplied by 10 ounces, 
                plus a premium. This premium covers:
              </p>
              <ul className="space-y-3 text-[#CCCCCC]">
                {['Manufacturing and refining costs', 'Assaying and certification', 'Dealer inventory and handling', 'Shipping and insurance'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C69A35] mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-[#E5E0D1] shadow-card">
              <h3 className="text-xl font-semibold mb-4 text-[#111111] font-display">Brand & Size Impact</h3>
              <p className="text-[#666666] mb-5 leading-relaxed">
                Not all 10 oz bars carry the same premium. Factors affecting price include:
              </p>
              <div className="space-y-0">
                {[
                  { label: 'PAMP Suisse, Valcambi', value: 'Higher premium', color: 'text-[#C69A35]' },
                  { label: 'Generic/Secondary Market', value: 'Lower premium', color: 'text-[#666666]' },
                  { label: '10 oz vs 1 oz', value: '~2% savings', color: 'text-emerald-700' },
                  { label: '10 oz vs Kilo', value: '~1% higher', color: 'text-amber-700' },
                ].map((item, i, arr) => (
                  <div key={i} className={`flex justify-between items-center py-3 ${i < arr.length - 1 ? 'border-b border-[#E5E0D1]' : ''}`}>
                    <span className="text-[#3D3D3D]">{item.label}</span>
                    <span className={`font-medium ${item.color}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-white rounded-lg p-6 border border-[#E5E0D1]">
            <h3 className="text-lg font-semibold text-[#111111] mb-3 font-display">Buy/Sell Spreads Explained</h3>
            <p className="text-[#666666] leading-relaxed">
              The <strong className="text-[#111111]">bid price</strong> is what dealers pay when you sell gold. The <strong className="text-[#111111]">ask price</strong> is 
              what you pay when buying. The difference (spread) is the dealer&apos;s margin. For 10 oz bars, expect 
              to pay 2-4% above spot when buying and receive 1-2% below spot when selling. LBMA-certified bars 
              from major refiners typically have tighter spreads due to easier authentication and higher liquidity.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-[#F5F0E3]">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4 font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto">
              Common questions about gold pricing and how it affects 10 oz gold bar purchases.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 border border-[#E5E0D1] shadow-card hover:border-[#C69A35]/50 transition-all"
              >
                <h3 className="text-[1.0625rem] font-semibold text-[#C69A35] mb-3 font-display">
                  {faq.question}
                </h3>
                <p className="text-[#666666] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Q&A for GEO */}
      <section className="py-12 md:py-16 bg-[#EFE9D9]">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-[#111111] mb-6 font-display">Additional Questions</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border border-[#E5E0D1]">
              <h3 className="text-base font-semibold text-[#C69A35] mb-2">
                How does spot gold price affect 10 oz gold bar premiums?
              </h3>
              <p className="text-[#3D3D3D] text-sm leading-relaxed">
                The spot price is the base cost; your total price is spot × 10 ounces + dealer premium (typically 2-4%). 
                During high volatility or supply shortages, premiums may increase temporarily. In calm markets, 
                competition keeps premiums tighter. The spot price moves independently of premiums.
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 border border-[#E5E0D1]">
              <h3 className="text-base font-semibold text-[#C69A35] mb-2">
                Why do buy and sell prices for 10 oz bars differ between dealers?
              </h3>
              <p className="text-[#3D3D3D] text-sm leading-relaxed">
                Each dealer sets their own margins based on overhead, inventory costs, and business model. 
                Online dealers often have lower premiums but may charge shipping. Local dealers may have higher 
                premiums but offer immediate transactions. Always compare total cost, not just the per-ounce price.
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 border border-[#E5E0D1]">
              <h3 className="text-base font-semibold text-[#C69A35] mb-2">
                Where can I learn more about 10 oz gold bars beyond pricing?
              </h3>
              <p className="text-[#3D3D3D] text-sm leading-relaxed">
                Return to our <Link href="/" className="text-[#C69A35] hover:underline">10 oz gold bar home page</Link> for 
                an overview of why this format is popular, or explore the{' '}
                <Link href="/resources" className="text-[#C69A35] hover:underline">educational resource library</Link> for 
                guides on storage, dealer evaluation, and portfolio strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Further Reading */}
      <section className="py-12 md:py-16 bg-[#EFE9D9]">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="bg-white rounded-lg p-6 md:p-8 border border-[#E5E0D1]">
            <h2 className="text-xl font-bold text-[#111111] mb-3 font-display">Further Reading</h2>
            <p className="text-[#666666] leading-relaxed">
              For comprehensive information on 10 oz gold bar pricing, premiums, and market dynamics, explore{' '}
              <a 
                href="https://www.monex.com/10-oz-gold-bullion-bar-price-charts/" 
                target="_blank" 
                rel="nofollow noopener noreferrer"
                className="text-[#C69A35] font-medium hover:text-[#A67F28] hover:underline underline-offset-2"
              >
                this in-depth guide to 10 oz gold bar price charts
              </a>
              {' '}for historical data and additional market insights.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#000000]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 font-display">
            Ready to Learn More About 10 oz Gold Bars?
          </h2>
          <p className="text-[#999999] mb-10 leading-relaxed">
            Explore our comprehensive resources on 10 oz gold bars, including storage strategies, 
            dealer evaluation, and portfolio optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#C69A35] text-[#000000] font-semibold hover:bg-[#A67F28] transition-colors"
            >
              Explore Resources
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border-[1.5px] border-[#C69A35] text-[#C69A35] font-semibold hover:bg-[rgba(198,154,53,0.1)] transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
