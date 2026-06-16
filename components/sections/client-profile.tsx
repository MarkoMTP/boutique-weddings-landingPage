"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/shared/animated-section";

const profilePoints = [
  {
    title:
      "Extended wedding celebrations shaped around Lake Como's atmosphere and timeless beauty",
  },
  {
    title:
      "Planning that blends creativity with structure for flawless, effortless execution",
  },
  {
    title:
      "Luxury wedding productions created for couples who value design, intention, and restraint",
  },
];

const numberedProfiles = [
  {
    number: "01",
    title: "Bespoke multi-day celebrations & elevated guest experiences",
  },
  {
    number: "02",
    title: "Creative, seamless planning with breathtaking execution",
  },
  {
    number: "03",
    title:
      "High-end wedding productions for couples who value artistry and detail",
  },
];

export function ClientProfile() {
  return (
    <section
      id="profile"
      className="w-full bg-cream lg:min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="w-full h-full flex flex-col lg:flex-row items-center">
        {/* Left Column: Image */}
        <div className="w-full lg:w-[55%] h-[45vh] lg:min-h-screen relative z-0">
          <Image
            src="/newHero.jpg"
            alt="Elegant Lake Como wedding couple"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 55vw"
            priority
          />
          <div className="absolute inset-0 bg-stone mix-blend-multiply opacity-10" />
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-start lg:ml-12 relative z-20">
          <AnimatedSection className="bg-sand/40 border border-stone/30 p-8 md:p-12 lg:p-14 w-full max-w-2xl shadow-xl shadow-charcoal/5 mx-6 lg:mx-0 my-10 lg:my-0">
            <span className="text-[10px] tracking-[0.35em] uppercase text-olive font-medium">
              The Client Profile
            </span>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mt-4 mb-5 leading-[1.05] text-balance">
              Destination Wedding Planning in Lake Como for US Couples
            </h2>

            <div className="w-16 h-px bg-stone mb-6" />

            <p className="text-olive/85 font-light text-base md:text-lg leading-relaxed mb-7">
              We work exclusively with couples from the United States and
              internationally who want a wedding in Lake Como that feels nothing
              like a standard event, defined by elegance, privacy, and a sense
              of place. Every detail, from creative direction and guest
              experience to logistics and production, is designed from scratch
              around your vision and Lake Como's iconic villas, gardens, and
              lakeside landscapes.
            </p>

            <p className="font-serif text-2xl md:text-3xl text-charcoal leading-tight mt-8 mb-7">
              No packages. No shortcuts. Just your vision, elevated.
            </p>

            <div className="space-y-0 border-y border-stone/30">
              {numberedProfiles.map((item) => (
                <div
                  key={item.number}
                  className="grid grid-cols-[3.5rem_1fr] gap-5 border-b border-stone/30 py-5 last:border-b-0"
                >
                  <span className="font-serif text-xl text-terracotta">
                    {item.number}
                  </span>
                  <h3 className="font-serif text-xl text-charcoal leading-snug">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const element = document.querySelector("#inquiry");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="mt-8 w-full px-6 py-5 bg-charcoal text-center text-cream text-[10px] tracking-[0.22em] uppercase font-medium hover:bg-charcoal/85 transition-colors duration-500 sm:w-fit sm:px-10 sm:tracking-[0.3em]"
            >
              Book A Free Consultation
            </button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
