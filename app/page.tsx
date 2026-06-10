import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { PressMarquee } from "@/components/sections/press-marquee";
import { ClientProfile } from "@/components/sections/client-profile";
import { EditorialSpotlight } from "@/components/sections/editorial-spotlight";
import { Destinations } from "@/components/sections/destinations";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { WorkCarousel } from "@/components/sections/work-carousel";
import { FAQ } from "@/components/sections/faq";
import { InquiryForm } from "@/components/sections/inquiry-form";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PressMarquee />
        <ClientProfile />
        <Destinations />
        <ProcessTimeline />
        <EditorialSpotlight />
        <WorkCarousel />
        <FAQ />
        <InquiryForm />
      </main>
      <Footer />
    </>
  );
}
