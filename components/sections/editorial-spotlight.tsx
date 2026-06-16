"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/animated-section";

export function EditorialSpotlight() {
  return (
    <section
      id="about"
      className="bg-cream relative overflow-hidden pt-24 lg:pt-40"
    >
      {/* ── FOUNDER STORY (Interlocking Editorial) ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-32 lg:mb-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative">
          {/* Portrait Image */}
          <div className="lg:col-span-8 relative z-0">
            <AnimatedSection
              direction="right"
              className="relative aspect-[4/5] lg:aspect-square overflow-hidden shadow-2xl shadow-charcoal/10"
            >
              <Image
                src="/giorgia.jpeg"
                alt="Giorgia — Founder of Boutique Weddings"
                fill
                className="object-cover object-[20%_top]"
                sizes="(max-width: 768px) 100vw, 70vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent mix-blend-multiply" />
            </AnimatedSection>
          </div>

          {/* Overlapping Text Block */}
          <div className="lg:col-span-6 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 z-10 w-full lg:w-[45%] lg:mr-8 mt-[-100px] lg:mt-0 px-6 lg:px-0">
            <AnimatedSection
              delay={0.2}
              className="bg-olive p-10 md:p-14 lg:p-16 shadow-2xl shadow-charcoal/20"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-10 bg-gold" />
                <p className="text-[9px] tracking-[0.4em] uppercase text-gold font-light">
                  Founder & Planner
                </p>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl text-cream mb-8 leading-[1.1]">
                Ciao, Amore —
                <br />
                <span className="italic text-sand">I'm Giorgia</span>
              </h2>

              <div className="space-y-6 text-cream/90 font-light leading-relaxed text-sm">
                <p>
                  When I founded Boutique Weddings in 2007, Lake Como was known
                  primarily as a destination for celebrities and tastemakers.
                </p>
                <p>
                  As interest grew, I watched the industry shift toward volume.
                  But I saw an opportunity to build something different: a
                  boutique agency rooted in elegance, sincere personal
                  relationships, and truly bespoke service.
                </p>
                <p>
                  For couples comparing the best wedding planners in Italy, our
                  work is intentionally selective: fewer celebrations, deeper
                  attention, and a trusted local network shaped over years on
                  Lake Como.
                </p>
                <p className="font-serif text-xl italic text-sand pt-4">
                  "Lake Como never lost its magic. We ensure your wedding won't
                  either."
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
