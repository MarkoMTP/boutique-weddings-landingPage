import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { VenueDirectory } from "@/components/sections/venue-directory";
import { VenueFAQ } from "@/components/sections/venue-faq";
import { InquiryForm } from "@/components/sections/inquiry-form";

export const metadata: Metadata = {
  title: "Lake Como Wedding Venues | Boutique Weddings Italy",
  description:
    "Explore Lake Como wedding venues, from private villas and lakefront gardens to luxury hotels, with guidance from a wedding planner Lake Como couples trust.",
  keywords: [
    "Lake Como wedding venues",
    "wedding venues in Lake Como",
    "luxury wedding venues Lake Como",
    "private villa wedding Lake Como",
    "luxury wedding villa Lake Como",
    "destination wedding in Lake Como",
    "Lake Como wedding planning",
    "wedding planner Lake Como",
  ],
  openGraph: {
    title: "Lake Como Wedding Venues | Boutique Weddings Italy",
    description:
      "A refined guide to selected wedding venues in Lake Como for international couples planning a destination wedding.",
    images: [
      {
        url: "/villas%20lake%20como%20copy/villabalbianellop.webp",
        width: 1200,
        height: 630,
        alt: "Lake Como wedding venue at Villa del Balbianello",
      },
    ],
  },
};

export default function VenuesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[84vh] overflow-hidden bg-charcoal pt-32 text-cream md:pt-36">
          <Image
            src="/villas%20lake%20como%20copy/villa%20pliniana.jpg"
            alt="Luxury private villa wedding venue on Lake Como"
            fill
            priority
            className="object-cover object-center opacity-55"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/25" />

          <div className="relative z-10 mx-auto flex min-h-[calc(84vh-8rem)] max-w-7xl items-end px-6 pb-16 lg:px-8 lg:pb-20">
            <div className="max-w-4xl">
              <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.4em] text-cream/70">
                Lake Como Venue Guidance
              </p>
              <h1 className="font-serif text-5xl leading-[0.98] text-cream md:text-7xl lg:text-8xl">
                Lake Como{" "}
                <span className="italic text-gold">Wedding Venues</span>
              </h1>
              <div className="my-8 h-px w-16 bg-cream/40" />
              <div className="grid gap-6 text-base font-light leading-relaxed text-cream/82 md:text-lg lg:grid-cols-2">
                <p>
                  Explore some of the most iconic wedding venues in Lake Como,
                  from historic villas and lakefront gardens to luxury hotels
                  and private estates.
                </p>
                <p>
                  Choosing the right venue depends on your guest count, style,
                  budget, logistics and overall wedding vision. We help
                  international couples understand which Lake Como wedding
                  venues best fit their celebration and guide them through the
                  planning process from the very first decision.
                </p>
              </div>

              <Link
                href="#inquiry"
                className="mt-10 inline-flex w-full items-center justify-center bg-cream px-6 py-5 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-charcoal transition-colors duration-500 hover:bg-cream/85 sm:w-fit sm:px-10 sm:tracking-[0.3em]"
              >
                Ask About a Lake Como Venue
              </Link>
            </div>
          </div>
        </section>

        <VenueDirectory />

        <section className="bg-sand/70 py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
            <div className="lg:col-span-5">
              <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.4em] text-olive">
                Planning Perspective
              </p>
              <h2 className="font-serif text-4xl leading-[1.05] text-charcoal md:text-6xl">
                Private villa wedding{" "}
                <span className="italic text-terracotta">Lake Como</span>
              </h2>
            </div>
            <div className="space-y-6 text-base font-light leading-relaxed text-olive/85 md:text-lg lg:col-span-7">
              <p>
                A luxury wedding villa Lake Como experience is shaped by more
                than the view. Boat arrivals, guest transfers, sound limits,
                ceremony flow, contingency plans, catering spaces and setup time
                all influence whether a venue is the right fit.
              </p>
              <p>
                As a wedding planner Lake Como couples can involve early, we
                help align venue choice with design direction, guest experience
                and the practical rhythm of a destination wedding in Lake Como.
              </p>
            </div>
          </div>
        </section>

        <VenueFAQ />
        <InquiryForm />
      </main>
      <Footer />
    </>
  );
}
