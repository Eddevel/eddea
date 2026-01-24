"use client"

import { motion } from "framer-motion"
import ContactForm from "@/components/forms/ContactForm"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactContent() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h1 className="text-4xl py-5 sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
          Let's Build Something Great Together
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Ready to turn your idea into a fast, secure, modern web or mobile application? Drop us a message — we reply fast.
        </p>
      </motion.section>

      <div className="max-w-2xl mx-auto">
        <ContactForm />
      </div>

      <div className="mt-12 sm:mt-16 text-center">
        <p className="text-lg sm:text-xl font-medium mb-6 sm:mb-8 text-foreground">
          Prefer to reach out directly?
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="text-base sm:text-lg px-8 sm:px-10 border-[#deb56a] text-[#deb56a] hover:bg-[#deb56a]/10 hover:text-[#deb56a] transition-all duration-300"
          >
            <Link href="https://x.com/KingEddea" target="_blank" rel="noopener noreferrer">
              Message on X @KingEddea
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            className="text-base sm:text-lg px-8 sm:px-10 bg-gradient-to-r from-[#deb56a] to-[#cc0000] hover:from-[#cc0000] hover:to-[#deb56a] text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="mailto:hello@eddea.org">Email Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}