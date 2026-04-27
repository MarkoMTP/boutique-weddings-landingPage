import type { Metadata, Viewport } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Boutique Weddings | Luxury Lake Como Wedding Planner by Giorgia",
  description: "Boutique Weddings in Lake Como by Giorgia. Curated destination weddings for international couples. Experience heart-led, precise, and exclusive wedding planning in Italy's most beautiful destination.",
  keywords: [
    "Boutique Weddings",
    "Giorgia",
    "Lake Como wedding planner",
    "luxury wedding Italy",
    "destination wedding Lake Como",
    "exclusive wedding venues Italy",
    "international wedding planner",
    "luxury elopement Italy",
  ],
  authors: [{ name: "Boutique Weddings by Giorgia" }],
  creator: "Boutique Weddings",
  icons: {
    icon: "/faviconBoutique.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Boutique Weddings | Luxury Lake Como Wedding Planner",
    description: "Boutique Weddings in Lake Como by Giorgia. Curated, heart-led, and precise wedding experiences.",
    type: "website",
    locale: "en_US",
    siteName: "Boutique Weddings",
    images: [
      {
        url: "/images/herocomo.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Wedding in Lake Como by Boutique Weddings",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#FCFAF8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18008017728"
        />
        <Script id="google-tag">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18008017728');
          `}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
