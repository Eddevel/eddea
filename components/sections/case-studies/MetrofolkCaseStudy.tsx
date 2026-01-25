"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function MetrofolkCaseStudy() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 sm:mb-20"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
          Metrofolk.ng
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          A modern, trustworthy website for solar energy solutions – driving leads and building customer confidence.
        </p>
      </motion.div>

      {/* Overview */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-12 mb-16"
      >
        <div>
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
            The Challenge
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Metrofolk Energy needed a professional online presence to showcase solar products, packages, testimonials, and generate leads. They never had an online presence and lacked trust signals.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Key goals: modern design, smooth UX and fast performance.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#deb56a]/30 shadow-2xl"
          >
            <Image
              src="/assets/metrofolk-screenshot.png"
              alt="Metrofolk.ng Homepage"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Features & Results */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-12 mb-16"
      >
        <div>
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
            Our Solution
          </h2>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#deb56a]/20 to-[#cc0000]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#deb56a] font-bold">✓</span>
              </div>
              <span>Next.js + Tailwind for modern, fast performance</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#deb56a]/20 to-[#cc0000]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#deb56a] font-bold">✓</span>
              </div>
              <span>Product showcase with packages and pricing</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#deb56a]/20 to-[#cc0000]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#deb56a] font-bold">✓</span>
              </div>
              <span>Testimonials and trust signals</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#deb56a]/20 to-[#cc0000]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#deb56a] font-bold">✓</span>
              </div>
              <span>Smooth mobile & desktop experience</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
            Results
          </h2>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#deb56a]/20 to-[#cc0000]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#deb56a] font-bold">✓</span>
              </div>
              <span>Modern, trustworthy visual design</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#deb56a]/20 to-[#cc0000]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#deb56a] font-bold">✓</span>
              </div>
              <span>Smooth user experience on mobile & desktop</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#deb56a]/20 to-[#cc0000]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#deb56a] font-bold">✓</span>
              </div>
              <span>Optimized images and performance</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#deb56a]/20 to-[#cc0000]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#deb56a] font-bold">✓</span>
              </div>
              <span>Increased lead generation and conversions</span>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mt-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
          Ready for a Similar Result?
        </h2>
        <Button asChild size="lg" className="bg-gradient-to-r from-[#deb56a] to-[#cc0000] hover:from-[#cc0000] hover:to-[#deb56a] text-white shadow-2xl hover:shadow-3xl">
          <Link href="/contact">Start Your Project</Link>
        </Button>
      </motion.div>
    </div>
  )
}