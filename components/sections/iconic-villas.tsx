"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/shared/animated-section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const villas = [
  {
    number: "01",
    name: "Villa Balbiano",
    src: "/villas%20lake%20como%20copy/villa%20balbiano.jpg",
  },
  {
    number: "02",
    name: "Villa Cipressi",
    src: "/villas%20lake%20como%20copy/villa%20cipresi.jpg",
  },
  {
    number: "03",
    name: "Villa d'Este",
    src: "/villas%20lake%20como%20copy/villa%20d%27este.jpg",
  },
  {
    number: "04",
    name: "Villa Erba",
    src: "/villas%20lake%20como%20copy/villa%20erba.jpg",
  },
  {
    number: "05",
    name: "Villa Pliniana",
    src: "/villas%20lake%20como%20copy/villa%20pliniana.jpg",
  },
  {
    number: "06",
    name: "Villa Sola Cabiati",
    src: "/villas%20lake%20como%20copy/villa%20sola%20cabiati.jpg",
  },
  {
    number: "07",
    name: "Villa Balbianello",
    src: "/villas%20lake%20como%20copy/villabalbianellop.webp",
  },
];

export function IconicVillas() {
  const handleInquiryClick = () => {
    const element = document.querySelector("#inquiry");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="villas"
      className="bg-cream relative overflow-hidden py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="mb-12 lg:mb-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-[10px] tracking-[0.4em] uppercase text-olive mb-6 font-medium">
                Lake Como Villas
              </p>
              <h2 className="font-serif text-4xl md:text-6xl text-charcoal mb-8 leading-[1.05]">
                Iconic villas{" "}
                <span className="italic text-terracotta">we work with</span>
              </h2>
              <div className="w-16 h-px bg-stone mb-8" />
            </div>

            <p className="lg:col-span-5 text-base md:text-lg text-olive/85 font-light leading-relaxed max-w-xl lg:justify-self-end">
              A curated look at some of Lake Como's most requested private
              estates and landmark villas for refined destination weddings.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="relative pb-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            aria-label="Iconic Lake Como villas carousel"
          >
            <CarouselContent className="-ml-5 md:-ml-6">
              {villas.map((villa) => (
                <CarouselItem
                  key={villa.name}
                  className="basis-[86%] pl-5 sm:basis-[62%] md:pl-6 lg:basis-[38%] xl:basis-1/3"
                >
                  <article className="group relative aspect-[4/5] overflow-hidden bg-sand shadow-2xl shadow-charcoal/5">
                    <Image
                      src={villa.src}
                      alt={`${villa.name} Lake Como wedding villa`}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 86vw, (max-width: 1024px) 62vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/10 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                      <p className="text-[10px] tracking-[0.35em] uppercase text-cream/70 font-medium mb-3">
                        {villa.number}
                      </p>
                      <h3 className="font-serif text-3xl md:text-4xl text-cream leading-tight">
                        {villa.name}
                      </h3>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="top-auto bottom-0 left-auto right-14 size-11 translate-y-0 border-stone bg-cream text-charcoal hover:bg-charcoal hover:text-cream disabled:opacity-30" />
            <CarouselNext className="top-auto right-0 bottom-0 size-11 translate-y-0 border-stone bg-cream text-charcoal hover:bg-charcoal hover:text-cream disabled:opacity-30" />
          </Carousel>
        </AnimatedSection>

        <AnimatedSection className="flex justify-center">
          <button
            onClick={handleInquiryClick}
            className="w-full bg-charcoal px-6 py-5 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-cream transition-colors duration-500 hover:bg-charcoal/85 sm:w-fit sm:px-10 sm:tracking-[0.3em]"
          >
            Let's chat about your favorite villa
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}
