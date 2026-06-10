"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/shared/animated-section";

const profilePoints = [
  {
    title: "Planning From Abroad",
    body: "You want a trusted team on Lake Como who can guide venues, vendors, logistics, and guest experience with calm precision.",
  },
  {
    title: "Full-Service Support",
    body: "You are not looking for partial coordination. You want expert guidance from the first idea to the final moment of the wedding day.",
  },
  {
    title: "Refined, Personal Design",
    body: "You want a wedding that feels elegant and considered, but still deeply personal to your story, style, and guests.",
  },
  {
    title: "A Luxury-Level Investment",
    body: "Most of our Lake Como weddings begin with an overall investment of €80,000+, depending on venue, guest count, and experience.",
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
          <AnimatedSection className="bg-sand/50 p-8 md:p-12 lg:p-14 w-full max-w-2xl shadow-xl shadow-charcoal/5 mx-6 lg:mx-0 my-10 lg:my-0">
            <span className="text-[10px] tracking-[0.35em] uppercase text-olive font-medium">
              Who This Is For
            </span>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mt-4 mb-5 leading-[1.05] text-balance">
              Designed for Couples Planning a{" "}
              <span className="italic text-terracotta">
                Refined Lake Como Wedding
              </span>
            </h2>

            <div className="w-16 h-px bg-stone mb-6" />

            <p className="text-olive/85 font-light text-base md:text-lg leading-relaxed mb-8">
              We work with a limited number of international couples who want
              full-service planning, calm guidance, and a celebration that feels
              elegant, personal, and beautifully executed.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 border-t border-stone/30 pt-8">
              {profilePoints.map((point, index) => (
                <div key={index} className="border-b border-stone/30 pb-6">
                  <h3 className="font-serif text-xl text-charcoal mb-2">
                    {point.title}
                  </h3>
                  <p className="text-olive/90 font-light leading-relaxed text-sm">
                    {point.body}
                  </p>
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
              className="mt-8 px-10 py-5 bg-black text-white text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-black/80 transition-colors duration-500 w-fit"
            >
              Request Availability
            </button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
