import type { Metadata } from "next"
import { GeistSans, GeistMono } from "geist/font"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import SmoothScroll from "@/components/animations/SmoothScroll"
import Preloader from "@/components/animations/Preloader"
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "Eddea  - Premium Web3, Mobile & Web Development Studio",
  description: "Lagos-based full-stack studio building secure, modern web/mobile/Web3 applications with cybersecurity expertise. Zero compromises.",
  keywords: "web development, full-stack, Next.js, Lagos, Nigeria, Lekki, React.js, Mobile Development",
  openGraph: {
    title: "Eddea",
    description: "One studio. Zero compromises.",
    url: "https://eddea.org",
    siteName: "Eddea",
    type: "website",
    images: "/assets/og.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-background text-foreground min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Preloader />
          <SmoothScroll>
            <Navbar />
            <main className="pt-16">{children}</main>
            <Footer />
          </SmoothScroll>
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}