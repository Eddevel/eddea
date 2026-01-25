"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function CookeyCaseStudy() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-10 pt-20">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 sm:mb-20"
      >
        <h1 className="text-xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent py-5">
          Cookeyfranklinsgroup.com
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          A professional website for a group of companies solving urgent business challenges in Nigeria.
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
          <h2 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
            The Challenge
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Cookeyfranklinsgroup needed a unified online presence to showcase their group of companies and the urgent business solutions they provide. The previous site was outdated and lacked credibility.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Key goals: professional design, clear messaging, trust signals, and lead generation.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#deb56a]/30 shadow-2xl"
          >
            <Image
              src="/assets/cookeyfg-screenshot.png"
              alt="Cookeyfranklinsgroup.com Homepage"
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
              <span>Clear company structure and services overview</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#deb56a]/20 to-[#cc0000]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#deb56a] font-bold">✓</span>
              </div>
              <span>Trust signals and testimonials</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#deb56a]/20 to-[#cc0000]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#deb56a] font-bold">✓</span>
              </div>
              <span>Lead generation forms and contact integration</span>
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
              <span>Professional, trustworthy visual identity</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#deb56a]/20 to-[#cc0000]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#deb56a] font-bold">✓</span>
              </div>
              <span>Improved user engagement and lead generation</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#deb56a]/20 to-[#cc0000]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#deb56a] font-bold">✓</span>
              </div>
              <span>Fast loading and mobile responsiveness</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#deb56a]/20 to-[#cc0000]/20 flex items-center justify-center flex-shrink-0">
                <span className="text-[#deb56a] font-bold">✓</span>
              </div>
              <span>Positive client feedback and increased visibility</span>
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