"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/animated-section"

const values = [
  {
    number: "01",
    title: "Commitment",
    description:
      "We are not a wedding factory, and you are never just another booking on a calendar. Every celebration is personal to us, and we give each couple our full attention and genuine dedication.",
    image: "/images/destinations/lake-como.jpg"
  },
  {
    number: "02",
    title: "Care",
    description:
      "Planning from abroad can feel overwhelming. With years of experience and trusted systems, we remove uncertainty, solve problems early, and guide the process with calm precision.",
    image: "/images/destinations/amalfi.jpg"
  },
  {
    number: "03",
    title: "Curation",
    description:
      "We design weddings with intentional detail — honoring your traditions, style, and story so every moment feels meaningful and unmistakably yours.",
    image: "/images/destinations/tuscany.jpg"
  },
  {
    number: "04",
    title: "Connection",
    description:
      "Relationships are at the heart of everything we do. We value trust, warmth, and long-standing partnerships with both our couples and our hand-selected collaborators.",
    image: "/images/destinations/sicily.jpg"
  },
]

export function EditorialSpotlight() {
  return (
    <section id="about" className="bg-cream relative overflow-hidden pt-24 lg:pt-40">

      {/* ── FOUNDER STORY (Interlocking Editorial) ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-32 lg:mb-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative">

          {/* Portrait Image */}
          <div className="lg:col-span-8 relative z-0">
            <AnimatedSection direction="right" className="relative aspect-[4/5] lg:aspect-square overflow-hidden shadow-2xl shadow-charcoal/10">
              <Image
                src="/images/lea 4.jpeg"
                alt="Giorgia — Founder of Boutique Weddings"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 70vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent mix-blend-multiply" />
            </AnimatedSection>
          </div>

          {/* Overlapping Text Block */}
          <div className="lg:col-span-6 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 z-10 w-full lg:w-[45%] lg:mr-8 mt-[-100px] lg:mt-0 px-6 lg:px-0">
            <AnimatedSection delay={0.2} className="bg-olive p-10 md:p-14 lg:p-16 shadow-2xl shadow-charcoal/20">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-10 bg-gold" />
                <p className="text-[9px] tracking-[0.4em] uppercase text-gold font-light">
                  Founder & Planner
                </p>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl text-cream mb-8 leading-[1.1]">
                Ciao, Amore —
                <br />
                <span className="italic text-sand">I'm Giorgia</span>
              </h2>

              <div className="space-y-6 text-cream/90 font-light leading-relaxed text-sm">
                <p>
                  When I founded Boutique Weddings in 2007, Lake Como was known primarily as a destination for celebrities and tastemakers.
                </p>
                <p>
                  As interest grew, I watched the industry shift toward volume. But I saw an opportunity to build something different: a boutique agency rooted in elegance, sincere personal relationships, and truly bespoke service.
                </p>
                <p className="font-serif text-xl italic text-sand pt-4">
                  "Lake Como never lost its magic. We ensure your wedding won't either."
                </p>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>

      {/* ── VALUES (Color-Blocked 2x2 Grid) ── */}
      <div className="w-full relative">
        <AnimatedSection className="text-center mb-16 lg:mb-20 px-6">
          <p className="text-[10px] tracking-[0.4em] uppercase text-olive mb-6 font-medium">Our Philosophy</p>
          <div className="w-16 h-px bg-stone mx-auto" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto border-y border-stone/50 overflow-hidden">
          {values.map((value, index) => {
            // Apply a different rich background to each quadrant
            const bgs = [
              "bg-sand border-b md:border-b-0 md:border-r border-stone/50",
              "bg-cream border-b border-stone/50 md:border-b-0",
              "bg-stone/30 md:border-r border-stone/50",
              "bg-terracotta/5"
            ];

            return (
              <motion.div
                key={value.number}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col justify-center relative overflow-hidden group ${bgs[index]}`}
              >
                {/* Seamless Blended Image Background */}
                {value.image && (
                  <div 
                    className="absolute inset-y-0 right-0 w-2/3 lg:w-[60%] z-0 pointer-events-none transition-opacity duration-1000 opacity-30 group-hover:opacity-60"
                    style={{ 
                      WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)",
                      maskImage: "linear-gradient(to left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)"
                    }}
                  >
                    <Image
                      src={value.image}
                      alt={value.title}
                      fill
                      className="object-cover mix-blend-multiply"
                    />
                  </div>
                )}

                <div className="p-10 md:p-14 lg:p-20 xl:p-24 relative z-10 w-full h-full flex flex-col justify-between">
                  {/* Subtle Top Accent */}
                  <div className="flex justify-between items-start mb-24 lg:mb-32">
                    <span className="text-charcoal/40 font-serif text-4xl xl:text-5xl italic block">
                      {value.number}
                    </span>
                  </div>
                  
                  <div className="max-w-[85%] relative z-10">
                    <h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                      {value.title}
                    </h3>
                    <p className="text-olive/90 font-light leading-relaxed text-sm md:text-base">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>



    </section>
  )
}
