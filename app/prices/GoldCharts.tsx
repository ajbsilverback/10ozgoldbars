'use client'

import { useEffect } from 'react'

export default function GoldCharts() {
  useEffect(() => {
    // Load chart widget script
    const chartScript = document.createElement('script')
    chartScript.async = true
    chartScript.src = 'https://widget.nfusionsolutions.com/custom/monex/script/chart/1/a0fa8f6f-0b7b-4d1a-bb3f-045d29d8aee5/475a1e90-7ecc-4a36-a85b-ef15136924bb?selected=gold'
    
    const chartContainer = document.getElementById('475a1e90-7ecc-4a36-a85b-ef15136924bb')
    if (chartContainer && !chartContainer.hasChildNodes()) {
      document.body.appendChild(chartScript)
    }

    return () => {
      // Cleanup script on unmount
      if (chartScript.parentNode) {
        chartScript.parentNode.removeChild(chartScript)
      }
    }
  }, [])

  return (
    <div>
      {/* Chart Widget */}
      <div className="bg-white rounded-lg border border-[#E5E0D1] p-4 md:p-6">
        <h3 className="text-lg font-semibold text-[#111111] mb-4 font-display">Gold Price Chart</h3>
        <div 
          id="475a1e90-7ecc-4a36-a85b-ef15136924bb" 
          style={{ width: '100%', minHeight: '400px' }}
        />
        <div className="mt-3 text-center">
          <em>
            <small className="text-[#888888]">
              Prices provided by{' '}
              <a 
                href="https://www.monex.com/liveprices/" 
                className="text-[#C69A35] hover:underline"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Monex
              </a>
            </small>
          </em>
        </div>
      </div>
    </div>
  )
}
