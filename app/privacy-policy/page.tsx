import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | 10ozGoldBars.com',
  description: 'Privacy policy for 10ozGoldBars.com - Learn how we handle and protect your information.',
  alternates: {
    canonical: 'https://www.10ozgoldbars.com/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 md:py-20 bg-[#EFE9D9]">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="bg-white rounded-lg border border-[#E5E0D1] p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#111111] mb-8 font-display">
            Privacy Policy
          </h1>
          
          <div className="space-y-6">
            <p className="text-[#888888] text-sm">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section>
              <h2 className="text-xl font-bold text-[#111111] mb-3 font-display">Information We Collect</h2>
              <p className="text-[#3D3D3D] leading-relaxed">
                10ozGoldBars.com is an educational website providing information about 10 oz gold bars, 
                gold investing, and precious metals markets. We collect minimal information necessary 
                to operate and improve our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#111111] mb-3 font-display">Use of Information</h2>
              <p className="text-[#3D3D3D] leading-relaxed">
                Any information collected is used solely to improve the user experience and provide 
                relevant content about 10 oz gold bars and gold investing. We do not sell or share 
                personal information with third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#111111] mb-3 font-display">Third-Party Services</h2>
              <p className="text-[#3D3D3D] leading-relaxed">
                Our website includes embedded widgets from third-party providers (Monex) for 
                displaying live gold prices and market data. These services may have their own 
                privacy policies governing data collection through their widgets.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#111111] mb-3 font-display">Cookies</h2>
              <p className="text-[#3D3D3D] leading-relaxed">
                We may use cookies to improve website functionality and analyze site usage. You can 
                control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#111111] mb-3 font-display">External Links</h2>
              <p className="text-[#3D3D3D] leading-relaxed">
                Our site contains links to external websites for additional gold market information. 
                We are not responsible for the privacy practices of these external sites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#111111] mb-3 font-display">Contact</h2>
              <p className="text-[#3D3D3D] leading-relaxed">
                For questions about this privacy policy, please contact us through the information 
                provided on our website.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
