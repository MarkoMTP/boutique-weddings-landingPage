"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { AnimatedSection } from "@/components/shared/animated-section"
import { Check, Lock } from "lucide-react"


const investmentRanges = [
  { value: "100k+", label: "€100,000+" },
  { value: "200k+", label: "€200,000+" },
  { value: "300k+", label: "€300,000+" },
  { value: "500k+", label: "€500,000+" },
  { value: "1m+", label: "€1,000,000+" },
]

export function InquiryForm() {
  const router = useRouter()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    guestNumber: "",
    investment: "",
    eventDate: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("https://hook.eu1.make.com/3a73dpbncmpdqp6a9xoqdbuzd35ktuhd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        router.push("/thank-you")
      } else {
        alert("Something went wrong with the submission. Please try again.")
      }
    } catch (error) {
      console.error("Submission error:", error)
      alert("There was an error communicating with the server. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="inquiry" className="py-32 lg:py-48 bg-sand text-charcoal">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20 lg:mb-24">
          <div className="inline-flex flex-col items-center gap-6 mb-10">
            <div className="inline-flex items-center gap-3 px-5 py-2 border border-olive/20 rounded-full">
              <Lock className="w-3 h-3 text-terracotta" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-charcoal/60 font-medium">
                By Application Only
              </span>
            </div>
            <div className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-olive font-medium">
              Limited Availability for 2026/2027 • Select celebrations per year
            </div>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-charcoal mb-8 text-balance">
            Private <span className="italic text-terracotta">Application</span>
          </h2>
          <div className="w-16 h-px bg-stone mx-auto mb-8" />
          <p className="text-lg text-olive/80 font-light max-w-xl mx-auto italic">
            Begin the conversation about your extraordinary celebration. Giorgia reviews all inquiries personally.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <AnimatedSection delay={0.2}>
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="bg-cream p-10 md:p-14 lg:p-16 border border-stone/30 shadow-2xl shadow-charcoal/5"
                >
                  <div className="space-y-10">
                    {/* Name Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                      <div className="space-y-2 relative">
                        <Label htmlFor="firstName" className="text-[10px] tracking-[0.3em] uppercase text-olive font-medium">Name</Label>
                        <Input
                          id="firstName" name="firstName" type="text" placeholder="Charlotte" value={formData.firstName} onChange={handleInputChange} required
                          className="rounded-none border-0 border-b border-stone/50 bg-transparent px-0 h-12 focus-visible:ring-0 focus-visible:border-terracotta text-charcoal font-light shadow-none"
                        />
                      </div>
                      <div className="space-y-2 relative">
                        <Label htmlFor="lastName" className="text-[10px] tracking-[0.3em] uppercase text-olive font-medium">Surname</Label>
                        <Input
                          id="lastName" name="lastName" type="text" placeholder="Smith" value={formData.lastName} onChange={handleInputChange} required
                          className="rounded-none border-0 border-b border-stone/50 bg-transparent px-0 h-12 focus-visible:ring-0 focus-visible:border-terracotta text-charcoal font-light shadow-none"
                        />
                      </div>
                    </div>

                    {/* Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                      <div className="space-y-2 relative">
                        <Label htmlFor="email" className="text-[10px] tracking-[0.3em] uppercase text-olive font-medium">Email Address</Label>
                        <Input
                          id="email" name="email" type="email" placeholder="c.smith@example.com" value={formData.email} onChange={handleInputChange} required
                          className="rounded-none border-0 border-b border-stone/50 bg-transparent px-0 h-12 focus-visible:ring-0 focus-visible:border-terracotta text-charcoal font-light shadow-none"
                        />
                      </div>
                      <div className="space-y-2 relative">
                        <Label htmlFor="guestNumber" className="text-[10px] tracking-[0.3em] uppercase text-olive font-medium">Estimated Guests</Label>
                        <Input
                          id="guestNumber" name="guestNumber" type="number" placeholder="80" value={formData.guestNumber} onChange={handleInputChange} required
                          className="rounded-none border-0 border-b border-stone/50 bg-transparent px-0 h-12 focus-visible:ring-0 focus-visible:border-terracotta text-charcoal font-light shadow-none"
                        />
                      </div>
                    </div>



                    {/* Timeframe */}
                    <div className="space-y-2">
                      <Label htmlFor="eventDate" className="text-[10px] tracking-[0.3em] uppercase text-olive font-medium">Preferred Timeframe</Label>
                      <Input
                        id="eventDate" name="eventDate" type="text" placeholder="Summer 2026 / Autumn 2027" value={formData.eventDate} onChange={handleInputChange}
                        className="rounded-none border-0 border-b border-stone/50 bg-transparent px-0 h-12 focus-visible:ring-0 focus-visible:border-terracotta text-charcoal font-light shadow-none"
                      />
                    </div>

                    {/* Message Area */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-[10px] tracking-[0.3em] uppercase text-olive font-medium">YOUR VISION</Label>
                      <textarea
                        id="message" name="message" rows={4}
                        placeholder="Tell us about the atmosphere, the aesthetic, and the experience you wish to create..."
                        value={formData.message} onChange={handleInputChange}
                        className="w-full bg-transparent border-0 border-b border-stone/50 px-0 py-3 text-charcoal font-light placeholder:text-stone focus:ring-0 focus:outline-none focus:border-terracotta resize-none shadow-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                      <Button
                        type="submit" disabled={isLoading}
                        className="w-full rounded-none py-8 bg-black text-white hover:bg-black/80 transition-colors font-medium tracking-[0.2em] uppercase text-[10px] md:text-xs border-0"
                      >
                        {isLoading ? "Reviewing Application..." : "Submit Private Application"}
                      </Button>
                    </div>

                    <p className="text-center text-sm text-muted-foreground pt-2">
                      <span className="italic">Giorgia reviews all inquiries personally.</span>
                    </p>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-background p-14 md:p-20 shadow-sm border border-border text-center h-full flex flex-col justify-center"
                >
                  <div className="w-20 h-20 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-8">
                    <Check className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                    Application Received
                  </h3>
                  <p className="text-lg text-muted-foreground font-light mb-8 max-w-md mx-auto">
                    Thank you for your interest. Giorgia will personally review your application and respond within 48-72 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </AnimatedSection>

          {/* Direct Booking Column */}
          <AnimatedSection delay={0.4} className="h-full">
            <div className="bg-cream/40 p-10 md:p-14 border border-olive/10 h-full flex flex-col justify-center text-center">
              <div className="inline-flex flex-col items-center gap-4 mb-8">
                <div className="text-[10px] tracking-[0.4em] uppercase text-terracotta font-medium">
                  Priority
                </div>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
                Book a <span className="italic text-olive/80">Call Directly</span>
              </h3>
              <p className="text-base text-olive/70 font-light mb-10 max-w-sm mx-auto leading-relaxed">
                Prefer an immediate conversation? Schedule a 30-minute discovery call with Giorgia to discuss your vision in detail.
              </p>
              <div className="pt-4">
                <Button
                  asChild
                  className="w-full rounded-none py-8 bg-black text-white hover:bg-black/80 font-medium tracking-[0.2em] uppercase text-[10px] transition-all duration-500 border-0"
                >
                  <a href="https://calendly.com/boutiqueweddings/30min" target="_blank" rel="noopener noreferrer">
                    Schedule Your Consultation
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
