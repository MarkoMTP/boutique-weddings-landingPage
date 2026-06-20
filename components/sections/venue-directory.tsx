"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  lakeComoVenues,
  type LakeComoVenue,
} from "@/data/lake-como-venues";
import { AnimatedSection } from "@/components/shared/animated-section";

const venueDetailRows = (venue: LakeComoVenue) => [
  { label: "Best for", value: venue.bestFor },
  { label: "Guest capacity", value: venue.guestCapacity },
  { label: "Budget fit", value: venue.budgetFit },
  { label: "Style", value: venue.style },
];

export function VenueDirectory() {
  const [selectedVenue, setSelectedVenue] = useState<LakeComoVenue | null>(
    null,
  );

  const handleInquiryClick = () => {
    const element = document.querySelector("#inquiry");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleVenueInquiryClick = () => {
    setSelectedVenue(null);
    window.setTimeout(handleInquiryClick, 150);
  };

  return (
    <section id="villas" className="bg-cream py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="mb-12 lg:mb-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <p className="text-[10px] tracking-[0.4em] uppercase text-olive mb-6 font-medium">
                Selected Venues
              </p>
              <h2 className="font-serif text-4xl md:text-6xl text-charcoal mb-8 leading-[1.05]">
                Wedding venues in{" "}
                <span className="italic text-terracotta">Lake Como</span>
              </h2>
              <div className="w-16 h-px bg-stone mb-8" />
            </div>

            <p className="lg:col-span-6 text-base md:text-lg text-olive/85 font-light leading-relaxed max-w-2xl lg:justify-self-end">
              These luxury wedding venues Lake Como couples often consider are
              examples of the villas, hotels and private estates we can help you
              compare. Capacity and investment notes are planning guidance, not
              fixed venue quotes.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {lakeComoVenues.map((venue) => (
            <AnimatedSection key={venue.name}>
              <button
                type="button"
                onClick={() => setSelectedVenue(venue)}
                className="group block h-full w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
                aria-label={`View venue details for ${venue.name}`}
              >
                <article className="h-full overflow-hidden border border-stone/40 bg-cream shadow-2xl shadow-charcoal/5 transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                    <Image
                      src={venue.src}
                      alt={`${venue.name} luxury wedding venue on Lake Como`}
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/35 via-transparent to-transparent" />
                    <span className="absolute left-5 top-5 bg-cream/90 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.3em] text-charcoal">
                      {venue.number}
                    </span>
                  </div>

                  <div className="min-h-[245px] p-6 md:p-7">
                    <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.32em] text-terracotta">
                      Lake Como Luxury Venue
                    </p>
                    <h3 className="font-serif text-3xl text-charcoal leading-tight md:text-4xl">
                      {venue.name}
                    </h3>
                    <p className="mt-3 text-sm font-light uppercase tracking-[0.22em] text-olive/70">
                      {venue.location}
                    </p>
                    <p className="mt-5 text-sm font-light leading-relaxed text-olive/80">
                      {venue.style} setting for a destination wedding in Lake
                      Como.
                    </p>
                    <div className="mt-7 flex items-center justify-between gap-4 border-t border-stone/50 pt-5">
                      <span className="text-[10px] font-medium uppercase tracking-[0.26em] text-charcoal transition-colors group-hover:text-terracotta">
                        View Venue Details
                      </span>
                      <span className="h-px w-10 bg-charcoal transition-all duration-300 group-hover:w-14 group-hover:bg-terracotta" />
                    </div>
                  </div>
                </article>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <Dialog
        open={Boolean(selectedVenue)}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedVenue(null);
          }
        }}
      >
        {selectedVenue ? (
          <DialogContent className="h-[calc(100vh-2rem)] max-h-[760px] grid-rows-[30%_70%] gap-0 overflow-hidden rounded-none border-stone bg-cream p-0 shadow-2xl sm:max-w-5xl md:h-[min(680px,calc(100vh-2rem))] md:max-h-[calc(100vh-2rem)] md:grid-cols-2 md:grid-rows-[1fr] lg:max-w-6xl">
            <div className="relative min-h-0 overflow-hidden bg-sand">
              <Image
                src={selectedVenue.src}
                alt={`${selectedVenue.name} Lake Como wedding venue details`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={95}
                priority
              />
            </div>

            <div className="min-h-0 overflow-y-auto p-6 md:p-8 lg:p-10">
              <div>
                <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.35em] text-terracotta">
                  Luxury Wedding Venues Lake Como
                </p>
                <DialogTitle className="font-serif text-4xl font-normal leading-tight text-charcoal md:text-5xl">
                  {selectedVenue.name}
                </DialogTitle>
                <DialogDescription className="mt-3 text-sm font-light uppercase tracking-[0.24em] text-olive/75">
                  {selectedVenue.location}
                </DialogDescription>

                <p className="mt-6 text-base font-light leading-relaxed text-olive/85">
                  {selectedVenue.style} venue guidance for couples planning a
                  destination wedding in Lake Como.
                </p>

                <dl className="mt-7 grid gap-5 border-y border-stone/50 py-6 lg:grid-cols-2">
                  {venueDetailRows(selectedVenue).map((item) => (
                    <div key={item.label} className="grid gap-2">
                      <dt className="text-[10px] font-medium uppercase tracking-[0.28em] text-charcoal/55">
                        {item.label}
                      </dt>
                      <dd className="text-sm font-light leading-relaxed text-olive/90">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-7 space-y-6 text-base font-light leading-relaxed text-olive/85">
                  <p>{selectedVenue.description}</p>
                  <div className="border-l border-terracotta/50 pl-5">
                    <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.3em] text-terracotta">
                      Planning Note
                    </p>
                    <p>{selectedVenue.planningNote}</p>
                  </div>
                </div>

                <p className="mt-7 text-xs leading-relaxed text-olive/65">
                  Guest capacities and budget ranges are indicative planning
                  ranges, not guaranteed pricing, fixed venue rules or official
                  venue quotes.
                </p>

                <button
                  type="button"
                  onClick={handleVenueInquiryClick}
                  className="mt-9 w-full bg-charcoal px-6 py-5 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-cream transition-colors duration-500 hover:bg-charcoal/85 sm:w-fit sm:px-9 sm:tracking-[0.28em]"
                >
                  Ask About This Venue
                </button>
              </div>
            </div>
          </DialogContent>
        ) : null}
      </Dialog>
    </section>
  );
}
