"use client"

import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/shared/animated-section"

const publications = [
  { name: "HARPER'S BAZAAR" },
  { name: "VOGUE" },
  { name: "BRIDES" },
  { name: "VOGUE INDIA" },
  { name: "OVER THE MOON" },
  { name: "WEDLUX" },
]

export function PressMarquee() {
  return (
    <section className="py-16 lg:py-20 bg-charcoal text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Vogue Badge */}
        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent/10 via-accent/20 to-accent/10 rounded-full border border-accent/30">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm tracking-[0.2em] uppercase text-accent font-medium">
              Vogue&apos;s Top 10 Planners 2024-2026
            </span>
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          </div>
        </AnimatedSection>

        {/* Scrolling Marquee */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-charcoal to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-charcoal to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex w-full overflow-hidden">
            <motion.div
              className="flex gap-20 items-center w-max py-4"
              animate={{
                x: [0, "-50%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35,
                  ease: "linear",
                },
              }}
            >
              {[...publications, ...publications].map((pub, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-700 cursor-default"
                >
                  <span className="font-serif text-xl md:text-2xl tracking-[0.25em] text-cream whitespace-nowrap px-8">
                    {pub.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Subtext & CTA */}
        <AnimatedSection delay={0.2} className="text-center mt-12 flex flex-col items-center gap-8">
          <p className="text-sm text-cream/60 tracking-wide">
            Featured in the world&apos;s most prestigious publications
          </p>

        </AnimatedSection>
      </div>
    </section>
  )
}
