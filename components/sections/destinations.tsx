"use client"

import Image from "next/image"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/animated-section"

const features = [
  {
    number: "01",
    title: "Historic Private Villas",
    description:
      "Celebrate in legendary lakefront estates with manicured gardens, panoramic terraces, and centuries of charm.",
  },
  {
    number: "02",
    title: "World-Class Hospitality",
    description:
      "From five-star hotels to trusted local suppliers, every guest experience can be curated with care and precision.",
  },
  {
    number: "03",
    title: "Cinematic Natural Beauty",
    description:
      "Boat arrivals, golden sunsets, candlelit dinners, and lake views create a setting that feels unforgettable from every angle.",
  },
  {
    number: "04",
    title: "Quiet Prestige",
    description:
      "Lake Como offers luxury without excess — sophisticated, discreet, romantic, and deeply memorable.",
  },
]

export function Destinations() {
  return (
    <section id="destinations" className="bg-sand relative py-24 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Left Column: Sticky Editorial Text */}
          <div className="lg:col-span-5 lg:sticky top-32">
            <AnimatedSection direction="up">
              <p className="text-[10px] tracking-[0.4em] uppercase text-charcoal/60 mb-6 font-medium">
                The Destination
              </p>
              <h2 className="font-serif text-5xl md:text-6xl text-charcoal mb-8 leading-[1.05]">
                A Setting That
                <br />
                <span className="italic text-terracotta">Defines Romance</span>
              </h2>
              
              <div className="w-16 h-px bg-stone mb-10" />
              
              <p className="text-lg text-olive/90 font-light leading-relaxed mb-6 italic">
                Lake Como is not simply a location — it is the atmosphere, elegance, and emotion that shape the entire wedding experience.
              </p>
              <p className="text-sm md:text-base text-olive/80 font-light leading-relaxed mb-12">
                Surrounded by dramatic mountains, shimmering waters, historic villas, and timeless Italian charm, Lake Como has become one of the world's most desired wedding destinations for couples seeking a celebration that feels both iconic and deeply intimate.
              </p>
              
              <a
                href="#contact"
                className="inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-charcoal hover:text-terracotta transition-colors group"
              >
                <span>Begin Your Lake Como Journey</span>
                <div className="h-px w-12 bg-charcoal group-hover:bg-terracotta group-hover:w-16 transition-all duration-300" />
              </a>
            </AnimatedSection>
          </div>

          {/* Right Column: Imagery & Staggered Cards */}
          <div className="lg:col-span-7 relative">
            {/* Main Editorial Image cluster */}
            <div className="relative w-full aspect-[4/5] lg:aspect-[4/6] mb-16 lg:mb-24 flex items-center justify-center">
              
              {/* Image 1: Main Center/Right */}
              <AnimatedSection direction="up" delay={0.2} className="absolute right-0 top-0 w-[80%] h-[85%] z-20 overflow-hidden shadow-2xl">
                <Image
                  src="/images/destinations/lake-como.jpg"
                  alt="Lake Como wedding venue"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </AnimatedSection>

              {/* Image 2: Subtle overlapping left */}
              <AnimatedSection direction="left" delay={0.4} className="absolute left-0 bottom-[10%] w-[45%] aspect-square z-30 overflow-hidden shadow-xl border-4 border-sand hidden md:block">
                <Image
                  src="/images/destinations/amalfi.jpg"
                  alt="Italian elegant details"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </AnimatedSection>
              
              {/* Image 3: Background soft block / smaller image overlay */}
              <AnimatedSection direction="down" delay={0.1} className="absolute top-[10%] left-[10%] w-[35%] h-[30%] z-10 overflow-hidden opacity-50 mix-blend-multiply hidden lg:block">
                <Image
                  src="/images/destinations/ravello.jpg"
                  alt="Lake view terrace"
                  fill
                  className="object-cover"
                  sizes="20vw"
                />
              </AnimatedSection>
            </div>
            
            {/* Staggered Feature List */}
            <div className="relative z-10 flex flex-col gap-6 lg:gap-10 lg:-mt-48 lg:ml-12">
              {features.map((feature, idx) => (
                <AnimatedSection 
                  key={feature.number} 
                  delay={0.3 + (idx * 0.15)}
                  className={`bg-cream p-10 md:p-12 shadow-2xl shadow-charcoal/5 lg:w-[85%] ${idx % 2 !== 0 ? 'lg:self-end' : 'lg:self-start'}`}
                >
                  <span className="text-gold text-[10px] tracking-[0.4em] font-medium block mb-6">
                    {feature.number}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                    {feature.title}
                  </h3>
                  <div className="w-8 h-px bg-stone mb-6" />
                  <p className="text-olive/80 font-light leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                </AnimatedSection>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
