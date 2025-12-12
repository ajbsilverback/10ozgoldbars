import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import AISummary from '@/components/AISummary'

export const metadata: Metadata = {
  title: '10 oz Gold Bars: The Optimal Size for Serious Investors | 10ozGoldBars.com',
  description: 'Discover why 10 oz gold bars are the ideal choice for high-net-worth investors seeking the perfect balance between 1 oz coins and kilo bars. Lower premiums, better liquidity, efficient storage.',
  alternates: {
    canonical: 'https://www.10ozgoldbars.com',
  },
}

const whyBenefits = [
  {
    title: 'Premium Efficiency',
    description: '10 oz bars typically carry 2-4% premiums over spot—significantly lower than 1 oz coins (4-8%) while requiring less capital than kilo bars.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Optimal Stackability',
    description: 'The 10 oz format offers the perfect balance of density and portability. Build substantial positions without the bulk of larger bars or the spread of smaller units.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'High Liquidity',
    description: '10 oz bars from LBMA-approved refiners enjoy strong dealer recognition and tight buy/sell spreads, making them easy to liquidate when needed.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: 'Storage Efficiency',
    description: 'More gold per unit of vault space than coins means lower annual storage fees. A single 10 oz bar holds what would otherwise be 10 separate coin tubes.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Flexible Position Sizing',
    description: 'At roughly $20,000 per bar (at $2,000 spot), 10 oz bars allow systematic accumulation without the $60,000+ commitment of kilo bars.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

const audienceTypes = [
  {
    title: 'High-Net-Worth Investors',
    description: 'Sophisticated investors building substantial gold positions who want premium efficiency without the liquidity constraints of kilo bars.',
    icon: '💎',
  },
  {
    title: 'Retirement-Focused Savers',
    description: 'Those accumulating physical gold for long-term wealth preservation who can commit $20,000+ per purchase and prioritize storage efficiency.',
    icon: '🏦',
  },
  {
    title: 'Portfolio Diversifiers',
    description: 'Investors adding physical gold as a hedge against inflation and market volatility who want a meaningful allocation without overconcentration.',
    icon: '📊',
  },
]

const faqs = [
  {
    question: 'What is a 10 oz gold bar?',
    answer: 'A 10 oz gold bar is a rectangular bar of investment-grade gold weighing exactly 10 troy ounces (311.03 grams). These bars are refined to 99.99% purity (four nines fine) and produced by LBMA-approved mints. Each bar is stamped with its weight, purity, refiner hallmark, and unique serial number.',
  },
  {
    question: 'Why choose 10 oz bars over 1 oz coins?',
    answer: '10 oz bars offer significantly lower premiums per ounce (2-4% vs 4-8% for coins), more efficient storage, and reduced transaction costs when building larger positions. While coins offer more flexibility for partial liquidation, 10 oz bars are optimal for investors committing $20,000+ to gold.',
  },
  {
    question: 'Why choose 10 oz bars over kilo bars?',
    answer: 'While kilo bars offer slightly lower premiums (1-3%), they require $60,000+ per bar and can be harder to liquidate quickly. 10 oz bars provide a better balance of premium efficiency and liquidity, allowing more systematic accumulation and easier position management.',
  },
  {
    question: 'How much does a 10 oz gold bar cost?',
    answer: 'The price equals the spot price × 10 ounces, plus a dealer premium of 2-4%. At $2,000 spot, expect to pay $20,400-$20,800 for a 10 oz bar from a reputable dealer. LBMA-approved bars from premium refiners may carry slightly higher premiums.',
  },
  {
    question: 'Which refiners produce the best 10 oz gold bars?',
    answer: 'PAMP Suisse, Valcambi, Heraeus, and the Royal Canadian Mint produce the most recognized 10 oz bars. These LBMA-approved refiners ensure maximum liquidity and tight buy/sell spreads when you eventually sell.',
  },
]

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.10ozgoldbars.com/#webpage',
        url: 'https://www.10ozgoldbars.com',
        name: '10 oz Gold Bars: The Optimal Size for Serious Investors | 10ozGoldBars.com',
        description: 'Discover why 10 oz gold bars are the ideal choice for high-net-worth investors seeking the perfect balance between 1 oz coins and kilo bars.',
        isPartOf: {
          '@id': 'https://www.10ozgoldbars.com/#website',
        },
        about: {
          '@type': 'Thing',
          name: '10 oz Gold Bars',
        },
        mainEntity: {
          '@id': 'https://www.10ozgoldbars.com/#product',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.10ozgoldbars.com/#website',
        url: 'https://www.10ozgoldbars.com',
        name: '10ozGoldBars.com',
        description: 'Independent educational resource for gold investors focusing on 10 oz gold bars, live gold prices, and precious metals market education.',
        publisher: {
          '@type': 'Organization',
          '@id': 'https://www.10ozgoldbars.com/#organization',
          name: '10ozGoldBars.com',
          url: 'https://www.10ozgoldbars.com',
        },
      },
      {
        '@type': 'Organization',
        '@id': 'https://www.10ozgoldbars.com/#organization',
        name: '10ozGoldBars.com',
        url: 'https://www.10ozgoldbars.com',
      },
      {
        '@type': 'Product',
        '@id': 'https://www.10ozgoldbars.com/#product',
        name: '10 oz Gold Bar',
        description: 'Investment-grade 10 oz gold bar with 99.99% purity from LBMA-approved mints. Contains 10 troy ounces of pure gold.',
        image: 'https://www.10ozgoldbars.com/10-oz-gold-bar-hero.png',
        brand: {
          '@type': 'Brand',
          name: '10ozGoldBars.com',
        },
        weight: {
          '@type': 'QuantitativeValue',
          value: '10',
          unitCode: 'ONZ',
        },
        material: 'Gold',
        additionalProperty: [
          {
            '@type': 'PropertyValue',
            name: 'Purity',
            value: '99.99%',
          },
          {
            '@type': 'PropertyValue',
            name: 'Troy Ounces',
            value: '10',
          },
          {
            '@type': 'PropertyValue',
            name: 'Standard',
            value: 'LBMA Good Delivery',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.10ozgoldbars.com/#faq',
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
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#000000]">
        {/* Subtle gold radial accents */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `radial-gradient(ellipse at 15% 50%, rgba(198, 154, 53, 0.12) 0%, transparent 50%),
                           radial-gradient(ellipse at 85% 80%, rgba(198, 154, 53, 0.08) 0%, transparent 50%)`,
        }} />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-[2.25rem] md:text-5xl lg:text-[3.25rem] font-bold tracking-tight mb-6 leading-[1.1]">
                <span className="text-white">10 oz Gold Bars:</span>
                <br />
                <span className="gold-shimmer">The Optimal Size for Serious Investors</span>
              </h1>
              
              <p className="text-lg md:text-xl text-[#CCCCCC] mb-5 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                10 oz gold bars occupy the sweet spot between flexibility and efficiency. They offer 
                lower premiums than 1 oz coins while requiring less capital than kilo bars.
              </p>
              
              <p className="text-base text-[#999999] mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Whether you&apos;re optimizing premium costs, simplifying storage, or maintaining liquidity, 
                the 10 oz format delivers the best of both worlds for high-net-worth investors.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/prices"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#C69A35] text-[#000000] font-semibold hover:bg-[#A67F28] transition-colors"
                >
                  View Gold Prices
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/resources"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md border-[1.5px] border-[#C69A35] text-[#C69A35] font-semibold hover:bg-[rgba(198,154,53,0.1)] transition-colors"
                >
                  Explore Resources
                </Link>
              </div>
            </div>
            
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-80 h-72 sm:w-96 sm:h-80 md:w-[440px] md:h-[360px]">
                <div className="absolute inset-0 bg-[#C69A35] rounded-full blur-[80px] opacity-15 animate-pulse" />
                <Image
                  src="/10-oz-gold-bars-stacked.png"
                  alt="10 oz Gold Bars from Credit Suisse, PAMP, Johnson Matthey - Investment Grade 999.9 Fine Gold"
                  fill
                  className="object-contain drop-shadow-[0_16px_40px_rgba(198,154,53,0.2)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* At a Glance Summary for AI/GEO */}
      <section className="py-8 bg-[#EFE9D9]">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <AISummary
            title="At a Glance"
            bullets={[
              'This page explains why 10 oz gold bars are an optimal format for serious gold investors.',
              'Learn how 10 oz bars compare to 1 oz coins and kilo bars in terms of premiums, liquidity, and storage.',
              'Discover who benefits most from the 10 oz gold bar format: HNW investors, retirement savers, and portfolio diversifiers.',
              'Find specifications, pricing context, and answers to common questions about 10 oz gold bars.',
            ]}
          />
        </div>
      </section>

      {/* Why 10 oz Gold Bars Section */}
      <section className="py-16 md:py-24 bg-[#EFE9D9]">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Why <span className="text-[#C69A35]">10 oz Gold Bars?</span>
            </h2>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto leading-relaxed">
              The 10 oz format offers a unique combination of benefits that make it the preferred 
              choice for investors who have outgrown 1 oz coins but don&apos;t need kilo bars. 
              For current market pricing, visit our{' '}
              <Link href="/prices" className="text-[#C69A35] hover:text-[#A67F28] hover:underline">live gold prices page</Link>.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyBenefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 border border-[#E5E0D1] shadow-card hover:shadow-card-hover hover:border-[#C69A35] transition-all duration-200"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[rgba(198,154,53,0.1)] text-[#C69A35] mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#111111] mb-2 font-display">
                  {benefit.title}
                </h3>
                <p className="text-[#666666] leading-relaxed text-[0.9375rem]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Are 10 oz Gold Bars For Section */}
      <section className="py-16 md:py-24 bg-[#F5F0E3]">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Who Are <span className="text-[#C69A35]">10 oz Gold Bars</span> For?
            </h2>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto leading-relaxed">
              10 oz gold bars are designed for investors who take gold seriously—those with the 
              capital and commitment to optimize their physical gold holdings.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-5">
            {audienceTypes.map((audience, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 border border-[#E5E0D1] shadow-card hover:shadow-card-hover hover:border-[#C69A35] transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-[rgba(198,154,53,0.1)] flex items-center justify-center text-2xl mb-5">
                  {audience.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#111111] mb-3 font-display">
                  {audience.title}
                </h3>
                <p className="text-[#666666] leading-relaxed">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-[#666666] mb-3">
              Ready to understand how 10 oz bars fit into your investment strategy?
            </p>
            <Link 
              href="/resources/are-10-oz-gold-bars-smart-investment-2025" 
              className="text-[#C69A35] font-medium hover:text-[#A67F28] hover:underline underline-offset-4"
            >
              Read: Are 10 oz Gold Bars a Smart Way to Own Gold? →
            </Link>
            <p className="mt-4 text-sm text-[#888888]">
              See our independent{' '}
              <Link href="/where-to-buy" className="text-[#C69A35] hover:underline">where-to-buy guide</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="py-16 md:py-24 bg-[#EFE9D9]">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-5">
                10 oz Gold Bar <span className="text-[#C69A35]">Specifications</span>
              </h2>
              <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                Every 10 oz gold bar from an LBMA-approved refiner meets exacting standards 
                for purity, weight, and documentation. Here&apos;s what you get with each bar.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Exactly 10 troy ounces (311.03 grams) of pure gold',
                  '99.99% purity (four nines fine) guaranteed',
                  'Unique serial number and assay certificate',
                  'LBMA Good Delivery standard compliance',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[rgba(198,154,53,0.15)] flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-[#C69A35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-[#3D3D3D]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-[#000000] rounded-lg p-8">
              <h3 className="text-xl font-semibold text-white mb-6 font-display">
                Quick Reference
              </h3>
              <dl className="space-y-0">
                {[
                  { label: 'Weight', value: '10 Troy Ounces (311.03 g)', highlight: false },
                  { label: 'Purity', value: '99.99% (Four Nines Fine)', highlight: true },
                  { label: 'Dimensions', value: '~60 × 30 × 17 mm', highlight: false },
                  { label: 'Standards', value: 'LBMA Good Delivery', highlight: false },
                  { label: 'Typical Premium', value: '2-4% over spot', highlight: false },
                ].map((item, index, arr) => (
                  <div key={index} className={`flex justify-between py-4 ${index < arr.length - 1 ? 'border-b border-[#333333]' : ''}`}>
                    <dt className="text-[#888888]">{item.label}</dt>
                    <dd className={`font-medium ${item.highlight ? 'text-[#C69A35]' : 'text-white'}`}>{item.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-sm text-[#888888]">
                Track current prices on our <Link href="/prices" className="text-[#C69A35] hover:underline underline-offset-2">gold prices page</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-[#F5F0E3]">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto">
              Expert answers to common questions about investing in 10 oz gold bars.
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
          
          <div className="mt-10 text-center">
            <p className="text-[#666666]">
              Have more questions? Explore our{' '}
              <Link href="/resources" className="text-[#C69A35] hover:text-[#A67F28] font-medium hover:underline underline-offset-4">
                complete 10 oz gold bar resource library
              </Link>{' '}
              for in-depth articles on storage, dealers, and investment strategies.
            </p>
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
                How do 10 oz gold bars compare to 1 oz coins and kilo bars?
              </h3>
              <p className="text-[#3D3D3D] text-sm leading-relaxed">
                10 oz gold bars occupy the middle ground: they offer lower premiums than 1 oz coins (2-4% vs 4-8%) 
                while requiring less capital than kilo bars ($20,000 vs $60,000+). This makes them ideal for 
                investors seeking premium efficiency without sacrificing liquidity.
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 border border-[#E5E0D1]">
              <h3 className="text-base font-semibold text-[#C69A35] mb-2">
                Why do some investors prefer 10 oz bars over smaller gold pieces?
              </h3>
              <p className="text-[#3D3D3D] text-sm leading-relaxed">
                Investors with larger allocations prefer 10 oz bars because they reduce per-ounce costs, 
                simplify storage (fewer items to track), and lower annual vault fees. A single 10 oz bar 
                is more efficient than ten 1 oz coins for building substantial positions.
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 border border-[#E5E0D1]">
              <h3 className="text-base font-semibold text-[#C69A35] mb-2">
                Where can I learn more about gold prices and 10 oz bar premiums?
              </h3>
              <p className="text-[#3D3D3D] text-sm leading-relaxed">
                Visit our <Link href="/prices" className="text-[#C69A35] hover:underline">gold prices page</Link> for 
                live spot price charts and detailed explanations of how premiums work. For comprehensive guides 
                on storage, dealers, and investment strategies, explore the{' '}
                <Link href="/resources" className="text-[#C69A35] hover:underline">10 oz gold bar resources library</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#000000]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Ready to Explore 10 oz Gold Bars?
          </h2>
          <p className="text-lg text-[#999999] mb-10 max-w-2xl mx-auto leading-relaxed">
            Check live gold prices, explore our educational resources, and make informed decisions 
            about adding 10 oz gold bars to your precious metals portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/prices"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#C69A35] text-[#000000] font-semibold hover:bg-[#A67F28] transition-colors"
            >
              View Gold Prices
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border-[1.5px] border-[#C69A35] text-[#C69A35] font-semibold hover:bg-[rgba(198,154,53,0.1)] transition-colors"
            >
              Explore Resources
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
