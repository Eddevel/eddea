// components/sections/AboutContent.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { motion } from "framer-motion"
import { Code, Layout, Server, ShieldCheck, Users, Zap } from "lucide-react"

const skills = {
  frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive Design"],
  backend: ["Node.js", "Express.js", "REST APIs", "Firebase / Supabase", "Authentication"],
  other: ["UI/UX Fundamentals", "Performance Optimization", "Cybersecurity Best Practices", "Clean Code Principles"],
}

const whyUs = [
  {
    icon: Zap,
    title: "Reliable Delivery",
    description: "We commit to realistic timelines and deliver high-quality work on schedule.",
  },
  {
    icon: Code,
    title: "Clean & Maintainable Code",
    description: "Well-structured, typed, documented code that scales and is easy to hand over.",
  },
  {
    icon: Users,
    title: "Client-First Approach",
    description: "Clear communication, regular updates, and genuine care about your success.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Performance First",
    description: "Built-in best practices for secure authentication, data protection, and fast loading.",
  },
]

export default function AboutContent() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
          About Eddea
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          A Lagos-based full-stack development studio creating modern, secure, and performant web applications.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 sm:gap-12 items-center mb-16 sm:mb-24">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square rounded-2xl overflow-hidden border-8 border-[#deb56a]/20 shadow-2xl shadow-[#deb56a]/10 hover:shadow-[#deb56a]/30 transition-shadow order-2 md:order-1"
        >
          <Image
            src="/assets/headshot1.jpeg" // ← replace with your real photo
            alt="King Edward - Founder of Eddea"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-5 sm:space-y-6 order-1 md:order-2"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
            Founded by King Edward
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Full-stack developer from Lagos with deep expertise in building fast, scalable, and maintainable web applications. Passionate about clean code, great user experiences, and delivering real business value.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground">
            After years of working on diverse projects — from educational platforms to business websites and internal tools — Eddea was created to bring focused, high-quality development services to startups, businesses, and brands in Nigeria and beyond.
          </p>

          <div className="pt-4">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="text-base sm:text-lg border-[#deb56a] text-[#deb56a] hover:bg-[#deb56a]/10 hover:text-[#deb56a] transition-all"
            >
              <a href="https://x.com/KingEddea" target="_blank" rel="noopener noreferrer">
                Follow on X → @KingEddea
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Skills */}
      <section className="mb-16 sm:mb-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
          Core Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <Card
              key={category}
              className="bg-gradient-to-b from-background to-muted/20 border border-[#deb56a]/20 hover:border-[#deb56a]/40 hover:shadow-[0_10px_30px_rgba(222,181,106,0.12)] transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="capitalize text-xl sm:text-2xl bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="text-xs sm:text-sm border-[#deb56a]/50 text-[#deb56a] hover:bg-[#deb56a]/10 hover:text-[#deb56a] transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
          Why Choose Eddea?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {whyUs.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-gradient-to-b from-background to-muted/20 border border-[#deb56a]/20 hover:border-[#deb56a]/40 hover:shadow-[0_10px_30px_rgba(222,181,106,0.12)] transition-all duration-300">
                <CardHeader className="pb-2 sm:pb-3">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-gradient-to-br from-[#deb56a]/20 to-[#cc0000]/20 flex items-center justify-center mb-3 sm:mb-4 shadow-sm">
                    <item.icon className="h-5 sm:h-6 w-5 sm:w-6 text-[#deb56a]" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}