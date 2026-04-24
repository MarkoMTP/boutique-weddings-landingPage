"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/animated-section"

const packages = [

  {
    name: "Multi-Day",
    tagline: "The Ultimate Experience",
    price: "Fixed Fee",
    description: "An immersive, fully bespoke experience orchestrated over multiple days. From the moment your guests arrive in Italy to their final farewell, every detail is flawlessly curated, designed, and executed.",
    features: [
      "Comprehensive design, styling, and creative direction",
      "Sourcing and booking of elite Lake Como venues",
      "Curation and management of all trusted vendors",
      "Flawless orchestration of welcome events & farewell brunches",
      "Concierge-level guest accommodation management",
      "Dedicated on-site coordination team across all events",
      "Unlimited communication and priority access",
    ],
    featured: true,
  },
]

function PricingColumn({
  pkg,
  index,
}: {
  pkg: (typeof packages)[0]
  index: number
}) {
  const handleInquiry = () => {
    const element = document.querySelector("#inquiry")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.div
      className={`relative flex flex-col h-full premium-card ${pkg.featured
          ? "bg-charcoal text-cream shadow-2xl shadow-black/20"
          : "bg-charcoal/40 border border-charcoal/20 text-cream backdrop-blur-sm"
        }`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Featured Badge Line */}
      {pkg.featured && (
        <div className="absolute -top-px left-0 right-0 h-[2px] bg-gold" />
      )}

      <div className="p-10 md:p-12 flex flex-col h-full">
        {/* Header */}
        <div className="mb-10">
          <p className={`text-[10px] tracking-[0.3em] uppercase mb-4 font-medium ${pkg.featured ? "text-gold" : "text-sand/80"
            }`}>
            {pkg.tagline}
          </p>

          <h3 className="font-serif text-4xl md:text-5xl mb-4 text-cream leading-tight">
            {pkg.name}
          </h3>

          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-3xl md:text-4xl font-serif italic text-cream">
              {pkg.price}
            </span>
          </div>

          <p className={`text-sm leading-relaxed font-light ${pkg.featured ? "text-cream/80" : "text-cream/70"
            }`}>
            {pkg.description}
          </p>
        </div>

        <div className={`h-px w-8 mb-10 ${pkg.featured ? "bg-gold/50" : "bg-cream/20"}`} />

        {/* Features */}
        <ul className="space-y-5 mb-12 flex-grow">
          {pkg.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <Check
                className={`w-4 h-4 flex-shrink-0 mt-1 ${pkg.featured ? "text-gold" : "text-cream/50"
                  }`}
              />
              <span className="text-sm font-light text-cream/90">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          onClick={handleInquiry}
          className="w-full rounded-none py-7 font-medium tracking-[0.2em] uppercase text-[10px] md:text-xs transition-colors duration-500 border-0 bg-black text-white hover:bg-black/80"
        >
          Begin Your Journey
        </Button>
      </div>
    </motion.div>
  )
}

export function Commissions() {
  return (
    <section id="commissions" className="py-24 lg:py-32 bg-olive text-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Intro & Transparency */}
        <AnimatedSection className="lg:col-span-5 flex flex-col items-start text-left">
          <p className="text-[10px] tracking-[0.4em] uppercase text-sand/60 mb-6 font-medium">
            Investment
          </p>
          <h2 className="font-serif text-5xl md:text-6xl text-cream mb-8 leading-[1.05]">
            Curated Experiences,
            <br className="hidden md:block" />
            <span className="italic text-gold">Transparent Pricing</span>
          </h2>
          <div className="h-px w-16 bg-gold/40 mb-8" />
          <p className="text-lg text-cream/70 font-light leading-relaxed mb-12 lg:mb-16">
            We believe luxury begins with profound trust. Our comprehensive service is designed to provide exceptional value while ensuring every detail receives the obsessive attention it deserves.
          </p>

          <div className="bg-charcoal/40 border border-cream/10 p-8 rounded-sm text-left">
             <div className="text-[10px] tracking-[0.4em] uppercase text-gold font-medium mb-4">
              Maximum Transparency
            </div>
            <p className="text-sm text-cream/80 font-light leading-relaxed mb-4">
              Our multi-day orchestration is offered at a customized fixed fee. This ensures complete transparency from the very beginning, allowing you to enjoy the creative process without worrying about unexpected percentages or hidden agency costs.
            </p>
            <p className="text-xs text-cream/50 font-light italic">
              All journeys include a complimentary initial consultation.
            </p>
          </div>
        </AnimatedSection>

        {/* Right Column: The Package Card */}
        <AnimatedSection delay={0.2} className="lg:col-span-7 h-full w-full max-w-xl mx-auto lg:max-w-none mt-12 lg:mt-0">
           <PricingColumn pkg={packages[0]} index={0} />
        </AnimatedSection>
        
      </div>
    </section>
  )
}
