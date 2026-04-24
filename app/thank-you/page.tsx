import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ThankYou() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#FCFAF8] px-4 py-32">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h1 className="font-cormorant text-5xl md:text-7xl">Thank You</h1>
          <p className="font-sans text-lg text-gray-600">
            We have received your inquiry. Leandra Svizzero or a member of the Eventoile team will be in touch with you shortly.
          </p>
          <div className="pt-8">
            <Button asChild variant="outline" className="rounded-full px-8 py-6 text-sm uppercase tracking-widest">
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
