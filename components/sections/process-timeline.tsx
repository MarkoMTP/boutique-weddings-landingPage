"use client"

import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/shared/animated-section"
import Image from "next/image"

const steps = [
  {
    number: "01",
    title: "Discover",
    labels: ["Vision", "Team", "Budget"],
    description:
      "We begin by understanding your story, wedding priorities, design preferences, and investment level. From there, we curate the ideal venue and trusted vendor team to bring your celebration to life.",
    image: "/dest3.jpg"
  },
  {
    number: "02",
    title: "Design",
    labels: ["Ideation", "Proposal", "Planning"],
    description:
      "Once the foundation is set, we shape the full experience. From aesthetic direction to guest flow and event details, we create a bespoke proposal tailored entirely to your vision.",
    image: "/process2.jpg"
  },
  {
    number: "03",
    title: "Deliver",
    labels: ["Coordination", "Timeline", "Details"],
    description:
      "In the final phase, we manage logistics, finalize every moving part, and coordinate seamlessly with your venue and vendors — so your wedding day feels effortless, elegant, and unforgettable.",
    image: "/process3.jpeg"
  },
]

export function ProcessTimeline() {
  return (
    <section id="process" className="py-24 lg:py-40 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <AnimatedSection className="mb-24 lg:mb-32">
          <p className="text-[10px] tracking-[0.4em] uppercase text-charcoal/50 mb-6 font-medium">
            Our Signature Service
          </p>
          <h2 className="font-serif text-5xl md:text-6xl text-charcoal mb-8 leading-[1.05] max-w-3xl">
            Exclusive Lake Como Wedding Planning, <span className="italic text-terracotta">Made Effortless</span>
          </h2>
          <div className="w-24 h-px bg-stone mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <p className="text-lg text-olive font-light leading-relaxed max-w-lg">
              Our service begins the moment you invite us onto your team. We define your priorities, understand your vision, and guide every step with a clear, refined 3-phase planning experience.
            </p>
            <p className="text-base text-olive/70 font-light leading-relaxed max-w-sm italic">
              With our agency by your side, you can feel confident knowing every detail is managed with care, precision, and complete oversight — from first ideas to final execution.
            </p>
          </div>
        </AnimatedSection>

        {/* Stepped Journey Layout */}
        <div className="space-y-32 lg:space-y-0 relative">

          {/* Subtle vertical connecting line */}
          <div className="absolute left-[39px] lg:left-1/2 top-0 bottom-0 w-px bg-stone/50 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-20 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
            >
              {/* Huge Number & Image Graphic Side */}
              <div className="w-full lg:w-1/2 relative flex items-center justify-center lg:justify-end h-[400px] lg:h-[500px]">
                {/* Background Image Subtly visible */}
                <div className="absolute inset-0 w-3/4 max-w-sm mx-auto aspect-[3/4] left-1/2 -translate-x-1/2 opacity-[0.85] overflow-hidden rounded-sm shadow-xl z-0 mt-8">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <span className="font-serif text-[180px] md:text-[240px] leading-none text-olive/20 font-medium tracking-tighter relative z-10 mix-blend-multiply drop-shadow-sm">
                  {step.number}
                </span>
              </div>

              {/* Content Card Side */}
              <div className="w-full lg:w-1/2 relative">
                {/* Dot on the timeline */}
                <div className={`absolute top-12 hidden lg:block w-3 h-3 rounded-full bg-charcoal ${index % 2 === 0 ? "-left-[46px]" : "-right-[46px]"
                  }`} />

                <div className="bg-sand p-10 md:p-14 lg:p-16 h-full flex flex-col shadow-2xl shadow-charcoal/5 -mt-32 lg:mt-0 relative z-20">
                  <h3 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
                    {step.title}
                  </h3>

                  <p className="text-[9px] tracking-[0.3em] uppercase text-charcoal/40 mb-8 font-medium">
                    {step.labels.join(" · ")}
                  </p>

                  <p className="text-olive/90 font-light leading-relaxed text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Line */}
        <AnimatedSection className="text-center mt-32 lg:mt-48 flex flex-col items-center">
          <p className="font-serif text-2xl md:text-3xl text-olive/80 italic max-w-xl mx-auto mb-10">
            "You enjoy the engagement. We handle everything else."
          </p>
          <button
            onClick={() => {
              const element = document.querySelector("#inquiry")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="px-10 py-5 bg-black text-white text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-black/80 transition-colors duration-500"
          >
            Inquire About Availability
          </button>
        </AnimatedSection>
      </div>
    </section>
  )
}
