import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Where to Buy 10 oz Gold Bars | Independent Buying Guide',
  description: 'Learn where to buy 10 oz gold bars online and locally, including major dealers, local coin shops, marketplaces, and storage providers. Educational guidance only.',
  alternates: {
    canonical: 'https://www.10ozgoldbars.com/where-to-buy',
  },
}

const dealers = [
  {
    name: 'Monex',
    description: 'Long-established precious metals dealer offering gold bars, coins, and storage programs. Known for market data and educational resources.',
    url: 'https://www.monex.com/',
  },
  {
    name: 'APMEX',
    description: 'Large online retailer with extensive inventory of gold bars from various refiners. Offers both new and secondary market products.',
    url: 'https://www.apmex.com/',
  },
  {
    name: 'JM Bullion',
    description: 'Online dealer offering competitive pricing on gold bars and coins. Provides detailed product specifications and educational content.',
    url: 'https://www.jmbullion.com/',
  },
  {
    name: 'SD Bullion',
    description: 'Bullion dealer known for competitive premiums. Offers 10 oz bars from major refiners with transparent pricing.',
    url: 'https://sdbullion.com/',
  },
  {
    name: 'Kitco',
    description: 'Global precious metals dealer and information provider. Offers gold bars alongside real-time market data and analysis.',
    url: 'https://online.kitco.com/',
  },
  {
    name: 'Bullion Exchanges',
    description: 'New York-based dealer offering gold bars and coins. Provides IRA-eligible products and secure storage options.',
    url: 'https://bullionexchanges.com/',
  },
]

const evaluationCriteria = [
  {
    title: 'Reputation & Track Record',
    description: 'Look for dealers with established history, industry accreditations (e.g., NGC, PCGS authorized), and verified customer reviews across multiple platforms.',
  },
  {
    title: 'Pricing Transparency',
    description: 'Compare premiums over spot across dealers. Understand bid/ask spreads and total cost including any fees before committing.',
  },
  {
    title: 'Shipping & Insurance',
    description: 'Verify shipping costs, insurance coverage, and delivery timeframes. Reputable dealers fully insure shipments until delivery confirmation.',
  },
  {
    title: 'Buyback Policies',
    description: 'Understand dealer buyback terms before purchasing. Good dealers offer competitive buyback prices and clear processes.',
  },
  {
    title: 'Authentication & Packaging',
    description: 'Ensure bars come with proper assay cards, original mint packaging, and verifiable serial numbers for resale value.',
  },
  {
    title: 'Customer Support',
    description: 'Test responsiveness before buying. Quality dealers provide knowledgeable support via phone, email, and chat.',
  },
  {
    title: 'Storage Options',
    description: 'Some dealers offer allocated storage programs. Evaluate vault locations, insurance, audit practices, and fee structures.',
  },
]

