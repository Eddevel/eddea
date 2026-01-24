"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import TestimonialsContent from "./TestimonialsContent"

// Tech stack list
const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "React Native",
  "Firebase",
  "Flutter",
  "Python",
  "Javascript",
  "Sass",
  "etherjs",
  "Solidity",
]

// Hero text sequence (changes every 5 seconds)
const heroPhrases = [
  "Modern Mobile Apps Built with Precision",
  "Functional Full-Stack Web Apps Built Right",
  "Decentralized dApps and Smart Contracts",
  "Secure by Design with Cybersecurity Expertise",
  "No Compromises,Clean Code, Fast Delivery",
]

// Type-safe Framer Motion variants
const heroContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
} as const

const heroItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
} as const

const headingReveal = {
  hidden: { opacity: 0, backgroundPosition: "200% 0" },
  show: {
    opacity: 1,
    backgroundPosition: "0 0",
    transition: {
      duration: 1.2,
      ease: "easeOut" as const,
      backgroundPosition: {
        duration: 1.2,
        ease: [0.42, 0, 0.58, 1] as const, // valid easing array
      },
    },
  },
} as const

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 15px 35px rgba(222, 181, 106, 0.25)",
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.98 },
} as const

export default function HomeContent() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % heroPhrases.length)
    }, 5000) // change every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container mx-auto px-4 sm:px-6  pt-10">
      {/* Hero Section - Animated & Sequenced */}
      <motion.section
        variants={heroContainer}
        initial="hidden"
        animate="show"
        className="relative text-center max-w-4xl mx-auto mb-16 sm:mb-24 overflow-hidden"
      >
        {/* Very subtle animated gradient background */}
        <motion.div
          className="absolute inset-0 -z-10 opacity-30 pointer-events-none"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, #deb56a10, transparent 40%)",
              "radial-gradient(circle at 80% 80%, #cc000010, transparent 40%)",
              "radial-gradient(circle at 20% 80%, #deb56a10, transparent 40%)",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut" as const,
          }}
        />

        {/* Sequenced Hero Text */}
        <div className="relative min-h-[140px]  sm:min-h-[180px] md:min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentPhraseIndex}
              variants={headingReveal}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-[length:200%_auto] bg-clip-text text-transparent will-change-transform py-12 "
            >
              {heroPhrases[currentPhraseIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.p variants={heroItem} className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
          We build fast, scalable, user-friendly web & mobile applications for startups, businesses, and brands. From clean UIs to robust backends — delivered on time.
        </motion.p>

        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.6 }}
  className="mt-12 sm:mt-16 text-center"
>
  <div className="inline-block p-1 rounded-full bg-gradient-to-r from-[#deb56a]/30 to-[#cc0000]/30">
    <div className="bg-background rounded-full px-6 py-3 shadow-lg">
      <p className="text-lg sm:text-xl font-semibold text-[#deb56a]">
        Get Your Free Website / Security Audit
      </p>
    </div>
  </div>
  <Button
    asChild
    size="lg"
    className="mt-6 text-base sm:text-lg px-10 bg-gradient-to-r from-[#deb56a] to-[#cc0000] hover:from-[#cc0000] hover:to-[#deb56a] text-white shadow-2xl hover:shadow-3xl transition-all duration-300"
  >
    <Link href="/contact">Book Now – Free 30-Min Call</Link>
  </Button>
</motion.div>
      </motion.section>

      {/* Big Free Audit CTA */}


      {/* Tech stack */}
      <section className="mb-16 sm:mb-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10 bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
          Our Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {techStack.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-xs sm:text-sm border-[#deb56a]/50 text-[#deb56a] hover:bg-[#deb56a]/10 hover:text-[#deb56a] transition-colors px-4 sm:px-6 py-2 sm:py-3"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      {/* Featured projects teaser */}
      <section className="mb-16 sm:mb-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
          Featured Work
        </h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="NaturalG.org"
            description="Corporate/educational website for natural gas information and resources. Clean layout, informative sections, responsive design."
            image="/assets/naturalg-screenshot.png"
            href="/work"
          />
          <ProjectCard
            title="Metrofolk.ng"
            description="Solar energy solutions provider site with product showcase, packages, testimonials, and contact forms. Modern e-commerce-like feel with reliable performance."
            image="/assets/metrofolk-screenshot.png"
            href="/work"
          />
          <ProjectCard
            title="Coming Soon"
            description="Custom web app for local Nigerian startup — more details soon."
            image="/assets/eddea-logo.png"
            href="/work"
            disabled
          />
        </div>
      </section>
      <TestimonialsContent />
     
      {/* Trust signals */}
      <section className="text-center py-12 sm:py-16 bg-gradient-to-b from-muted/20 to-background rounded-xl sm:rounded-2xl border border-[#deb56a]/20">
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
          <p className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
            Projects delivered across Nigeria & beyond
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-base sm:text-lg text-muted-foreground">
            <span className="text-[#deb56a]">Clean code</span>
            <span>•</span>
            <span className="text-[#deb56a]">Fast delivery</span>
            <span>•</span>
            <span className="text-[#deb56a]">Secure by default</span>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProjectCard({
  title,
  description,
  image,
  href,
  disabled = false,
}: {
  title: string
  description: string
  image: string
  href: string
  disabled?: boolean
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="group bg-gradient-to-b from-background to-muted/20 rounded-xl overflow-hidden border border-[#deb56a]/20 shadow-sm hover:shadow-[0_10px_30px_rgba(222,181,106,0.15)] hover:border-[#deb56a]/40 transition-all duration-300"
    >
      <div className="aspect-video relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>
        <Button
          variant="outline"
          asChild
          disabled={disabled}
          className="w-full sm:w-auto border-[#deb56a] text-[#deb56a] hover:bg-[#deb56a]/10 hover:text-[#deb56a] transition-all"
        >
          <Link href={href}>View Details</Link>
        </Button>
      </div>
    </motion.div>
  )
}