import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { resources, getResourceBySlug, getAllResourceSlugs } from '@/data/resources'
import Link from 'next/link'
import AISummary from '@/components/AISummary'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllResourceSlugs().map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const resource = getResourceBySlug(slug)
  
  if (!resource) {
    return {
      title: 'Resource Not Found | 10ozGoldBars.com',
    }
  }

  return {
    title: `${resource.title} | 10ozGoldBars.com`,
    description: resource.excerpt,
    alternates: {
      canonical: `https://www.10ozgoldbars.com/resources/${slug}`,
    },
    openGraph: {
      type: 'article',
      title: resource.title,
      description: resource.excerpt,
      url: `https://www.10ozgoldbars.com/resources/${slug}`,
      publishedTime: resource.date,
      authors: ['10ozGoldBars.com Research Team'],
    },
  }
}

export default async function ResourcePage({ params }: PageProps) {
  const { slug } = await params
  const resource = getResourceBySlug(slug)

  if (!resource) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `https://www.10ozgoldbars.com/resources/${slug}/#article`,
        headline: resource.title,
        description: resource.excerpt,
        datePublished: resource.date,
        dateModified: resource.date,
        author: {
          '@type': 'Organization',
          '@id': 'https://www.10ozgoldbars.com/#organization',
          name: '10ozGoldBars.com Research Team',
          url: 'https://www.10ozgoldbars.com',
        },
        publisher: {
          '@type': 'Organization',
          '@id': 'https://www.10ozgoldbars.com/#organization',
          name: '10ozGoldBars.com',
          url: 'https://www.10ozgoldbars.com',
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://www.10ozgoldbars.com/resources/${slug}`,
        },
        isPartOf: {
          '@id': 'https://www.10ozgoldbars.com/#website',
        },
        about: {
          '@type': 'Thing',
          name: resource.category,
        },
        articleSection: resource.category,
        inLanguage: 'en-US',
      },
      {
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
          {
            '@type': 'ListItem',
            position: 3,
            name: resource.title,
            item: `https://www.10ozgoldbars.com/resources/${slug}`,
          },
        ],
      },
    ],
  }

  // Get related articles (same category, excluding current)
  const relatedArticles = resources
    .filter(r => r.category === resource.category && r.slug !== slug)
    .slice(0, 3)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="py-10 md:py-16 bg-[#EFE9D9]">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-[#666666]">
              <li>
                <Link href="/" className="hover:text-[#C69A35] transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-[#888888]">/</li>
              <li>
                <Link href="/resources" className="hover:text-[#C69A35] transition-colors">
                  Resources
                </Link>
              </li>
              <li className="text-[#888888]">/</li>
              <li className="text-[#111111] truncate max-w-[200px]">{resource.title}</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="mb-5">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-[#A67F28] bg-[rgba(198,154,53,0.1)] rounded">
                {resource.category}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#111111] mb-6 leading-tight">
              {resource.title}
            </h1>

            {/* AI Summary for GEO */}
            <AISummary
              title="At a Glance"
              bullets={[
                `This article covers: ${resource.excerpt}`,
                'Learn key insights about 10 oz gold bars and how this topic affects your investment decisions.',
                'Includes practical takeaways you can apply when evaluating gold investments.',
              ]}
            />

            {/* TL;DR Box */}
            <div className="bg-white rounded-lg p-6 border-l-4 border-[#C69A35] mt-6">
              <p className="text-sm font-semibold text-[#C69A35] uppercase tracking-wide mb-2">
                Key Takeaways
              </p>
              <p className="text-[#3D3D3D] leading-relaxed">
                {resource.tldr}
              </p>
            </div>
          </header>

          {/* Content */}
          <div 
            className="bg-white rounded-lg p-6 md:p-10 article-content border border-[#E5E0D1]"
            dangerouslySetInnerHTML={{ __html: formatContent(resource.content) }}
          />

          {/* Article Q&A for GEO */}
          <div className="mt-10 bg-white rounded-lg p-6 md:p-8 border border-[#E5E0D1]">
            <h3 className="text-xl font-bold text-[#111111] mb-5 font-display">Questions About This Article</h3>
            <div className="space-y-4">
              <div className="bg-[#F5F0E3] rounded-lg p-4 border border-[#E5E0D1]">
                <h4 className="text-sm font-semibold text-[#C69A35] mb-2">What is the main point of this article?</h4>
                <p className="text-[#3D3D3D] text-sm leading-relaxed">{resource.tldr}</p>
              </div>
              <div className="bg-[#F5F0E3] rounded-lg p-4 border border-[#E5E0D1]">
                <h4 className="text-sm font-semibold text-[#C69A35] mb-2">How does this topic relate to 10 oz gold bars?</h4>
                <p className="text-[#3D3D3D] text-sm leading-relaxed">
                  This article is part of our educational library focused on 10 oz gold bars. Understanding {resource.title.toLowerCase()} 
                  helps investors make better decisions when considering the 10 oz format for their gold holdings.
                </p>
              </div>
              <div className="bg-[#F5F0E3] rounded-lg p-4 border border-[#E5E0D1]">
                <h4 className="text-sm font-semibold text-[#C69A35] mb-2">Where can I learn more about gold prices and 10 oz bars?</h4>
                <p className="text-[#3D3D3D] text-sm leading-relaxed">
                  Visit our <Link href="/prices" className="text-[#C69A35] hover:underline">gold prices page</Link> for live spot prices, 
                  or explore more guides in the <Link href="/resources" className="text-[#C69A35] hover:underline">10 oz gold bar resources library</Link>.
                </p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-10 pt-8 border-t border-[#D9D3C3]">
            <div className="bg-white rounded-lg p-6 md:p-8 border border-[#E5E0D1]">
              <h3 className="text-xl font-bold text-[#111111] mb-4">Continue Your 10 oz Gold Bar Research</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/prices"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#C69A35] text-[#000000] font-semibold hover:bg-[#A67F28] transition-colors"
                >
                  View Current Gold Prices
                </Link>
                <Link
                  href="/resources"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md border-[1.5px] border-[#C69A35] text-[#C69A35] font-semibold hover:bg-[rgba(198,154,53,0.1)] transition-colors"
                >
                  Browse 10 oz Gold Bar Resources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-14 md:py-20 bg-[#F5F0E3]">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-2xl font-bold text-[#111111]">
                Related <span className="text-[#C69A35]">Articles</span>
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-[#C69A35]/50 to-transparent"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-5">
              {relatedArticles.map((article) => (
                <Link 
                  key={article.slug}
                  href={`/resources/${article.slug}`}
                  className="group bg-white rounded-lg p-6 border border-[#E5E0D1] shadow-card hover:shadow-card-hover hover:border-[#C69A35] transition-all"
                >
                  <h3 className="text-lg font-semibold text-[#111111] mb-3 group-hover:text-[#C69A35] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#666666] line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

function formatContent(content: string): string {
  const lines = content.trim().split('\n')
  const result: string[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i].trim()

    // Skip empty lines
    if (!line) {
      i++
      continue
    }

    // H2 Header
    if (line.startsWith('## ')) {
      result.push(`<h2>${formatInline(line.slice(3))}</h2>`)
      i++
      continue
    }

    // H3 Header
    if (line.startsWith('### ')) {
      result.push(`<h3>${formatInline(line.slice(4))}</h3>`)
      i++
      continue
    }

    // Unordered list
    if (line.startsWith('- ')) {
      const listItems: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        listItems.push(`<li>${formatInline(lines[i].trim().slice(2))}</li>`)
        i++
      }
      result.push(`<ul>${listItems.join('')}</ul>`)
      continue
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      const listItems: string[] = []
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        const text = lines[i].trim().replace(/^\d+\.\s/, '')
        listItems.push(`<li>${formatInline(text)}</li>`)
        i++
      }
      result.push(`<ol>${listItems.join('')}</ol>`)
      continue
    }

    // Table
    if (line.startsWith('|')) {
      const tableRows: string[] = []
      let isFirstRow = true
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        const rowLine = lines[i].trim()
        // Skip separator row
        if (rowLine.includes('---')) {
          i++
          continue
        }
        const cells = rowLine.split('|').filter(c => c.trim())
        const tag = isFirstRow ? 'th' : 'td'
        tableRows.push(`<tr>${cells.map(c => `<${tag}>${formatInline(c.trim())}</${tag}>`).join('')}</tr>`)
        isFirstRow = false
        i++
      }
      result.push(`<table>${tableRows.join('')}</table>`)
      continue
    }

    // Regular paragraph - collect consecutive non-empty, non-special lines
    const paragraphLines: string[] = []
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].trim().startsWith('## ') &&
      !lines[i].trim().startsWith('### ') &&
      !lines[i].trim().startsWith('- ') &&
      !/^\d+\.\s/.test(lines[i].trim()) &&
      !lines[i].trim().startsWith('|')
    ) {
      paragraphLines.push(lines[i].trim())
      i++
    }
    if (paragraphLines.length > 0) {
      result.push(`<p>${formatInline(paragraphLines.join(' '))}</p>`)
    }
  }

  return result.join('\n')
}

function formatInline(text: string): string {
  return text
    // Links with nofollow: [text](url){nofollow}
    .replace(/\[([^\]]+)\]\(([^)]+)\)\{nofollow\}/g, '<a href="$2" rel="nofollow noopener noreferrer" target="_blank">$1</a>')
    // Regular links: [text](url)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
}
