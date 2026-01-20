import HomeContent from "@/components/sections/HomeContent"

export const metadata = {
  title: "Eddea — Modern Full-Stack Applications",
  description: "Lagos-based software studio building fast, secure, scalable web solutions.",
  keywords: "web development, full-stack,Mobile development, Next.js, Lagos, Nigeria",
  openGraph: {
    title: "Eddea",
    description: "One studio. Zero compromises.",
    url: "https://eddea.org",
    siteName: "Eddea",
    type: "website",
  },
}

export default function Home() {
  return <HomeContent />
  
}