import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.10ozgoldbars.com'),
  title: '10ozGoldBars.com | 10 oz Gold Bar Education & Insights',
  description: 'Expert insights on 10 oz gold bars for high-net-worth investors seeking the optimal balance between 1 oz coins and kilo bars. Discover premiums, liquidity, storage strategies, and market education.',
  keywords: ['10 oz gold bar', '10 oz gold bars', 'gold bars', 'gold investment', 'gold prices', 'physical gold', 'gold bullion', 'precious metals', 'gold investing'],
  authors: [{ name: '10ozGoldBars.com Research Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.10ozgoldbars.com',
    siteName: '10ozGoldBars.com',
    title: '10ozGoldBars.com | 10 oz Gold Bar Education & Insights',
    description: 'Expert insights on 10 oz gold bars for high-net-worth investors seeking the optimal balance between 1 oz coins and kilo bars.',
    images: [
      {
        url: 'https://www.10ozgoldbars.com/10-oz-gold-bars-stacked.png',
        width: 650,
        height: 650,
        alt: '10 oz Gold Bars from Credit Suisse, PAMP, Johnson Matthey',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '10ozGoldBars.com | 10 oz Gold Bar Education & Insights',
    description: 'Expert insights on 10 oz gold bars for high-net-worth investors seeking the optimal balance between 1 oz coins and kilo bars.',
    images: ['https://www.10ozgoldbars.com/10-oz-gold-bars-stacked.png'],
  },
  alternates: {
    canonical: 'https://www.10ozgoldbars.com',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased bg-[#EFE9D9] text-[#3D3D3D]">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
