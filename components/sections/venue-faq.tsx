import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedSection } from "@/components/shared/animated-section";

const venueFaqs = [
  {
    q: "Do you help couples choose wedding venues in Lake Como?",
    a: "Yes. We help international couples explore Lake Como wedding venues, compare villa and hotel options, understand logistics and choose a setting that fits their guest count, style and overall wedding investment.",
  },
  {
    q: "Can you help if we have not chosen a venue yet?",
    a: "Yes. Many couples contact us before choosing a venue. We can guide you through private villas, lakefront hotels, historic estates and other wedding venues in Lake Como.",
  },
  {
    q: "Do you only work with the venues listed here?",
    a: "No. These venues are examples of the type of Lake Como settings we can help couples consider. We can also recommend other venues depending on your guest count, style, priorities and preferred wedding experience.",
  },
  {
    q: "Do you offer full-service wedding planning in Lake Como?",
    a: "Yes. We offer full-service wedding planning in Lake Como, including venue guidance, vendor coordination, design direction, logistics, timelines and wedding weekend support.",
  },
];

export function VenueFAQ() {
  return (
    <section id="faq" className="py-20 lg:py-24 bg-sand/50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <p className="text-[10px] tracking-[0.4em] uppercase text-olive mb-6 font-medium">
              Venue FAQ
            </p>
            <h2 className="font-serif text-4xl md:text-6xl text-charcoal mb-8 leading-[1.05]">
              Choosing a venue,{" "}
              <span className="italic text-terracotta">with clarity</span>
            </h2>
            <div className="w-16 h-px bg-stone mb-8" />
            <p className="text-base md:text-lg text-olive/85 font-light leading-relaxed max-w-md">
              A few essentials for couples comparing Lake Como wedding venues
              before beginning the full planning process.
            </p>
          </div>

          <div className="lg:col-span-8">
            <Accordion
              type="single"
              collapsible
              className="w-full border-t border-stone/50"
            >
              {venueFaqs.map((item, index) => (
                <AccordionItem
                  key={item.q}
                  value={`venue-faq-${index}`}
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
