interface AISummaryProps {
  title?: string
  bullets: string[]
}

export default function AISummary({ title = 'At a Glance', bullets }: AISummaryProps) {
  return (
    <aside 
      className="bg-white border border-[#E5E0D1] rounded-lg p-5 my-6"
      aria-label="Page summary"
    >
      <h2 className="text-sm font-semibold text-[#666666] uppercase tracking-wide mb-3 flex items-center gap-2">
        <svg className="w-4 h-4 text-[#C69A35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {title}
      </h2>
      <ul className="space-y-2">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-[#3D3D3D]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C69A35] mt-1.5 flex-shrink-0" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