export default function WhereToBuyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://www.10ozgoldbars.com/where-to-buy/#webpage',
    url: 'https://www.10ozgoldbars.com/where-to-buy',
    name: 'Where to Buy 10 oz Gold Bars | Independent Buying Guide',
    description: 'Learn where to buy 10 oz gold bars online and locally, including major dealers, local coin shops, marketplaces, and storage providers.',
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
          name: 'Where to Buy',
          item: 'https://www.10ozgoldbars.com/where-to-buy',
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-16">
          
          {/* Hero Section */}
          <section>
            <nav className="mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-[#888888]">
                <li><Link href="/" className="hover:text-[#C69A35] transition-colors">Home</Link></li>
                <li className="text-[#666666]">/</li>
                <li className="text-[#3D3D3D]">Where to Buy</li>
              </ol>
            </nav>
            
            <h1 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6 font-display">
              Where to Buy <span className="text-[#C69A35]">10 oz Gold Bars</span>
            </h1>
            
            <div className="bg-[#F5F0E3] border border-[#E5E0D1] rounded-lg p-5 mb-6">
              <p className="text-[#3D3D3D] leading-relaxed">
                <strong className="text-[#111111]">10ozGoldBars.com is an independent educational site.</strong>{' '}
                We do not sell precious metals and are not affiliated with any of the dealers listed below. 
                This guide is provided for informational purposes only to help you understand your purchasing options.
              </p>
            </div>
            
            <p className="text-[#666666] leading-relaxed">
              When purchasing 10 oz gold bars, you have several options: online bullion dealers, 
              local coin shops, auction platforms, and vaulted storage programs. Each channel has 
              distinct advantages depending on your priorities—whether that&apos;s competitive pricing, 
              immediate possession, or secure storage.
            </p>
          </section>

          {/* How to Evaluate Dealers */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-6 font-display">
              How to Evaluate Dealers
            </h2>
            
            <p className="text-[#666666] mb-8 leading-relaxed">
              Before purchasing 10 oz gold bars from any source, evaluate dealers across these key criteria. 
              Taking time to compare options can save money and prevent issues.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {evaluationCriteria.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white border border-[#E5E0D1] rounded-lg p-5 shadow-card"
                >
                  <h3 className="font-semibold text-[#111111] mb-2 font-display">{item.title}</h3>
                  <p className="text-sm text-[#666666] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            
            <p className="mt-6 text-sm text-[#666666]">
              For a comprehensive guide, read our article on{' '}
              <Link href="/resources/how-to-evaluate-gold-dealers" className="text-[#C69A35] hover:underline">
                how to evaluate gold dealers
              </Link>.
            </p>
          </section>

          {/* Online Bullion Dealers */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-6 font-display">
              Online Bullion Dealers
            </h2>
            
            <p className="text-[#666666] mb-8 leading-relaxed">
              Online dealers typically offer competitive pricing due to lower overhead costs. 
              The following dealers are established participants in the precious metals market. 
              This is not an endorsement or ranking—conduct your own research before purchasing.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {dealers.map((dealer, index) => (
                <div 
                  key={index}
                  className="bg-white border border-[#E5E0D1] rounded-lg p-6 shadow-card hover:border-[#C69A35]/50 transition-all"
                >
                  <h3 className="text-lg font-semibold text-[#111111] mb-3 font-display">
                    {dealer.name}
                  </h3>
                  <p className="text-sm text-[#666666] mb-4 leading-relaxed">
                    {dealer.description}
                  </p>
                  <a
                    href={dealer.url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex items-center text-sm text-[#C69A35] hover:text-[#A67F28] font-medium"
                  >
                    Visit {dealer.name}
                    <svg className="ml-1.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Local Coin Shops */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-6 font-display">
              Local Coin Shops
            </h2>
            
            <div className="bg-white border border-[#E5E0D1] rounded-lg p-6 shadow-card">
              <p className="text-[#666666] mb-5 leading-relaxed">
                Local coin shops offer the advantage of in-person inspection and immediate possession. 
                While premiums may be slightly higher than online dealers, you avoid shipping costs 
                and can verify product authenticity before purchase.
              </p>
              
              <h3 className="font-semibold text-[#111111] mb-3 font-display">Tips for Buying Locally:</h3>
              <ul className="space-y-2 text-[#666666]">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C69A35] mt-2 flex-shrink-0" />
                  <span>Inspect bars in-person for proper hallmarks, serial numbers, and assay certificates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C69A35] mt-2 flex-shrink-0" />
                  <span>Check reviews on Google, Yelp, and the Better Business Bureau before visiting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C69A35] mt-2 flex-shrink-0" />
                  <span>Ask about authentication methods—reputable shops use XRF analyzers or sigma testers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C69A35] mt-2 flex-shrink-0" />
                  <span>Compare their premiums to online prices to ensure fair pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C69A35] mt-2 flex-shrink-0" />
                  <span>Immediate possession eliminates shipping risk and wait times</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Marketplaces & Auctions */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-6 font-display">
              Marketplaces & Auctions
            </h2>
            
            <div className="bg-white border border-[#E5E0D1] rounded-lg p-6 shadow-card">
              <p className="text-[#666666] mb-5 leading-relaxed">
                Online marketplaces and auction platforms can offer competitive pricing, particularly 
                for secondary market bars. However, they carry additional risks compared to established dealers.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-[#111111] mb-3 font-display">Potential Benefits:</h3>
                  <ul className="space-y-2 text-sm text-[#666666]">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600">✓</span>
                      <span>Sometimes lower premiums on secondary market bars</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600">✓</span>
                      <span>Access to rare or discontinued bar designs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600">✓</span>
                      <span>Buyer protection programs on major platforms</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-[#111111] mb-3 font-display">Key Risks:</h3>
                  <ul className="space-y-2 text-sm text-[#666666]">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Counterfeit products from unverified sellers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Limited recourse for disputes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Inconsistent packaging and documentation</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 pt-5 border-t border-[#E5E0D1]">
                <p className="text-sm text-[#666666] mb-3">Resources for marketplace buying:</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.ebay.com/b/Gold-Bullion-Bars-Rounds/39484/bn_1633173"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-sm text-[#C69A35] hover:underline"
                  >
                    eBay Bullion Category →
                  </a>
                  <a
                    href="https://www.ngccoin.com/resources/counterfeit-detection/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-sm text-[#C69A35] hover:underline"
                  >
                    NGC Counterfeit Detection Guide →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Vaulted/Custodial Programs */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-6 font-display">
              Vaulted & Custodial Programs
            </h2>
            
            <div className="bg-white border border-[#E5E0D1] rounded-lg p-6 shadow-card">
              <p className="text-[#666666] mb-5 leading-relaxed">
                Some investors prefer to keep gold in professional vault storage rather than taking 
                physical possession. Several dealers and financial institutions offer storage programs 
                for 10 oz bars and other bullion products.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="bg-[#F5F0E3] rounded-lg p-4">
                  <h3 className="font-semibold text-[#111111] mb-2 font-display">Allocated vs. Unallocated Storage</h3>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    <strong>Allocated storage</strong> means specific bars with serial numbers are assigned to you 
                    and segregated from other clients&apos; holdings. <strong>Unallocated storage</strong> gives you 
                    a claim to a quantity of gold without specific bar assignment—typically cheaper but carries 
                    greater counterparty risk if the custodian faces financial difficulties.
                  </p>
                </div>
                
                <div className="bg-[#F5F0E3] rounded-lg p-4">
                  <h3 className="font-semibold text-[#111111] mb-2 font-display">Counterparty Risk</h3>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    With vaulted programs, you rely on the custodian&apos;s solvency and honesty. Research the 
                    provider&apos;s insurance coverage, audit practices, and jurisdictional protections. Some 
                    investors prefer allocated storage in stable jurisdictions like Switzerland or Singapore.
                  </p>
                </div>
                
                <div className="bg-[#F5F0E3] rounded-lg p-4">
                  <h3 className="font-semibold text-[#111111] mb-2 font-display">Storage Fees</h3>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    Expect annual fees ranging from 0.12% to 0.5% of gold value for allocated storage. 
                    Compare total costs including any transaction fees, delivery fees, and minimum holding 
                    requirements before committing to a program.
                  </p>
                </div>
              </div>
              
              <p className="text-sm text-[#666666]">
                For more on storage strategies, read our guide on{' '}
                <Link href="/resources/gold-bar-storage-solutions" className="text-[#C69A35] hover:underline">
                  gold bar storage solutions
                </Link>.
              </p>
            </div>
          </section>

          {/* Multi-Source Pricing */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-6 font-display">
              Using Multiple Pricing Sources
            </h2>
            
            <div className="bg-[#000000] rounded-lg p-6">
              <p className="text-[#CCCCCC] mb-5 leading-relaxed">
                This site displays live pricing using Monex market data for convenience, but prudent 
                investors cross-check spot prices and premiums using multiple sources before purchasing. 
                Price comparison helps ensure you&apos;re getting fair market rates.
              </p>
              
              <p className="text-sm text-[#888888] mb-4">Recommended pricing sources:</p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.monex.com/liveprices/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-[#C69A35] hover:text-[#E5B84C] text-sm"
                >
                  Monex Live Prices →
                </a>
                <a
                  href="https://www.kitco.com/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-[#C69A35] hover:text-[#E5B84C] text-sm"
                >
                  Kitco Gold Charts →
                </a>
                <a
                  href="https://goldprice.org/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-[#C69A35] hover:text-[#E5B84C] text-sm"
                >
                  GoldPrice.org →
                </a>
              </div>
              
              <p className="mt-5 text-sm text-[#888888]">
                For current spot prices and market data, visit our{' '}
                <Link href="/prices" className="text-[#C69A35] hover:underline">gold prices page</Link>.
              </p>
            </div>
          </section>

          {/* Disclaimer */}
          <section>
            <div className="border-t border-[#E5E0D1] pt-8">
              <p className="text-xs text-[#888888] leading-relaxed">
                <strong className="text-[#666666]">Disclaimer:</strong> The information on this page is provided 
                for educational purposes only. 10ozGoldBars.com does not endorse, rank, or recommend any specific 
                dealer, and is not affiliated with any of the companies mentioned. External links are provided 
                for informational convenience only. Always conduct your own due diligence before making any 
                purchase decisions. Precious metals investing involves risk, and past performance does not 
                guarantee future results.
              </p>
            </div>
          </section>

        </div>
      </main>
    </>
  )
}

