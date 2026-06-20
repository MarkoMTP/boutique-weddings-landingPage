import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/shared/animated-section";

export function IconicVillas() {
  return (
    <section
      id="villas"
      className="bg-cream relative overflow-hidden py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-[10px] tracking-[0.4em] uppercase text-olive mb-6 font-medium">
              Lake Como Venues
            </p>
            <h2 className="font-serif text-4xl md:text-6xl text-charcoal mb-8 leading-[1.05]">
              Explore Lake Como{" "}
              <span className="italic text-terracotta">wedding venues</span>
            </h2>
            <div className="w-16 h-px bg-stone mb-8" />
            <p className="text-base md:text-lg text-olive/85 font-light leading-relaxed max-w-xl">
              From iconic villas to lakefront gardens and luxury hotels, Lake
              Como offers some of Italy's most refined wedding settings.
              Explore selected venues and learn which type of location may fit
              your celebration best.
            </p>

            <Link
              href="/venues"
              className="mt-10 inline-flex w-full items-center justify-center bg-charcoal px-6 py-5 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-cream transition-colors duration-500 hover:bg-charcoal/85 sm:w-fit sm:px-10 sm:tracking-[0.3em]"
            >
              View Lake Como Venues
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden bg-sand shadow-2xl shadow-charcoal/10">
              <Image
                src="/villas%20lake%20como%20copy/villabalbianellop.webp"
                alt="Lake Como wedding venue terrace with luxury villa views"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-charcoal/10" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
