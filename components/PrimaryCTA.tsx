import Link from 'next/link'

interface PrimaryCTAProps {
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function PrimaryCTA({
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: PrimaryCTAProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link
        href={primaryHref}
        className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold bg-[#C69A35] text-[#000000] rounded-md hover:bg-[#A67F28] transition-colors"
      >
        {primaryLabel}
        <svg 
          className="ml-2 w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Link>
      
      {secondaryLabel && secondaryHref && (
        <Link
          href={secondaryHref}
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#C69A35] bg-transparent border-[1.5px] border-[#C69A35] rounded-md hover:bg-[rgba(198,154,53,0.1)] transition-colors"
        >
          {secondaryLabel}
        </Link>
      )}
    </div>
  )
}
