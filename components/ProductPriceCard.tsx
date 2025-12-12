import { MonexSpotData } from '@/lib/monexSpot'

interface ProductPriceCardProps {
  data: MonexSpotData | null
  error?: string | null
}

function formatPrice(value: number | null): string {
  if (value === null) return '—'
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

function formatChange(change: number | null, percent: number | null): {
  text: string
  isPositive: boolean
} {
  if (change === null) return { text: '—', isPositive: true }
  const sign = change >= 0 ? '+' : ''
  const percentStr = percent !== null ? ` (${sign}${percent.toFixed(2)}%)` : ''
  return {
    text: `${sign}${formatPrice(change)}${percentStr}`,
    isPositive: change >= 0,
  }
}

export default function ProductPriceCard({ data, error }: ProductPriceCardProps) {
  if (error) {
    return (
      <div className="bg-white border border-red-200 rounded-xl p-6 shadow-sm">
        <p className="text-red-600 text-sm">Unable to load pricing data</p>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm">
        <p className="text-neutral-500 text-sm">Loading...</p>
      </div>
    )
  }

  const changeInfo = formatChange(data.change, data.changePercent)

  return (
    <div className="bg-white border border-[#C69A35]/30 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display text-lg font-semibold text-[#1a1a1a]">
          10 oz Gold Bar
        </h3>
        <span className="text-xs text-neutral-500 uppercase tracking-wide">
          {data.symbol}
        </span>
      </div>

      {/* Bid/Ask */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-xs text-neutral-500 mb-1">Bid</p>
          <p className="text-xl font-semibold text-[#1a1a1a]">{formatPrice(data.bid)}</p>
        </div>
        <div>
          <p className="text-xs text-neutral-500 mb-1">Ask</p>
          <p className="text-xl font-semibold text-[#1a1a1a]">{formatPrice(data.ask)}</p>
        </div>
      </div>

      {/* Change */}
      <div className="mb-4 pb-4 border-b border-neutral-100">
        <p className="text-xs text-neutral-500 mb-1">Change</p>
        <p className={`text-sm font-medium ${changeInfo.isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {changeInfo.text}
        </p>
      </div>

      {/* Price Details */}
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <p className="text-xs text-neutral-500">Open</p>
          <p className="text-[#1a1a1a]">{formatPrice(data.open)}</p>
        </div>
        <div>
          <p className="text-xs text-neutral-500">Prev Close</p>
          <p className="text-[#1a1a1a]">{formatPrice(data.previousClose)}</p>
        </div>
        <div>
          <p className="text-xs text-neutral-500">High</p>
          <p className="text-[#1a1a1a]">{formatPrice(data.high)}</p>
        </div>
        <div>
          <p className="text-xs text-neutral-500">Low</p>
          <p className="text-[#1a1a1a]">{formatPrice(data.low)}</p>
        </div>
      </div>

      {/* Last Updated */}
      {data.lastUpdated && (
        <p className="mt-4 text-xs text-neutral-400 text-right">
          Updated: {new Date(data.lastUpdated).toLocaleTimeString()}
        </p>
      )}
    </div>
  )
}

