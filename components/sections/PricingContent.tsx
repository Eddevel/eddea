// components/sections/PricingContent.tsx
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

// Pricing plans
const pricingPlans = [
  {
    name: "Starter",
    price: "₦1.5M - ₦10M",
    description: "Perfect for MVPs, landing pages, and small business websites.",
    features: [
      "Fully responsive design",
      "Next.js + Tailwind",
      "Basic SEO optimization",
      "Contact & form integration",
      "1 round of revisions",
      "30 days support",
    ],
    color: "#deb56a",
    recommended: false,
  },
  {
    name: "Professional",
    price: "₦15M - ₦45M",
    description: "Full-featured web/mobile apps with advanced functionality and security.",
    features: [
      "Custom UI/UX design",
      "React/Next.js + TypeScript",
      "Backend (Node/Express/Firebase)",
      "Authentication & user management",
      "Performance & security audit",
      "2 rounds of revisions",
      "60 days support",
    ],
    color: "#cc0000",
    recommended: true,
  },
  {
    name: "Enterprise / Web3",
    price: "₦50M+",
    description: "Complex Web3 dApps, blockchain integrations, high-security systems, and enterprise solutions.",
    features: [
      "Smart contract development (Solidity)",
      "dApp frontend & wallet integration",
      "Full cybersecurity audit",
      "Unlimited revisions (scope agreed)",
      "90+ days support & maintenance",
      "Tokenomics & NFT support",
    ],
    color: "#deb56a",
    recommended: false,
  },
]

// Type-safe Framer Motion variants (no TS errors)
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
} as const

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const, // ← this fixes the type error
    },
  },
} as const

export default function PricingContent() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 sm:mb-20"
      >
        <h1 className="text-4xl py-3 sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
          Transparent Pricing
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          We offer flexible packages tailored to your needs — from startups to enterprise. No hidden fees, just exceptional value.
        </p>
      </motion.div>

      {/* Pricing Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 "
      >
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.name}
            variants={item}
            className={`relative rounded-2xl overflow-hidden border-2 py-10 ${
              plan.recommended
                ? "border-[#cc0000] shadow-2xl shadow-[#cc0000]/20"
                : "border-[#deb56a]/30"
            } bg-gradient-to-b from-background to-muted/30 hover:shadow-[0_20px_50px_rgba(222,181,106,0.15)] transition-all duration-300`}
          >
            {plan.recommended && (
              <div className="absolute top-0 right-0 bg-[#cc0000] text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                Recommended
              </div>
            )}

            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
                {plan.name}
              </CardTitle>
              <p className="text-3xl font-bold mt-2">{plan.price}</p>
              <CardDescription className="mt-2 text-base">{plan.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="h-5 w-5 text-[#deb56a] mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="pt-6">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-[#deb56a] to-[#cc0000] hover:from-[#cc0000] hover:to-[#deb56a] text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact">Get Started →</Link>
              </Button>
            </CardFooter>
          </motion.div>
        ))}
      </motion.div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-16 sm:mt-24 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
          Not Sure Which Plan Fits?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Book a free 30-minute consultation — we'll audit your current setup and recommend the perfect solution.
        </p>
        <Button
          asChild
          size="lg"
          className="text-base sm:text-lg px-10 bg-gradient-to-r from-[#deb56a] to-[#cc0000] hover:from-[#cc0000] hover:to-[#deb56a] text-white shadow-2xl hover:shadow-3xl transition-all duration-300"
        >
          <Link href="/contact">Book Free Consultation</Link>
        </Button>
      </motion.div>
    </div>
  )
}