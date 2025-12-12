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

    // Load table widget script
    const tableScript = document.createElement('script')
    tableScript.async = true
    tableScript.src = 'https://widget.nfusionsolutions.com/custom/monex/script/table/2/a0fa8f6f-0b7b-4d1a-bb3f-045d29d8aee5/797295b4-1ec7-4732-ae8c-d37569df73c3'
    
    const tableContainer = document.getElementById('797295b4-1ec7-4732-ae8c-d37569df73c3')
    if (tableContainer && !tableContainer.hasChildNodes()) {
      document.body.appendChild(tableScript)
    }

    return () => {
      // Cleanup scripts on unmount
      if (chartScript.parentNode) {
        chartScript.parentNode.removeChild(chartScript)
      }
      if (tableScript.parentNode) {
        tableScript.parentNode.removeChild(tableScript)
      }
    }
  }, [])

  return (
    <div className="space-y-8">
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

      {/* Table Widget */}
      <div className="bg-white rounded-lg border border-[#E5E0D1] p-4 md:p-6">
        <h3 className="text-lg font-semibold text-[#111111] mb-4 font-display">Precious Metals Prices</h3>
        <div 
          id="797295b4-1ec7-4732-ae8c-d37569df73c3" 
          style={{ width: '100%', minHeight: '300px' }}
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
