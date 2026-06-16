"use client";

import { AnimatedSection } from "@/components/shared/animated-section";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  {
    number: "01",
    title: "Initial Request",
    description:
      "You submit your request for a quotation. We do not send a generic portfolio or price list. Instead, every proposal is tailored to your vision and needs.",
  },
  {
    number: "02",
    title: "Booking a Consultation",
    description:
      "You schedule a consultation call through our calendar. This ensures our first conversation is structured, private, and fully dedicated to your project.",
  },
  {
    number: "03",
    title: "First Consultation",
    description:
      "During the first call, we discuss your budget, vision, desires, and the ideal package based on your expectations. At this stage, we also guide you toward the best venues for your type of wedding.",
  },
  {
    number: "04",
    title: "Contract & Deposit",
    description:
      "Once you decide to proceed, you sign the contract and complete the deposit payment to officially secure our services.",
  },
  {
    number: "05",
    title: "Second Consultation",
    description:
      "After the contract is signed, we schedule a second video call dedicated to building the detailed budget together, creating the moodboard to define the wedding vibe and aesthetic, and understanding your priorities, style, and the price range suitable for potential venues.",
  },
  {
    number: "06",
    title: "Venue Selection Phase",
    description:
      "Within 7 days, we deliver a fully tailored Excel comparative file featuring 5 to 10 curated villas, including prices, services included, key information, pros & cons, availability if requested, and videos and photos from site inspections, where we analyze every angle for Plan A, B, and C.",
  },
  {
    number: "07",
    title: "Full Access",
    description:
      "You receive full access to a private folder containing all signed documents, planning files, scripts and timelines, music lists, guest lists, moodboards, budget sheets, supplier proposals, and more. Everything is transparent, organized, and updated in real-time.",
  },
  {
    number: "08",
    title: "Ongoing Work Structure",
    description:
      "Throughout the planning journey, we work on 2 to 3 topics at a time, ensuring focus, precision, and a smooth, stress-free progression toward the wedding day.",
  },
];

export function ProcessTimeline() {
  return (
    <section
      id="process"
      className="py-24 lg:py-36 bg-sand/50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="mb-20 lg:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-20 items-end">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-charcoal/50 mb-6 font-medium">
                Our Planning Process
              </p>

              <h2 className="font-serif text-4xl md:text-6xl text-charcoal mb-8 leading-[1.05] max-w-4xl">
                From first request to{" "}
                <span className="italic text-terracotta">
                  a fully tailored Lake Como plan
                </span>
              </h2>

              <div className="w-24 h-px bg-stone mb-10" />

              <p className="text-lg text-olive font-light leading-relaxed max-w-xl">
                Every step is structured, private, and shaped around your
                vision, from the first quotation request to the planning files
                that guide the entire celebration.
              </p>
            </div>

            <div className="relative h-[340px] md:h-[430px] overflow-hidden rounded-sm shadow-2xl shadow-charcoal/10">
              <Image
                src="/process2.jpg"
                alt="Lake Como wedding planning details"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-charcoal/10" />
            </div>
          </div>
        </AnimatedSection>

        {/* Process Accordion */}
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-3">
            <p className="text-[10px] tracking-[0.35em] uppercase text-terracotta font-medium mb-5">
              01-08
            </p>
            <p className="font-serif text-2xl md:text-3xl text-charcoal leading-tight">
              A focused planning structure from request to production.
            </p>
          </div>

          <div className="lg:col-span-9">
            <Accordion
              type="single"
              collapsible
              className="w-full border-t border-stone/50"
            >
              {steps.map((step) => (
                <AccordionItem
                  key={step.number}
                  value={step.number}
                  className="border-b border-stone/50"
                >
                  <AccordionTrigger className="group py-6 hover:no-underline">
                    <span className="flex min-w-0 flex-1 items-center gap-5 text-left">
                      <span className="font-serif text-2xl md:text-3xl text-terracotta/80 leading-none shrink-0">
                        {step.number}
                      </span>
                      <span className="font-serif text-2xl md:text-3xl text-charcoal leading-tight transition-colors duration-300 group-hover:text-terracotta">
                        {step.title}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8 pl-14 pr-2 text-base font-light leading-relaxed text-olive/85 md:pl-20 md:pr-14">
                    {step.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>

        {/* Closing CTA */}
        <AnimatedSection className="text-center mt-24 lg:mt-32 flex flex-col items-center">
          <p className="font-serif text-2xl md:text-3xl text-olive/80 italic max-w-2xl mx-auto mb-10 leading-relaxed">
            Your planning journey stays clear, organized, and intentionally
            paced from the very first request.
          </p>

          <button
            onClick={() => {
              const element = document.querySelector("#inquiry");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="w-full px-6 py-5 bg-charcoal text-center text-cream text-[10px] tracking-[0.22em] uppercase font-medium hover:bg-charcoal/85 transition-colors duration-500 sm:w-fit sm:px-10 sm:tracking-[0.3em]"
          >
            Inquire About Your Celebration
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}
