import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Script from "next/script"

export default function ThankYou() {
  return (
    <>
      {/* Explicitly adding scripts to Thank You page per request */}
      {/* Google Tags explicitly for Thank You page (Conversion Tracking) */}
      <Script
        id="google-tag-manager"
        src="https://www.googletagmanager.com/gtag/js?id=G-SQN00TY674"
        strategy="afterInteractive"
      />
      <Script id="google-tag-thank-you" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-SQN00TY674');
          gtag('config', 'AW-349113517');
        `}
      </Script>

      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center bg-sand px-6 py-32 lg:py-48 relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center space-y-12 relative z-10 w-full">
          <div className="inline-flex flex-col items-center gap-6 mb-4">
            <div className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-olive font-medium">
              Application Received
            </div>
            <div className="w-16 h-px bg-stone mx-auto" />
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-charcoal mb-8 text-balance">
            Thank <span className="italic text-terracotta">You</span>
          </h1>
          
          <p className="text-lg md:text-xl text-olive/80 font-light max-w-xl mx-auto italic leading-relaxed">
            Your inquiry has been gracefully received. Giorgia will personally review your application and respond within 48-72 hours.
          </p>
          
          <div className="pt-12">
            <Button 
              asChild 
              className="rounded-none px-12 py-8 bg-black text-white hover:bg-black/80 transition-colors font-medium tracking-[0.2em] uppercase text-[10px] md:text-xs border-0 inline-flex items-center justify-center"
            >
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
