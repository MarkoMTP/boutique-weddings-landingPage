"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedSection } from "@/components/shared/animated-section";

const faqs = [
  {
    q: "What investment should we expect for Lake Como?",
    a: "Most of our Lake Como weddings begin with an overall investment of €80,000+, depending on venue, guest count, season, design scope, guest logistics, and the number of events involved.",
  },
  {
    q: "Can you help us choose the right villa?",
    a: "Yes. We guide venue selection around guest count, budget, style, logistics, availability, and the kind of guest experience you want to create.",
  },
  {
    q: "Do you work with couples planning from abroad?",
    a: "Absolutely. Most of our couples are international, so communication, time zones, guest logistics, and remote decision-making are built into our planning process.",
  },
  {
    q: "Can you manage guest logistics and travel?",
    a: "Yes. We can support transfers, boats, drivers, guest movement, welcome events, and the concierge details that make a destination wedding feel seamless.",
  },
  {
    q: "How early should we begin planning?",
    a: "Ideally 12-18 months in advance, especially for highly requested Lake Como villas and prime dates.",
  },
  {
    q: "What happens on the wedding day?",
    a: "We oversee the schedule, suppliers, logistics, guest flow, and contingency plans so you can stay fully present.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-24 bg-sand/50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <p className="text-[10px] tracking-[0.4em] uppercase text-olive mb-6 font-medium">
              FAQ
            </p>
            <h2 className="font-serif text-4xl md:text-6xl text-charcoal mb-8 leading-[1.05]">
              Essential questions,{" "}
              <span className="italic text-terracotta">answered simply</span>
            </h2>
            <div className="w-16 h-px bg-stone mb-8" />
            <p className="text-base md:text-lg text-olive/85 font-light leading-relaxed max-w-md">
              The questions couples most often ask before beginning a Lake Como
              wedding with us.
            </p>
          </div>

          <div className="lg:col-span-8">
            <Accordion
              type="single"
              collapsible
              className="w-full border-t border-stone/50"
            >
              {faqs.map((item, index) => (
                <AccordionItem
                  key={item.q}
                  value={`faq-${index}`}
                  className="border-b border-stone/50"
                >
                  <AccordionTrigger className="font-serif text-2xl md:text-3xl text-charcoal hover:text-terracotta hover:no-underline transition-colors duration-300 text-left py-6 leading-tight">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-olive/80 font-light leading-relaxed text-base pb-7 pr-6 md:pr-16">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
