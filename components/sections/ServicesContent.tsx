// components/sections/ServicesContent.tsx
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Globe, ShieldCheck, Database, Lock, Zap, Layout, Server } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Globe,
    title: "Web3 & Blockchain Applications",
    description: "Build secure, decentralized dApps, NFT platforms, DeFi solutions, smart contracts, and tokenized systems with Solidity, Ethers.js, and modern frontend stacks.",
    features: ["Smart Contract Development", "dApp Frontends", "Tokenization & NFTs", "Web3 Wallets & Integrations"],
    color: "#deb56a",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform iOS & Android apps with React Native or Flutter — fast, beautiful, and user-focused mobile experiences that drive real results.",
    features: ["React Native", "Flutter", "iOS & Android", "Push Notifications", "Offline Support"],
    color: "#cc0000",
  },
  {
    icon: Layout,
    title: "Modern Web Applications",
    description: "Responsive, high-performance web apps and websites built with Next.js, React, TypeScript, and Tailwind CSS — pixel-perfect and lightning fast.",
    features: ["Next.js & React", "Tailwind CSS", "Server Components", "SEO Optimized", "Progressive Web Apps (PWA)"],
    color: "#deb56a",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & Secure Development",
    description: "Enterprise-grade security from the ground up: audits, secure authentication, encryption, best practices, and protection against common threats.",
    features: ["Security Audits", "Secure Authentication", "Data Encryption", "Penetration Testing", "Compliance (GDPR, etc.)"],
    color: "#cc0000",
  },
  {
    icon: Database,
    title: "Backend & API Engineering",
    description: "Robust, scalable backends with Node.js, Express, databases, and cloud infrastructure — built for performance and reliability.",
    features: ["Node.js & Express", "REST & GraphQL APIs", "Database Design", "Cloud Infrastructure", "Microservices"],
    color: "#deb56a",
  },
  {
    icon: Zap,
    title: "Custom Solutions & Consulting",
    description: "Tailored development for startups, enterprises, and DAOs — from MVP to production-ready systems with ongoing support and optimization.",
    features: ["MVP Development", "Product Consulting", "Performance Optimization", "Maintenance & Scaling", "Tech Stack Audits"],
    color: "#cc0000",
  },
]

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
}

export default function ServicesContent() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 sm:mb-20"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent py-5">
          Our Services
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          From cutting-edge Web3 solutions to secure mobile & web applications — we build with precision, speed, and uncompromising security.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service, index) => (
          <motion.div key={service.title} variants={item}>
            <Card className="h-full bg-gradient-to-b from-background to-muted/20 border border-[#deb56a]/20 shadow-sm hover:shadow-[0_10px_30px_rgba(222,181,106,0.15)] hover:border-[#deb56a]/40 transition-all duration-300 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#deb56a]/20 to-[#cc0000]/20 flex items-center justify-center mb-4 shadow-sm">
                  <service.icon className="h-7 w-7 text-[#deb56a]" />
                </div>
                <CardTitle className="text-xl sm:text-2xl bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {service.features.map((feature) => (
                    <Badge
                      key={feature}
                      variant="outline"
                      className="text-xs border-[#deb56a]/50 text-[#deb56a] hover:bg-[#deb56a]/10 hover:text-[#deb56a] transition-colors"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-16 sm:mt-24 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
          Ready to Bring Your Vision to Life?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Whether it's a Web3 platform, mobile app, secure web solution, or full cybersecurity overhaul — let's create something extraordinary together.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Button
            asChild
            size="lg"
            className="text-base sm:text-lg px-8 sm:px-10 bg-gradient-to-r from-[#deb56a] to-[#cc0000] hover:from-[#cc0000] hover:to-[#deb56a] text-white shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <Link href="/contact">Start Your Project</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="text-base sm:text-lg px-8 sm:px-10 border-[#deb56a] text-[#deb56a] hover:bg-[#deb56a]/10 hover:text-[#deb56a] transition-all duration-300"
          >
            <a href="mailto:hello@eddea.dev">Email Us Directly</a>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}