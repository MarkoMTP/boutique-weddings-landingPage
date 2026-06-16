"use client";

import { AnimatedSection } from "@/components/shared/animated-section";

const reasons = [
  {
    number: "01",
    title: "Concept Before Everything",
    description:
      "Every celebration begins with creative direction, experience design, and a guest journey shaped around the couple, not a template.",
  },
  {
    number: "02",
    title: "Complete Strategic Oversight",
    description:
      "We connect budget architecture, venue strategy, feasibility, and risk planning into one controlled planning process.",
  },
  {
    number: "03",
    title: "Production With Precision",
    description:
      "Custom installations, scenography, lighting, florals, and entertainment are developed with exacting attention to every visible and invisible detail.",
  },
  {
    number: "04",
    title: "Freedom To Be Present",
    description:
      "On-site leadership, multi-day coordination, and contingency plans give couples space to enjoy the celebration while we command the production.",
  },
];

export function WhyUs() {
  const handleInquiryClick = () => {
    const element = document.querySelector("#inquiry");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="why-us" className="bg-white py-20 text-charcoal lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.4em] text-olive">
              Why Us
            </p>
            <h2 className="mb-8 font-serif text-4xl leading-[1.05] text-charcoal md:text-6xl">
              Why couples choose Boutique Weddings as their Lake Como wedding
              planner
            </h2>
            <div className="mb-8 h-px w-16 bg-stone" />
            <p className="max-w-xl text-base font-light leading-relaxed text-olive/85 md:text-lg">
              For couples planning from abroad, we bring creative authorship,
              operational control, and production discipline to celebrations
              that need to feel effortless from the first idea to the final
              farewell.
            </p>

            <button
              onClick={handleInquiryClick}
              className="mt-10 w-full bg-charcoal px-6 py-5 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-cream transition-colors duration-500 hover:bg-charcoal/85 sm:w-fit sm:px-10 sm:tracking-[0.3em]"
            >
              Book A Free Consultation
            </button>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 border-t border-stone/50 md:grid-cols-2 md:border-l">
              {reasons.map((reason) => (
                <article
                  key={reason.number}
                  className="border-b border-stone/50 py-8 md:border-r md:p-8"
                >
                  <span className="mb-5 block font-serif text-3xl leading-none text-terracotta">
                    {reason.number}
                  </span>
                  <h3 className="mb-4 font-serif text-2xl leading-tight text-charcoal md:text-3xl">
                    {reason.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-olive/80 md:text-base">
                    {reason.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
