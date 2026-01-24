import HomeContent from "@/components/sections/HomeContent"

export const metadata = {
  title: "Eddea — Modern Software Development Company",
  description: "Lagos-based software studio building fast, secure, scalable web and mobile solutions.",
  keywords: "web development, full-stack,Mobile development, Next.js, Lagos, Nigeria, Lekki, React.js, Mobile Development",
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