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
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const testimonials = [
  {
    quote:
      "Alessia and the team at Boutique Weddings made our international destination wedding dreams a reality. From selecting the venue to the day-of coordination, they handled every part of the planning process with care. Their connections with incredible vendors made every decision easier. Thoughtful, creative, and exceptionally experienced.",
    name: "Emily Mathews",
    label: "International Couple",
    initials: "EM",
  },
  {
    quote:
      "Roberta was always sincere, never pushy, and made us feel like family. For those planning an Italian destination wedding remotely, knowing someone is negotiating on your behalf is invaluable.",
    name: "Shari Tork",
    label: "Destination Wedding Client",
    initials: "ST",
  },
  {
    quote:
      "From the first quick email reply to the end of the wedding, Boutique Weddings were amazing. Giorgia and Roberta were brilliant, and every supplier they recommended was excellent.",
    name: "Glen Denny",
    label: "Lake Como Couple",
    initials: "GD",
  },
  {
    quote:
      "Boutique Weddings did an absolutely amazing job with our wedding. Alessia carried herself with grace, patience, class, and knowledge throughout the entire process.",
    name: "Liya Podokshik",
    label: "Luxury Wedding Client",
    initials: "LP",
  },
  {
    quote:
      "Our wedding was an amazing experience. Alessia helped us plan for two years and stayed in constant contact throughout. Everything went exactly as planned.",
    name: "Marisa Dincontro",
    label: "U.S. Destination Couple",
    initials: "MD",
  },
];

const workImages = Array.from({ length: 30 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");

  return {
    src: `/work/work-${number}.jpg`,
    alt: `Boutique Weddings portfolio moment ${number}`,
  };
});

export function WorkCarousel() {
  return (
    <section id="work" className="bg-cream relative overflow-hidden py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="mb-14 lg:mb-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-[10px] tracking-[0.4em] uppercase text-olive mb-6 font-medium">
                Portfolio
              </p>
              <h2 className="font-serif text-5xl md:text-6xl text-charcoal mb-8 leading-[1.05]">
                Some of
                <br />
                <span className="italic text-terracotta">our work</span>
              </h2>
              <div className="w-16 h-px bg-stone mb-8" />
              <p className="text-lg text-olive/90 font-light max-w-xl leading-relaxed">
                A glimpse into the celebrations, settings, and intimate details
                we have had the honor of shaping for our couples.
              </p>
            </div>

            <Dialog>
              <div className="lg:col-span-5 lg:flex lg:justify-end">
                <DialogTrigger asChild>
                  <Button className="w-full rounded-none bg-charcoal px-8 py-6 text-[10px] font-medium uppercase tracking-[0.3em] text-cream hover:bg-charcoal/85 sm:w-auto">
                    View Testimonials
                  </Button>
                </DialogTrigger>
              </div>

              <DialogContent className="max-h-[88vh] overflow-y-auto rounded-none border-stone bg-cream p-0 shadow-2xl sm:max-w-5xl">
                <div className="p-6 md:p-10 lg:p-12">
                  <DialogHeader className="mb-10 text-left">
                    <p className="text-[10px] tracking-[0.4em] uppercase text-olive font-medium">
                      Kind Words
                    </p>
                    <DialogTitle className="font-serif text-4xl font-normal leading-[1.05] text-charcoal md:text-5xl">
                      Trusted by couples
                      <br />
                      <span className="italic text-terracotta">
                        across the world
                      </span>
                    </DialogTitle>
                    <DialogDescription className="max-w-xl text-base font-light leading-relaxed text-olive/85">
                      A few words from couples who placed their Lake Como
                      celebration in our hands.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {testimonials.map((testimonial, index) => (
                      <article
                        key={testimonial.name}
                        className={`relative border p-7 md:p-8 ${
                          index % 3 === 1
                            ? "border-olive bg-olive text-cream"
                            : "border-stone/50 bg-sand/60 text-charcoal"
                        }`}
                      >
                        <div className="font-serif text-6xl leading-none opacity-10 absolute left-5 top-4">
                          &ldquo;
                        </div>
                        <blockquote className="relative z-10 font-serif text-xl leading-relaxed text-pretty">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="relative z-10 mt-8 flex items-center gap-4">
                          <div
                            className={`flex size-11 items-center justify-center rounded-full border font-serif text-sm ${
                              index % 3 === 1
                                ? "border-cream/30 text-cream"
                                : "border-stone text-charcoal"
                            }`}
                          >
                            {testimonial.initials}
                          </div>
                          <div>
                            <p className="font-serif text-lg">
                              {testimonial.name}
                            </p>
                            <p
                              className={`mt-1 text-[9px] font-medium uppercase tracking-[0.3em] ${
                                index % 3 === 1
                                  ? "text-cream/55"
                                  : "text-olive/70"
                              }`}
                            >
                              {testimonial.label}
                            </p>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="relative pb-20">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            aria-label="Some of our work image carousel"
          >
            <CarouselContent className="-ml-5 md:-ml-6">
              {workImages.map((image, index) => (
                <CarouselItem
                  key={image.src}
                  className="basis-[84%] pl-5 sm:basis-[58%] md:pl-6 lg:basis-1/3"
                >
                  <div className="group relative aspect-[4/5] overflow-hidden bg-sand shadow-2xl shadow-charcoal/5">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 84vw, (max-width: 1024px) 58vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent opacity-60" />
                    <span className="absolute bottom-5 left-5 font-serif text-cream/80 text-xl italic">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="top-auto bottom-0 left-auto right-14 size-11 translate-y-0 border-stone bg-cream text-charcoal hover:bg-charcoal hover:text-cream disabled:opacity-30" />
            <CarouselNext className="top-auto right-0 bottom-0 size-11 translate-y-0 border-stone bg-cream text-charcoal hover:bg-charcoal hover:text-cream disabled:opacity-30" />
          </Carousel>
        </AnimatedSection>
      </div>
    </section>
  );
}
