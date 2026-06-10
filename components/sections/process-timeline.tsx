"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Define the Foundation",
    labels: ["Vision", "Priorities", "Budget"],
    description:
      "We begin by understanding your wedding vision, guest experience, design preferences, priorities, and investment level. This gives the planning process a clear direction from the start, so every decision feels intentional rather than overwhelming.",
    outcome:
      "You leave with clarity on what you want, what matters most, and what kind of Lake Como wedding experience we are creating together.",
    image: "/dest3.jpg",
  },
  {
    number: "02",
    title: "Curate the Experience",
    labels: ["Venue", "Vendors", "Design"],
    description:
      "Once the foundation is clear, we guide the venue and vendor selection, shape the aesthetic direction, and build a tailored planning proposal around your celebration. Every element is chosen to reflect your style, standards, and guest experience.",
    outcome:
      "You receive a refined planning direction with the right creative, logistical, and professional team behind it.",
    image: "/process2.jpg",
  },
  {
    number: "03",
    title: "Orchestrate Every Detail",
    labels: ["Timeline", "Logistics", "Execution"],
    description:
      "As the wedding approaches, we manage the timelines, vendor communication, guest flow, final details, and on-site coordination. Our role is to protect the experience, solve problems before they reach you, and make the day feel effortless.",
    outcome:
      "You arrive in Lake Como knowing the moving parts are handled, the details are aligned, and the celebration can unfold with elegance.",
    image: "/process3.jpeg",
  },
];

export function ProcessTimeline() {
  return (
    <section
      id="process"
      className="py-24 lg:py-36 bg-cream relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="mb-20 lg:mb-28">
          <p className="text-[10px] tracking-[0.4em] uppercase text-charcoal/50 mb-6 font-medium">
            Our Full-Service Planning Experience
          </p>

          <h2 className="font-serif text-4xl md:text-6xl text-charcoal mb-8 leading-[1.05] max-w-4xl">
            Lake Como Wedding Planning,{" "}
            <span className="italic text-terracotta">
              Handled With Calm Precision
            </span>
          </h2>

          <div className="w-24 h-px bg-stone mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <p className="text-lg text-olive font-light leading-relaxed max-w-xl">
              From the first conversation to the final guest farewell, we guide
              every stage of your Lake Como wedding with structure, creativity,
              and complete oversight.
            </p>

            <p className="text-base text-olive/75 font-light leading-relaxed max-w-md">
              You receive more than planning support. You receive a clear path,
              a trusted team, and the peace of mind that every detail is being
              thoughtfully managed on your behalf.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div className="space-y-28 lg:space-y-0 relative">
          {/* Vertical Line */}
          <div className="absolute left-[39px] lg:left-1/2 top-0 bottom-0 w-px bg-stone/50 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-20 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image and Number */}
              <div className="w-full lg:w-1/2 relative flex items-center justify-center h-[360px] lg:h-[500px]">
                <div className="absolute inset-0 w-3/4 max-w-sm mx-auto aspect-[3/4] left-1/2 -translate-x-1/2 opacity-[0.88] overflow-hidden rounded-sm shadow-xl z-0 mt-8">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <span className="font-serif text-[160px] md:text-[230px] leading-none text-olive/20 font-medium tracking-tighter relative z-10 mix-blend-multiply drop-shadow-sm">
                  {step.number}
                </span>
              </div>

              {/* Content Card */}
              <div className="w-full lg:w-1/2 relative">
                <div
                  className={`absolute top-12 hidden lg:block w-3 h-3 rounded-full bg-charcoal ${
                    index % 2 === 0 ? "-left-[46px]" : "-right-[46px]"
                  }`}
                />

                <div className="bg-sand p-8 md:p-12 lg:p-14 h-full flex flex-col shadow-2xl shadow-charcoal/5 -mt-28 lg:mt-0 relative z-20">
                  <p className="text-[9px] tracking-[0.3em] uppercase text-charcoal/40 mb-5 font-medium">
                    {step.labels.join(" · ")}
                  </p>

                  <h3 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
                    {step.title}
                  </h3>

                  <p className="text-olive/90 font-light leading-relaxed text-base mb-6">
                    {step.description}
                  </p>

                  <div className="border-t border-stone/30 pt-5">
                    <p className="text-[10px] tracking-[0.28em] uppercase text-charcoal/45 mb-3 font-medium">
                      What this means for you
                    </p>

                    <p className="text-olive/80 font-light leading-relaxed text-sm italic">
                      {step.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing CTA */}
        <AnimatedSection className="text-center mt-28 lg:mt-44 flex flex-col items-center">
          <p className="font-serif text-2xl md:text-3xl text-olive/80 italic max-w-2xl mx-auto mb-10 leading-relaxed">
            You enjoy the engagement. We manage the planning, the details, and
            the experience behind it.
          </p>

          <button
            onClick={() => {
              const element = document.querySelector("#inquiry");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-10 py-5 bg-black text-white text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-black/80 transition-colors duration-500"
          >
            Start Your Lake Como Enquiry
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}
