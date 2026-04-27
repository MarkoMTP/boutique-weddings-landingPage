"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/shared/animated-section"

const profileColumns = [
  {
    title: "The Vision",
    heading: "Elegant, Personal, Unmistakably Yours",
    body: "We work with couples who want more than a beautiful wedding. They want a celebration that feels intentional, refined, and deeply personal — where every detail reflects their story, style, and the people they love most.",
  },
  {
    title: "The Scope",
    heading: "Full-Service Planning, From Start to Finish",
    body: "Our boutique service is built for couples who want complete guidance and peace of mind. From securing exceptional Lake Como venues and trusted vendors to guest experience, design, logistics, and flawless execution, we oversee every element with care and precision. We accept a limited number of weddings each year so every client receives our full attention.",
  },
  {
    title: "The Investment",
    heading: "Luxury Begins With the Right Foundation",
    body: "Our clients understand that a seamless Lake Como wedding requires expertise, trusted relationships, and uncompromising standards. Most celebrations begin with an overall investment of \u20ac80,000+, depending on guest count, venue, and scope of experience.",
  },
]

export function ClientProfile() {
  return (
    <section id="profile" className="w-full bg-cream lg:h-screen lg:min-h-[800px] lg:max-h-[1000px] flex items-center relative overflow-hidden">
      <div className="w-full h-full flex flex-col lg:flex-row items-center">

        {/* Left Column: Full-Bleed Image */}
        <div className="w-full lg:w-[55%] h-[50vh] lg:h-full relative z-0">
          <Image
            src="/hero.jpg"
            alt="Elegant wedding couple"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 55vw"
            priority
          />
          {/* Subtle tint overlay to ensure it blends beautifully */}
          <div className="absolute inset-0 bg-stone mix-blend-multiply opacity-10" />
        </div>

        {/* Right Column: Spaced Editorial Text Block */}
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-start lg:ml-12 relative z-20">
          <AnimatedSection className="bg-sand/50 p-10 md:p-14 lg:p-16 w-full max-w-2xl shadow-xl shadow-charcoal/5 mx-6 lg:mx-0 mt-8 lg:mt-0 flex flex-col">

            {/* Header Content */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4 leading-[1.05] text-balance">
              Designed for Couples Who Value <span className="italic text-terracotta">Meaningful Luxury</span>
            </h2>
            <div className="w-16 h-px bg-stone mb-4" />
            <p className="text-olive/80 font-light text-base md:text-lg leading-relaxed mb-8">
              For couples who want beauty, peace of mind, and a celebration that feels deeply personal, flawless, and unforgettable.
            </p>

            {/* List Layout Instead of Panels */}
            <div className="flex flex-col w-full border-t border-stone/30">
              {profileColumns.map((column, index) => (
                <div
                  key={index}
                  className="py-6 border-b border-stone/30 flex flex-col sm:flex-row gap-2 sm:gap-6 group"
                >
                  <div className="w-full sm:w-1/4 pt-1">
                    <span className="text-[9px] tracking-[0.3em] uppercase text-olive font-medium group-hover:text-terracotta transition-colors">
                      {column.title}
                    </span>
                  </div>

                  <div className="w-full sm:w-3/4">
                    <h3 className="font-serif text-xl text-charcoal mb-2">
                      {column.heading}
                    </h3>
                    <p className="text-olive/90 font-light leading-relaxed text-xs sm:text-sm">
                      {column.body}
                    </p>

                    {/* Add Call to Action under the final section */}
                    {index === 2 && (
                      <button
                        onClick={() => {
                          const element = document.querySelector("#inquiry")
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" })
                          }
                        }}
                        className="mt-6 px-10 py-5 bg-black text-white text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-black/80 transition-colors duration-500 w-fit"
                      >
                        Discuss Your Vision
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </AnimatedSection>
        </div>

      </div>
    </section>
  )
}
