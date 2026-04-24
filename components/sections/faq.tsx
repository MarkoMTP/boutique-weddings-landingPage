"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AnimatedSection } from "@/components/shared/animated-section"

const categories = [
  {
    label: "Communication",
    items: [
      {
        q: "How will we communicate throughout the planning process?",
        a: "We stay in regular contact via email and are also available by phone whenever needed. Clear, timely communication is one of the foundations of our service.",
      },
      {
        q: "How do meetings take place if we live abroad?",
        a: "Most meetings are held virtually through Zoom or Google Meet, making planning seamless no matter where you are in the world.",
      },
      {
        q: "How often will we receive updates?",
        a: "We keep you fully informed throughout the process and share updates promptly as soon as we receive confirmations, options, or important information from venues and vendors.",
      },
      {
        q: "How do you manage time zone differences?",
        a: "We regularly work with international couples and understand the realities of different time zones. We do our best to respond quickly and efficiently, regardless of where you are based.",
      },
      {
        q: "Do you offer multilingual support?",
        a: "Yes. We are fully bilingual in Italian and English, and additional multilingual support can be arranged when required.",
      },
    ],
  },
  {
    label: "Service & Concierge",
    items: [
      {
        q: "Do you only plan large weddings?",
        a: "Not at all. We expertly plan weddings of many sizes — from intimate celebrations and elegant elopements to larger multi-day destination events.",
      },
      {
        q: "Can you assist with guest logistics and travel?",
        a: "Yes. We can support with transfers, private drivers, boat arrangements, guest movement, and other concierge details that help create a seamless guest experience.",
      },
      {
        q: "Do you help with venue selection?",
        a: "Absolutely. We guide you through selecting the ideal Lake Como venue based on your guest count, style, priorities, and overall vision.",
      },
    ],
  },
  {
    label: "Budget",
    items: [
      {
        q: "Can you help us stay within budget?",
        a: "Yes. We carefully build and manage a working budget throughout the planning journey, helping you allocate resources wisely while protecting the quality of the experience.",
      },
      {
        q: "Can we use our own spreadsheet?",
        a: "Of course. However, many couples prefer our structured planning tools and budget systems, which simplify the process and remove unnecessary stress from your plate.",
      },
      {
        q: "Will you help us prioritise where to invest?",
        a: "Yes. We help clients understand where luxury has the greatest impact — and where thoughtful decisions can create value without compromise.",
      },
    ],
  },
  {
    label: "Timelines",
    items: [
      {
        q: "How do you create a smooth wedding timeline?",
        a: "We begin with an initial framework and refine it as details are confirmed. Closer to the wedding, we produce a comprehensive final schedule for you, the venue, and every supplier involved.",
      },
      {
        q: "How early should we begin planning?",
        a: "Ideally, 12–18 months in advance, especially for highly sought-after Lake Como venues and prime dates.",
      },
      {
        q: "What happens on the wedding day?",
        a: "We oversee the entire schedule, coordinate every supplier, manage logistics discreetly, and ensure the day unfolds beautifully so you can be fully present.",
      },
    ],
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-20 bg-cream relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Editorial Section Header with Picture Frames */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 mb-24 lg:mb-32">
          
          <AnimatedSection className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-[10px] tracking-[0.4em] uppercase text-olive mb-6 font-medium">
              FAQ
            </p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-charcoal mb-8 leading-[1.05]">
              Everything You May
              <br />
              <span className="italic text-terracotta">Be Wondering</span>
            </h2>
            <div className="w-24 h-px bg-stone mb-10" />
            <div className="flex flex-col gap-8">
              <p className="text-lg text-olive/90 font-light leading-relaxed max-w-lg">
                Planning a destination wedding should feel exciting — not overwhelming. We've answered some of the most common questions couples ask before beginning their Lake Como journey with us.
              </p>
              <p className="text-sm text-olive/70 font-light leading-relaxed italic max-w-sm">
                We understand how important it is to trust the team guiding one of the most meaningful days of your life. Our role is to make the process clear, calm, and beautifully organised from the very beginning.
              </p>
            </div>
          </AnimatedSection>

          {/* Picture Frames Collage */}
          <AnimatedSection delay={0.2} className="lg:col-span-6 relative h-[400px] lg:h-[600px] w-full mt-10 lg:mt-0">
            
            {/* Frame 1: Tall Portrait */}
            <div className="absolute right-0 top-0 w-[55%] lg:w-[50%] aspect-[3/4] bg-stone/20 border border-stone/30 flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-x-0 bottom-4 text-center">
                <span className="text-[9px] tracking-[0.2em] uppercase text-olive/40 font-medium">Image Placeholder</span>
              </div>
              {/* User instructions: Add your next/image here */}
              {/* <Image src="YOUR_IMAGE_PATH_HERE" alt="FAQ Image 1" fill className="object-cover" /> */}
            </div>

            {/* Frame 2: Wide Landscape Overlapping */}
            <div className="absolute left-0 lg:left-8 bottom-0 lg:bottom-16 w-[65%] lg:w-[60%] aspect-[4/3] bg-sand/50 border border-stone/40 shadow-2xl flex items-center justify-center overflow-hidden z-10 group">
              <div className="absolute inset-x-0 bottom-4 text-center">
                <span className="text-[9px] tracking-[0.2em] uppercase text-olive/60 font-medium">Image Placeholder</span>
              </div>
              {/* User instructions: Add your next/image here */}
              {/* <Image src="YOUR_IMAGE_PATH_HERE" alt="FAQ Image 2" fill className="object-cover" /> */}
            </div>

          </AnimatedSection>
        </div>

        {/* Minimalist Index Accordions */}
        <div className="border-t border-stone/50">
          {categories.map((category, ci) => (
            <AnimatedSection key={ci} delay={ci * 0.08} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-10 border-b border-stone/50 items-start">

              {/* Left Column Label */}
              <div className="lg:col-span-3 pt-4">
                <span className="text-[10px] tracking-[0.3em] uppercase text-terracotta font-medium block">
                  {category.label}
                </span>
              </div>

              {/* Right Column Accordion */}
              <div className="lg:col-span-9 w-full">
                <Accordion type="single" collapsible className="w-full">
                  {category.items.map((item, ii) => (
                    <AccordionItem
                      key={ii}
                      value={`${ci}-${ii}`}
                      className="border-b border-stone/30 last:border-0"
                    >
                      <AccordionTrigger className="font-serif text-2xl md:text-3xl text-charcoal hover:text-terracotta hover:no-underline transition-colors duration-300 text-left py-6 leading-tight">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-olive/80 font-light leading-relaxed text-base pb-8 pr-12">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

            </AnimatedSection>
          ))}
        </div>


      </div>
    </section>
  )
}
