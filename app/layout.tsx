import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luxury Wedding Planner Lake Como | Boutique Weddings Italy",
  description:
    "Boutique Weddings is a luxury wedding planner Lake Como and destination wedding planner Italy for international couples seeking exclusive wedding planning across Italy's most beautiful villas.",
  keywords: [
    "Boutique Weddings",
    "Giorgia",
    "exclusive wedding planner Italy",
    "destination wedding planner Italy",
    "wedding planning Lake Como",
    "Lake Como wedding planner",
    "best wedding planners in Italy",
    "wedding planner Lake Como",
    "wedding planner Como Italy",
    "wedding planners Italy",
    "Italian villa wedding planner",
    "luxury wedding planner Italy",
    "Villa Balbianello wedding",
    "destination wedding planner Lake Como",
    "how much is it to get married at Lake Como",
    "luxury wedding planner Lake Como",
    "wedding planner Lake Como Italy",
    "wedding planning Lake Como Italy",
    "wedding organiser Lake Como",
    "Como Italy wedding planner",
  ],
  authors: [{ name: "Boutique Weddings by Giorgia" }],
  creator: "Boutique Weddings",
  icons: {
    icon: "/faviconBoutique.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Boutique Weddings | Luxury Wedding Planner Lake Como",
    description:
      "Boutique Weddings in Lake Como by Giorgia. Curated destination weddings in Italy with heart-led, precise planning.",
    type: "website",
    locale: "en_US",
    siteName: "Boutique Weddings",
    images: [
      {
        url: "/images/herocomo.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Lake Como wedding planned by Boutique Weddings in Italy",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#FCFAF8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">
        {/* CookieHub */}
        <Script
          src="https://cdn.cookiehub.eu/c2/89490170.js"
          strategy="beforeInteractive"
        />

        <Script id="cookiehub-loader" strategy="beforeInteractive">
          {`
            window.addEventListener("load", function() {
              var cpm = {};
              if (window.cookiehub) {
                window.cookiehub.load(cpm);
              }
            });
          `}
        </Script>

        {/* Google tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SQN00TY674"
          strategy="afterInteractive"
        />

        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            gtag('js', new Date());

            gtag('config', 'G-SQN00TY674');
            gtag('config', 'AW-349113517');
          `}
        </Script>

        {children}
        <Analytics />
      </body>
    </html>
  );
}
