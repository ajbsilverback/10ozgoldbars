import Link from 'next/link'

interface ResourceCardProps {
  title: string
  category: string
  excerpt: string
  slug: string
}

export default function ResourceCard({
  title,
  category,
  excerpt,
  slug,
}: ResourceCardProps) {
  return (
    <article className="group bg-white rounded-lg p-6 border border-[#E5E0D1] shadow-card hover:shadow-card-hover hover:border-[#C69A35] transition-all duration-200">
      {/* Gold accent line */}
      <div className="w-8 h-0.5 bg-[#C69A35] mb-4 group-hover:w-12 transition-all duration-200" />
      
      <div className="mb-3">
        <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium text-[#A67F28] bg-[rgba(198,154,53,0.1)] rounded">
          {category}
        </span>
      </div>
      
      <h3 className="text-lg font-semibold text-[#111111] mb-3 group-hover:text-[#C69A35] transition-colors leading-snug font-display">
        <Link href={`/resources/${slug}`} className="hover:underline underline-offset-4 decoration-[#C69A35]/40">
          {title}
        </Link>
      </h3>
      
      <p className="text-sm text-[#666666] mb-5 line-clamp-3 leading-relaxed">
        {excerpt}
      </p>
      
      <Link
        href={`/resources/${slug}`}
        className="inline-flex items-center text-sm font-medium text-[#C69A35] hover:text-[#A67F28] transition-colors"
      >
        Read Article
        <svg 
          className="ml-1.5 w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </article>
  )
}
