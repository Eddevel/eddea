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
  title: "Eddea — Modern Full-Stack Web Applications",
  description: "Lagos-based git add .",
  keywords: "web development, full-stack, Next.js, Lagos, Nigeria",
  openGraph: {
    title: "Eddea",
    description: "One studio. Zero compromises.",
    url: "https://eddea.vercel.app",
    siteName: "Eddea",
    type: "website",
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