// components/layout/Footer.tsx
"use client"  // ← This fixes the error! Footer is now a Client Component

import Link from "next/link"
import { motion } from "framer-motion"
import { Twitter, Mail, Linkedin, Github, Phone } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/30 border-t border-[#deb56a]/20 mt-20">
      {/* Subtle top gradient accent */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#deb56a] via-[#cc0000] to-[#deb56a] opacity-70" />

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-12">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image src="/assets/4.svg" loading="eager" alt="" width={100} height={50} className="" />
              
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Lagos-based full-stack development studio crafting modern, secure, and scalable web & mobile applications with precision and zero compromises.
            </p>
            <div className="flex items-center gap-4">
              <motion.a
                href="https://x.com/KingEddea"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3 }}
                className="text-muted-foreground hover:text-[#deb56a] transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="mailto:hello@eddea.org"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3 }}
                className="text-muted-foreground hover:text-[#deb56a] transition-colors"
              >
                <Mail className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/company/eddea"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3 }}
                className="text-muted-foreground hover:text-[#deb56a] transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://github.com/eddevel"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3 }}
                className="text-muted-foreground hover:text-[#deb56a] transition-colors"
              >
                <Github className="h-6 w-6" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4 bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-[#deb56a] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-muted-foreground hover:text-[#deb56a] transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-[#deb56a] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-[#deb56a] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-[#deb56a] transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-4 bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#deb56a]" />
                <a href="mailto:hello@eddea.dev" className="hover:text-[#deb56a] transition-colors">
                  hello@eddea.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#deb56a]" />
                <a href="tel:+2341234567890" className="hover:text-[#deb56a] transition-colors">
                  +234 907 902 7077
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#deb56a]">Water cooperation road, Oniru Vi, Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-[#deb56a]/20 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Eddea. One studio. Zero compromises.</p>
          <p className="mt-2">
            Crafted with passion in Lagos • Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  )
}