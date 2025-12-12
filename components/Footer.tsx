import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#000000]">
      {/* Gold accent line */}
      <div className="h-1 bg-[#C69A35]" />
      
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-bold gold-shimmer font-display">
              10ozGoldBars.com
            </Link>
            <p className="mt-2 text-sm text-[#888888]">
              © {currentYear} 10ozgoldbars.com
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2 justify-center md:justify-end" aria-label="Footer navigation">
            <Link 
              href="/where-to-buy" 
              className="text-sm text-[#888888] hover:text-[#C69A35] transition-colors"
            >
              Where to Buy 10 oz Gold Bars
            </Link>
            <Link 
              href="/privacy-policy" 
              className="text-sm text-[#888888] hover:text-[#C69A35] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms-of-use" 
              className="text-sm text-[#888888] hover:text-[#C69A35] transition-colors"
            >
              Terms of Use
            </Link>
          </nav>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 pt-8 border-t border-[#222222]">
          <p className="text-center md:text-left text-xs text-[#666666] max-w-3xl leading-relaxed">
            The information provided on this website is for educational purposes only and should not be 
            considered financial advice. Always consult with a qualified financial advisor before making 
            investment decisions.
          </p>
        </div>
      </div>
    </footer>
  )
}
