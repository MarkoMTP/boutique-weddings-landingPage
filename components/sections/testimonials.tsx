"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/animated-section"

const testimonials = [
  {
    quote:
      "Alessia and the team at Boutique Weddings made our international destination wedding dreams a reality. From selecting the venue to the day-of coordination, they handled every part of the planning process with care. Their connections with incredible vendors made every decision easier. Thoughtful, creative, and exceptionally experienced — we cannot recommend them enough.",
    name: "Emily Mathews",
    label: "International Couple",
    initials: "EM",
  },
  {
    quote:
      "Many wedding venues and planners make the bride and groom feel like they're just another number. Roberta, however, was always sincere, never pushy, and made us feel like family. For those planning an Italian destination wedding remotely, knowing someone is negotiating on your behalf is invaluable. She fought for us on pricing and terms and saved us money numerous times.",
    name: "Shari Tork",
    label: "Destination Wedding Client",
    initials: "ST",
  },
  {
    quote:
      "From the first quick email reply to the end of the wedding, Boutique Weddings were amazing. Giorgia and Roberta were brilliant, and every supplier they recommended was excellent. We didn't have a single stressful moment thanks to their planning. It was the best day of our lives.",
    name: "Glen Denny",
    label: "Lake Como Couple",
    initials: "GD",
  },
  {
    quote:
      "Boutique Weddings did an absolutely amazing job with our wedding. Alessia carried herself with grace, patience, class, and knowledge throughout the entire process. From venue tours to the wedding week itself, she handled everything beautifully. We couldn't recommend them more.",
    name: "Liya Podokshik",
    label: "Luxury Wedding Client",
    initials: "LP",
  },
  {
    quote:
      "Our wedding was an amazing experience. Alessia helped us plan for two years and stayed in constant contact throughout. Everything went exactly as planned. Our guests traveled from the United States and had a once-in-a-lifetime experience at Villa del Balbianello.",
    name: "Marisa Dincontro",
    label: "U.S. Destination Couple",
    initials: "MD",
  },
]

const trustMetrics = [
  { value: "20+", label: "Years Experience" },
  { value: "∞", label: "International Couples Served" },
  { value: "Lake Como", label: "Trusted Vendor Network" },
  { value: "100%", label: "Full-Service Planning" },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-sand relative overflow-hidden py-24 lg:py-40">

      {/* ── METRICS ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-24 lg:mb-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-stone/50 pb-16">
          {trustMetrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-left"
            >
              <p className="font-serif text-3xl md:text-5xl text-charcoal mb-4">
                {metric.value}
              </p>
              <p className="text-[9px] tracking-[0.3em] uppercase text-olive/80 font-medium">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="mb-20">
          <p className="text-[10px] tracking-[0.4em] uppercase text-olive mb-6 font-medium">
            Kind Words
          </p>
          <h2 className="font-serif text-5xl md:text-6xl text-charcoal mb-8 leading-[1.05]">
            Trusted by Couples
            <br />
            <span className="italic text-terracotta">Across the World</span>
          </h2>
          <div className="w-16 h-px bg-stone mb-8" />
          <p className="text-lg text-olive/90 font-light max-w-xl leading-relaxed">
            Planning a destination wedding from abroad requires trust. These are
            the words of couples who placed their celebration in our hands.
          </p>
        </AnimatedSection>

        {/* Masonry Editorial Grid */}
        <div className="columns-1 md:columns-2 gap-8 lg:gap-12 space-y-8 lg:space-y-12">
          {testimonials.map((t, idx) => {
            // Assign varying aesthetic treatment to different cards
            const getStyle = (index: number) => {
              if (index % 3 === 0) return "bg-cream text-charcoal p-10 md:p-14 lg:p-16 border border-stone/30 shadow-2xl shadow-charcoal/5"
              if (index % 3 === 1) return "bg-olive text-cream p-12 md:p-16 shadow-xl shadow-charcoal/20"
              return "bg-charcoal text-sand p-10 md:p-14 border border-sand/10"
            }
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: (idx % 2) * 0.2 }}
                className={`break-inside-avoid relative ${getStyle(idx)}`}
              >
                <div className="font-serif text-[6rem] leading-none absolute top-4 left-6 opacity-10 pointer-events-none">
                  &ldquo;
                </div>
                
                <blockquote className={`font-serif text-xl md:text-2xl leading-relaxed mb-10 relative z-10 text-pretty ${idx % 3 === 0 ? "font-light italic" : ""}`}>
                  "{t.quote}"
                </blockquote>

                <div className="flex items-center gap-4 mt-auto">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border ${
                    idx % 3 === 0 ? "border-stone/60 text-charcoal" : "border-cream/30 text-cream"
                  }`}>
                    <span className="font-serif text-sm">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p className={`font-serif text-lg ${idx % 3 === 0 ? "text-charcoal" : "text-cream"}`}>
                      {t.name}
                    </p>
                    <p className={`text-[9px] tracking-[0.3em] uppercase mt-1 ${idx % 3 === 0 ? "text-olive/70 font-medium" : "text-cream/50"}`}>
                      {t.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ── CTA ── */}
        <AnimatedSection delay={0.4} className="text-center mt-32 lg:mt-48">
          <p className="font-serif text-3xl md:text-4xl text-charcoal mb-10 leading-snug">
            Ready to experience wedding planning
            <br />
            <span className="italic text-terracotta">that feels effortless?</span>
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-charcoal hover:text-terracotta transition-colors group mx-auto"
          >
            <span>Book Your Private Consultation</span>
            <div className="h-px w-12 bg-charcoal group-hover:bg-terracotta group-hover:w-16 transition-all duration-300" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
