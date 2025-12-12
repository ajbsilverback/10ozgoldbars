import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use | 10ozGoldBars.com',
  description: 'Terms of use for 10ozGoldBars.com - Please read these terms before using our website.',
  alternates: {
    canonical: 'https://www.10ozgoldbars.com/terms-of-use',
  },
}

export default function TermsOfUsePage() {
  return (
    <div className="py-12 md:py-20 bg-[#EFE9D9]">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="bg-white rounded-lg border border-[#E5E0D1] p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#111111] mb-8 font-display">
            Terms of Use
          </h1>
          
          <div className="space-y-6">
            <p className="text-[#888888] text-sm">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section>
              <h2 className="text-xl font-bold text-[#111111] mb-3 font-display">Acceptance of Terms</h2>
              <p className="text-[#3D3D3D] leading-relaxed">
                By accessing and using 10ozGoldBars.com, you agree to be bound by these Terms of Use. 
                If you do not agree to these terms, please do not use this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#111111] mb-3 font-display">Educational Purpose</h2>
              <p className="text-[#3D3D3D] leading-relaxed">
                The information provided on this website is for educational and informational purposes only, 
                specifically regarding 10 oz gold bars and gold investing. It should not be considered 
                financial, investment, tax, or legal advice. Always consult with qualified professionals 
                before making investment decisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#111111] mb-3 font-display">No Investment Advice</h2>
              <p className="text-[#3D3D3D] leading-relaxed">
                10ozGoldBars.com does not provide personalized investment recommendations. The content 
                on this site represents general information about 10 oz gold bars and precious metals 
                and should not be relied upon as the basis for investment decisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#111111] mb-3 font-display">Price Information</h2>
              <p className="text-[#3D3D3D] leading-relaxed">
                Gold prices and market data displayed on this website are provided by third-party sources 
                for informational purposes only and may be delayed. Do not rely on this data for trading 
                or transaction decisions. Always verify current prices with a reputable dealer.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#111111] mb-3 font-display">External Links</h2>
              <p className="text-[#3D3D3D] leading-relaxed">
                This website contains links to third-party websites for additional information. These 
                links are provided for convenience and do not constitute an endorsement. We are not 
                responsible for the content or accuracy of external sites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#111111] mb-3 font-display">Intellectual Property</h2>
              <p className="text-[#3D3D3D] leading-relaxed">
                All content on this website, including text, graphics, and design, is the property of 
                10ozGoldBars.com and is protected by copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#111111] mb-3 font-display">Limitation of Liability</h2>
              <p className="text-[#3D3D3D] leading-relaxed">
                10ozGoldBars.com shall not be liable for any direct, indirect, incidental, or 
                consequential damages arising from your use of this website or reliance on any 
                information provided herein.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#111111] mb-3 font-display">Changes to Terms</h2>
              <p className="text-[#3D3D3D] leading-relaxed">
                We reserve the right to modify these terms at any time. Continued use of the website 
                after changes constitutes acceptance of the modified terms.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
