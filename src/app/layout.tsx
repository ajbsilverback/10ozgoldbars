import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.canonicalDomain),
  title: {
    default: `${SITE_CONFIG.brandName} | ${SITE_CONFIG.primaryProduct} Insights & Education`,
    template: `%s | ${SITE_CONFIG.brandName}`,
  },
  description:
    "Discover everything about 10 oz gold bars, the balanced choice for serious investors seeking lower premiums than 1 oz bars with more flexibility than kilo bars. Expert insights on 10 troy ounce gold bars.",
  keywords: [
    "10 oz gold bars",
    "10 ounce gold bars",
    "ten ounce gold bars",
    "gold bullion bars",
    "buy 10 oz gold bars",
    "gold investment",
    "gold bar prices",
    "gold bar storage",
    "gold bar premiums",
  ],
  authors: [{ name: SITE_CONFIG.brandName }],
  creator: SITE_CONFIG.brandName,
  publisher: SITE_CONFIG.brandName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.brandName,
    title: `${SITE_CONFIG.brandName} | ${SITE_CONFIG.primaryProduct} Insights & Education`,
    description:
      "Discover everything about 10 oz gold bars, the balanced choice for serious investors seeking lower premiums than 1 oz bars with more flexibility than kilo bars.",
    images: [
      {
        url: `${SITE_CONFIG.domain}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "10 oz Gold Bars - Investment Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.brandName} | ${SITE_CONFIG.primaryProduct} Insights & Education`,
    description:
      "Discover everything about 10 oz gold bars, the balanced choice for serious investors seeking lower premiums than 1 oz bars with more flexibility than kilo bars.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.canonicalDomain,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-bullion-darker text-gray-100 antialiased" suppressHydrationWarning>
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
