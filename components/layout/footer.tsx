"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Mail, MapPin, ArrowUpRight } from "lucide-react"
import { AnimatedSection } from "@/components/shared/animated-section"

const galleryImages = [
  { src: "/images/gallery/silk-ribbons.jpg", alt: "Luxury silk ribbons" },
  { src: "/images/gallery/vintage-alfa.jpg", alt: "Vintage Alfa Romeo" },
  { src: "/images/gallery/limestone-wall.jpg", alt: "Limestone wall texture" },
  { src: "/images/gallery/olive-grove.jpg", alt: "Tuscan olive grove" },
  { src: "/images/gallery/table-setting.jpg", alt: "Elegant table setting" },
]

const footerLinks = {
  experience: [
    { label: "Lake Como", href: "#destinations" },
    { label: "Our Process", href: "#process" },
    { label: "Services", href: "#commissions" },
    { label: "About Giorgia", href: "#about" },
  ],
  connect: [
    { label: "Request Consultation", href: "#inquiry" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
}

export function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-charcoal text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 border-b border-cream/10 pb-20">

          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link href="/" className="relative inline-block mb-8 group">
              <div className="relative h-14 w-44 md:h-20 md:w-56 transition-all duration-300">
                <Image
                  src="/Logo HD-07.png"
                  alt="Boutique Weddings Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-cream/70 font-light leading-relaxed max-w-sm mb-10 text-sm md:text-base">
              Luxury Lake Como wedding planning, crafted with heart, precision,
              and complete dedication — since 2007.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/boutiqueweddings_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border border-cream/20 hover:border-gold hover:bg-gold/5 transition-all duration-300 rounded-full group"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4 text-cream/70 group-hover:text-gold transition-colors" />
              </a>
              <a
                href="mailto:info@boutique-weddings.com"
                className="w-12 h-12 flex items-center justify-center border border-cream/20 hover:border-gold hover:bg-gold/5 transition-all duration-300 rounded-full group"
                aria-label="Email us"
              >
                <Mail className="w-4 h-4 text-cream/70 group-hover:text-gold transition-colors" />
              </a>
            </div>
          </div>

          {/* Your Experience Links */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-medium tracking-[0.3em] uppercase mb-8 text-cream/40">
              Your Experience
            </h4>
            <ul className="space-y-5">
              {footerLinks.experience.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-cream/70 hover:text-gold transition-colors font-light text-sm flex items-center gap-2 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-medium tracking-[0.3em] uppercase mb-8 text-cream/40">
              Connect
            </h4>
            <ul className="space-y-5">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-cream/70 hover:text-gold transition-colors font-light text-sm flex items-center gap-2 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-medium tracking-[0.3em] uppercase mb-8 text-cream/40">
              Headquarters
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-cream/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold/50" />
                <span className="font-light">Lake Como, Italy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar Info */}
        <div className="pt-8 pb-16 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/40 text-[10px] uppercase tracking-[0.2em] font-medium">
            &copy; {new Date().getFullYear()} Boutique Weddings. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-cream/40 hover:text-cream/80 text-[10px] tracking-[0.2em] uppercase transition-colors">Privacy</a>
            <a href="#" className="text-cream/40 hover:text-cream/80 text-[10px] tracking-[0.2em] uppercase transition-colors">Terms</a>
          </div>
        </div>
      </div>

      {/* Massive Brand Footer Logotype */}
      <div className="w-full flex justify-center -mb-2 overflow-hidden pointer-events-none select-none">
        <h2 className="font-serif text-[13vw] md:text-[14vw] leading-[0.75] text-cream/[0.03] whitespace-nowrap tracking-wide">
          BOUTIQUE WEDDINGS
        </h2>
      </div>
    </footer>
  )
}
