// components/sections/WorkContent.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "NaturalG.org",
    description: "Corporate website for natural gas information and resources. Clean layout, informative sections, responsive design.",
    longDescription: "Professional informational site presenting complex industry knowledge in an accessible way. Focus on readability, fast loading, mobile-friendliness, and SEO foundation.",
    image: "/assets/naturalg-screenshot.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Responsive Design"],
    results: [
      "Fully responsive across all devices",
      "Page load times under 2 seconds",
      "Clear information architecture",
      "SEO-friendly structure",
    ],
  },
  {
    id: 2,
    title: "Metrofolk.ng",
    description: "Solar energy solutions provider site with product showcase, packages, testimonials, and contact forms. Modern e-commerce-like feel with reliable performance.",
    longDescription: "Business-oriented website featuring product catalogs, pricing packages, customer testimonials, inquiry forms, and strong visual hierarchy to build trust and generate leads.",
    image: "/assets/metrofolk-screenshot.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Form Handling", "Image Optimization"],
    results: [
      "Modern, trustworthy visual design",
      "Smooth experience on mobile & desktop",
      "Optimized images and performance",
      "Clear conversion paths",
    ],
  },
  {
    id: 3,
    title: "Custom Dashboard (In Development)",
    description: "Internal business dashboard with data visualization, user management, and role-based access control – coming soon.",
    longDescription: "Secure, performant internal tool currently in development for a local Nigerian startup.",
    image: "/assets/dashboard.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Chart Libraries", "Authentication"],
    results: ["In progress"],
    comingSoon: true,
  },
]

export default function WorkContent() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
          Our Work
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          Selected projects showcasing clean code, thoughtful design, performance, and real business value.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden h-full flex flex-col bg-gradient-to-b from-background to-muted/20 border border-[#deb56a]/20 shadow-sm hover:shadow-[0_10px_30px_rgba(222,181,106,0.15)] hover:border-[#deb56a]/40 transition-all duration-300">
              <div className="aspect-[4/3] sm:aspect-video relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="text-xl sm:text-2xl bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 pb-4 sm:pb-6">
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs sm:text-sm border-[#deb56a]/50 text-[#deb56a] hover:bg-[#deb56a]/10 hover:text-[#deb56a] transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {project.comingSoon && (
                  <p className="text-sm font-medium text-[#cc0000]">
                    Project in development – details coming soon
                  </p>
                )}
              </CardContent>

              <CardFooter className="pt-0">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full text-sm sm:text-base border-[#deb56a] text-[#deb56a] hover:bg-[#deb56a]/10 hover:text-[#deb56a] transition-all"
                    >
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] sm:max-w-4xl max-h-[90vh] overflow-y-auto p-4 sm:p-6 bg-gradient-to-b from-background to-muted/10">
                    <DialogHeader>
                      <DialogTitle className="text-2xl sm:text-3xl bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
                        {project.title}
                      </DialogTitle>
                    </DialogHeader>

                    <div className="mt-4 sm:mt-6 grid gap-6 md:grid-cols-2">
                      <div className="relative aspect-video rounded-lg overflow-hidden border border-[#deb56a]/30 shadow-md">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground">
                          Project Overview
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                          {project.longDescription}
                        </p>

                        <h4 className="font-semibold mb-2 sm:mb-3 text-foreground">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs sm:text-sm border-[#deb56a]/50 text-[#deb56a] hover:bg-[#deb56a]/10"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <h4 className="font-semibold mb-2 sm:mb-3 text-foreground">Key Results</h4>
                        <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                          {project.results.map((result, i) => (
                            <li key={i} className="flex items-start text-foreground/90">
                              <span className="text-[#deb56a] mr-2 text-lg">•</span>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 sm:mt-20 text-center">
        <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
          Interested in similar results for your project?
        </p>
        <Button
          asChild
          size="lg"
          className="text-base sm:text-lg px-8 sm:px-10 bg-gradient-to-r from-[#deb56a] to-[#cc0000] hover:from-[#cc0000] hover:to-[#deb56a] text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Link href="/contact">Start a Project</Link>
        </Button>
      </div>
    </div>
  )
}