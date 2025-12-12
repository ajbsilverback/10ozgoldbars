import type { Metadata } from 'next'
import Link from 'next/link'
import { resources, categories } from '@/data/resources'
import ResourceCard from '@/components/ResourceCard'
import AISummary from '@/components/AISummary'

export const metadata: Metadata = {
  title: '10 oz Gold Bar Resources & Gold Market Education | 10ozGoldBars.com',
  description: 'Comprehensive educational resources on 10 oz gold bars, premiums, storage strategies, and gold market fundamentals. Expert insights for high-net-worth investors.',
  alternates: {
    canonical: 'https://www.10ozgoldbars.com/resources',
  },
}

interface PageProps {
  searchParams: Promise<{ category?: string }>
}

export default async function ResourcesPage({ searchParams }: PageProps) {
  const { category } = await searchParams
  
  // Filter resources based on category param (currently only gold-market)
  const filteredResources = category
    ? resources.filter(r => r.categorySlug === category)
    : resources
  
  const goldMarketArticles = filteredResources.filter(r => r.category === 'Gold Market & Investing')
  
  const activeCategory = category || 'all'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.10ozgoldbars.com/resources/#webpage',
        url: 'https://www.10ozgoldbars.com/resources',
        name: '10 oz Gold Bar Resources & Gold Market Education | 10ozGoldBars.com',
        description: 'Comprehensive educational resources on 10 oz gold bars, premiums, storage, and market fundamentals.',
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
              name: 'Resources',
              item: 'https://www.10ozgoldbars.com/resources',
            },
          ],
        },
      },
      {
        '@type': 'CollectionPage',
        '@id': 'https://www.10ozgoldbars.com/resources/#collection',
        name: '10 oz Gold Bar Resources',
        description: 'Educational articles about 10 oz gold bars, market fundamentals, and gold investing strategies.',
        url: 'https://www.10ozgoldbars.com/resources',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: resources.map((resource, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: `https://www.10ozgoldbars.com/resources/${resource.slug}`,
            name: resource.title,
          })),
        },
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
                <li className="text-[#CCCCCC]">Resources</li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              10 oz Gold Bar <span className="gold-shimmer">Resources</span>
            </h1>
            <p className="text-lg text-[#CCCCCC] leading-relaxed mb-4">
              10 oz gold bars represent the optimal intersection of premium efficiency and practical liquidity 
              in the physical gold market. Our comprehensive resource library helps you understand how this 
              format fits into the broader gold investment landscape.
            </p>
            <p className="text-base text-[#999999] leading-relaxed">
              Whether you&apos;re comparing bar sizes, evaluating dealers, or planning storage, 
              these guides provide the insights you need to make informed decisions.
            </p>
            <p className="text-sm text-[#888888] mt-4">
              New:{' '}
              <Link href="/where-to-buy" className="text-[#C69A35] hover:underline">
                Where to buy 10 oz gold bars
              </Link>{' '}
              — our independent dealer guide.
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
              'This page indexes educational articles about 10 oz gold bars and the broader gold market.',
              'Topics include premiums, storage strategies, dealer evaluation, inflation hedging, and format comparisons.',
              'Each resource provides actionable insights for investors considering 10 oz gold bars.',
              'Start with featured guides or browse by category to find relevant information.',
            ]}
          />
        </div>
      </section>

      {/* Category Filter Buttons */}
      <section className="py-6 bg-[#EFE9D9]">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/resources"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#C69A35] text-[#000000]'
                  : 'bg-white text-[#666666] border border-[#E5E0D1] hover:border-[#C69A35] hover:text-[#C69A35]'
              }`}
            >
              All Resources
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/resources?category=${cat.slug}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat.slug
                    ? 'bg-[#C69A35] text-[#000000]'
                    : 'bg-white text-[#666666] border border-[#E5E0D1] hover:border-[#C69A35] hover:text-[#C69A35]'
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Starting Points */}
      <section className="py-12 md:py-16 bg-[#EFE9D9]">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="bg-white border border-[#E5E0D1] rounded-lg p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-[#111111] mb-6 flex items-center gap-3 font-display">
              <span className="w-9 h-9 rounded-lg bg-[rgba(198,154,53,0.1)] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#C69A35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </span>
              Start Here: Essential 10 oz Gold Bar Guides
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { num: '1', href: '/resources/are-10-oz-gold-bars-smart-investment-2025', title: 'Are 10 oz Gold Bars a Smart Way to Own Gold?', desc: 'Understand the case for 10 oz bars' },
                { num: '2', href: '/resources/10-oz-gold-bars-vs-1-oz-coins', title: '10 oz Bars vs 1 oz Coins vs Kilo Bars', desc: 'Compare formats for your needs' },
                { num: '3', href: '/resources/understanding-gold-spot-bid-ask-premiums', title: 'Understanding Spot, Bid, Ask & Premiums', desc: 'Master gold pricing fundamentals' },
                { num: '4', href: '/resources/how-to-evaluate-gold-dealers', title: 'How to Evaluate Gold Dealers', desc: 'Find reputable sources for 10 oz bars' },
              ].map((item) => (
                <Link 
                  key={item.num}
                  href={item.href}
                  className="flex items-center gap-4 p-4 bg-[#F5F0E3] rounded-lg border border-[#E5E0D1] hover:border-[#C69A35] shadow-card hover:shadow-card-hover transition-all group"
                >
                  <span className="w-10 h-10 rounded-lg bg-[rgba(198,154,53,0.1)] flex items-center justify-center text-[#C69A35] font-semibold group-hover:bg-[#C69A35] group-hover:text-white transition-all">
                    {item.num}
                  </span>
                  <div>
                    <p className="font-semibold text-[#111111] group-hover:text-[#C69A35] transition-colors">{item.title}</p>
                    <p className="text-sm text-[#666666]">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gold Market & Investing Section */}
      <section className="py-14 md:py-20 bg-[#F5F0E3]">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[#111111] font-display">
                10 oz Gold Bars & <span className="text-[#C69A35]">Market Investing</span>
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-[#C69A35]/50 to-transparent"></div>
            </div>
            <p className="text-[#666666] max-w-2xl leading-relaxed">
              Deep-dive articles on 10 oz gold bars, pricing dynamics, storage solutions, 
              and strategic approaches to physical gold investing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {goldMarketArticles.map((resource) => (
              <ResourceCard
                key={resource.slug}
                title={resource.title}
                category={resource.category}
                excerpt={resource.excerpt}
                slug={resource.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Q&A for GEO */}
      <section className="py-12 md:py-16 bg-[#EFE9D9]">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-[#111111] mb-6 font-display">Questions About This Library</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border border-[#E5E0D1]">
              <h3 className="text-base font-semibold text-[#C69A35] mb-2">
                What topics are covered in the 10 oz gold bar resources library?
              </h3>
              <p className="text-[#3D3D3D] text-sm leading-relaxed">
                Our library covers premiums and pricing, storage strategies, dealer evaluation, inflation hedging, 
                physical gold vs ETFs, format comparisons (10 oz bars vs coins vs kilos), and practical guidance 
                for building a gold portfolio. All content focuses specifically on 10 oz gold bars and the gold market.
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 border border-[#E5E0D1]">
              <h3 className="text-base font-semibold text-[#C69A35] mb-2">
                Are these resources suitable for beginners or experienced gold investors?
              </h3>
              <p className="text-[#3D3D3D] text-sm leading-relaxed">
                Both. Each article is written to be accessible to newcomers while providing enough depth for 
                experienced investors. We recommend starting with the featured guides above if you&apos;re new to 
                10 oz gold bars, then exploring specific topics as needed.
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 border border-[#E5E0D1]">
              <h3 className="text-base font-semibold text-[#C69A35] mb-2">
                Where can I track current gold prices alongside these resources?
              </h3>
              <p className="text-[#3D3D3D] text-sm leading-relaxed">
                Visit our <Link href="/prices" className="text-[#C69A35] hover:underline">gold prices page</Link> for 
                live spot price charts and educational content on how pricing affects 10 oz gold bars. You can also 
                return to the <Link href="/" className="text-[#C69A35] hover:underline">home page</Link> for 
                an overview of why 10 oz bars are a preferred format.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#000000]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5 font-display">
            Ready to Track Gold Prices?
          </h2>
          <p className="text-[#999999] mb-10 leading-relaxed">
            Monitor real-time gold spot prices and understand how they affect 10 oz bar pricing.
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
