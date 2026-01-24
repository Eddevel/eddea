"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// Navigation items
const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Wait until mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLinkClick = () => {
    setMobileOpen(false)
  }

  // SSR placeholder to prevent layout shift
  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
            <Image src="/assets/4.svg" loading="eager" alt="" width={100} height={50} className="" />
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 h-10" />
            <div className="h-10 w-10" />
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#deb56a]/20 bg-background/90 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent tracking-tight"
          >
            <Image src="/assets/4.svg" loading="eager" alt="" width={100} height={50} />
            
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm lg:text-base font-medium  text-[#cc0000] transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-[#deb56a] to-[#cc0000] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          {/* Theme Toggle - Desktop */}
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="hover:bg-[#deb56a]/10 hover:text-[#deb56a]"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-[#deb56a]" />
              ) : (
                <Moon className="h-5 w-5 text-[#cc0000]" />
              )}
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-[#deb56a]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="md:hidden border-t border-[#deb56a]/20 bg-background/95 backdrop-blur-lg px-4 sm:px-6 py-8 flex flex-col gap-6 safe-area-inset-bottom shadow-lg"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-medium text-[#cc0000] "
              onClick={handleLinkClick}
            >
              {item.label}
            </Link>
          ))}

          {/* Theme Toggle - Mobile */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Button
              variant="outline"
              className="justify-start text-base border-[#deb56a] text-[#deb56a] hover:bg-[#deb56a]/10 hover:text-[#deb56a]"
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark")
                setMobileOpen(false)
              }}
            >
              {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </Button>
          </motion.div>
        </motion.nav>
      )}
    </header>
  )
}