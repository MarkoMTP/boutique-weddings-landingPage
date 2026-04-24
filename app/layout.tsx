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
  title: "Eventoile | Luxury Destination Weddings in Italy & France",
  description: "Curated destination weddings for international couples. Unlock private villas, historic chateaux, and secret venues across Tuscany, Lake Como, Provence, and beyond. Experience bespoke luxury with Leandra Svizzero.",
  keywords: [
    "Eventoile",
    "Leandra Svizzero",
    "luxury wedding planner",
    "destination wedding Italy",
    "France wedding planner",
    "Lake Como wedding",
    "Tuscany wedding venue",
    "exclusive wedding venues",
    "international wedding planner",
    "luxury elopement",
    "Provence wedding",
    "Amalfi Coast wedding",
  ],
  authors: [{ name: "Eventoile & Leandra Svizzero" }],
  creator: "Eventoile",
  openGraph: {
    title: "Eventoile | Luxury Destination Weddings",
    description: "Curated destination weddings for international couples in Italy & France by Leandra Svizzero",
    type: "website",
    locale: "en_US",
    siteName: "Eventoile",
    images: [
      {
        url: "/images/herocomo.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Wedding in Lake Como by Eventoile",
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
