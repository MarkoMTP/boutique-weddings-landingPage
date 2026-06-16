"use client"

import Image from "next/image"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/animated-section"

const features = [
  {
    number: "01",
    title: "Historic Villas",
    description:
      "Private estates, gardens, and terraces with unmistakable Lake Como character.",
  },
  {
    number: "02",
    title: "Elevated Hospitality",
    description:
      "Hotels, boats, transfers, and trusted partners shaped around your guests.",
  },
  {
    number: "03",
    title: "Cinematic Views",
    description:
      "Mountain silhouettes, lake light, and candlelit evenings that need no excess.",
  },
  {
    number: "04",
    title: "Discreet Luxury",
    description:
      "Sophisticated, private, romantic, and deeply memorable.",
  },
]

export function Destinations() {
  return (
    <section id="destinations" className="bg-sand/70 relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Text */}
          <div className="lg:col-span-5">
            <AnimatedSection direction="up">
              <p className="text-[10px] tracking-[0.4em] uppercase text-charcoal/60 mb-6 font-medium">
                The Destination
              </p>
              <h2 className="font-serif text-4xl md:text-6xl text-charcoal mb-8 leading-[1.05]">
                Lake Como,{" "}
                <span className="italic text-terracotta">
                  in its most elegant form
                </span>
              </h2>

              <div className="w-16 h-px bg-stone mb-8" />

              <p className="text-base md:text-lg text-olive/85 font-light leading-relaxed mb-10">
                Historic villas, private gardens, lakefront views, and
                world-class hospitality make Lake Como an extraordinary setting
                for a destination wedding. We shape it with restraint, privacy,
                and a strong sense of place.
              </p>

              <a
                href="#inquiry"
                className="inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-charcoal hover:text-terracotta transition-colors group"
              >
                <span>Begin Your Lake Como Journey</span>
                <div className="h-px w-12 bg-charcoal group-hover:bg-terracotta group-hover:w-16 transition-all duration-300" />
              </a>
            </AnimatedSection>
          </div>

          {/* Right Column: Editorial Image */}
          <div className="lg:col-span-7">
            <AnimatedSection
              direction="up"
              delay={0.2}
              className="relative h-[360px] md:h-[480px] lg:h-[540px] overflow-hidden shadow-2xl shadow-charcoal/10"
            >
              <Image
                src="/dest 2.jpg"
                alt="Italian villa wedding planner venue on Lake Como"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-charcoal/10" />
            </AnimatedSection>
          </div>
        </div>

        {/* Compact Feature List */}
        <StaggerContainer className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-y border-stone/50">
          {features.map((feature, idx) => (
            <StaggerItem
              key={feature.number}
              className={`py-7 sm:px-6 lg:px-8 border-stone/40 ${
                idx < features.length - 1 ? "border-b lg:border-b-0" : ""
              } ${idx % 2 === 0 ? "sm:border-r" : ""} ${
                idx < features.length - 1 ? "lg:border-r" : ""
              }`}
            >
              <span className="text-gold text-[10px] tracking-[0.35em] font-medium block mb-4">
                {feature.number}
              </span>
              <h3 className="font-serif text-2xl text-charcoal mb-3 leading-tight">
                {feature.title}
              </h3>
              <p className="text-olive/80 font-light leading-relaxed text-sm">
                {feature.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
