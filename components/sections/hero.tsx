"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -50])

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.4,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.8,
      },
    },
  }

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[800px] flex items-end justify-start overflow-hidden pb-32 md:pb-24 bg-black"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"

      >
        <Image
          src="/hero.jpg"
          alt="Candid moment of a luxury wedding couple"
          fill
          priority
          className="object-cover object-[50%_65%]"
          quality={100}
          unoptimized={true}
        />
      </motion.div>

      {/* Gradient Overlay - Deeper, Moodier Editorial Feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-olive/30 via-transparent to-transparent mix-blend-multiply" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 w-full px-6 max-w-7xl mx-auto flex flex-col items-start text-white"
      >
        {/* Decorative Line Left & Tagline */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
          <div className="w-16 h-px bg-gold" />

        </motion.div>

        {/* Main Headline - Left Aligned, Dramatic */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.05] mb-8 text-balance max-w-5xl"
        >
          Luxury Wedding Planner Lake Como

        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-start gap-6 mt-4 w-full"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button
              onClick={() => handleNavClick("#inquiry")}
              className="w-full sm:w-auto rounded-none px-8 py-7 md:py-8 text-xs md:text-sm font-medium tracking-[0.2em] uppercase bg-black text-white hover:bg-black/80 transition-all duration-500 border-0"
            >
              Book Your Private Consultation
            </Button>
          </div>

          <div className="flex items-center gap-3 text-gold text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-light">
            <span className="w-8 h-px bg-gold/50" />
            <span>Limited availability for 2026/2027</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - Bottom Right */}
      <motion.button
        onClick={() => handleNavClick("#profile")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-12 right-12 hidden lg:flex flex-col items-center gap-4 text-white/60 hover:text-gold transition-colors group"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase font-light" style={{ writingMode: 'vertical-rl' }}>Discover</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="h-12 w-px bg-gradient-to-b from-transparent via-current to-transparent"
        />
      </motion.button>
    </section>
  )
}
