"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Metrofolk Team",
    company: "Metrofolk Energy",
    quote: "Eddea delivered metrofolk.ng ahead of schedule with pixel-perfect design and great performance. Highly recommend!",
    avatar: "/assets/placeholder-avatar-1.jpg",
  },
  {
    name: "NaturalG Client",
    company: "NaturalG",
    quote: "Professional, responsive, and clean code. naturalg.org looks sharp and loads fast. Very satisfied with the result.",
    avatar: "/assets/placeholder-avatar-2.png",
  },
  {
    name: "Tunde A.",
    company: "Startup Founder",
    quote: "Fast turnaround, clear communication, and high-quality code. Exactly what we needed for our MVP dashboard.",
    avatar: "",
  },
  // ← add real testimonials here when available
]

export default function TestimonialsContent() {
  return (
    <div className="container mx-auto ">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12 sm:mb-10"
      >
        <h1 className="text-4xl  font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
          Client Testimonials
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          Don't just take our word for it — here's what clients say about working with Eddea.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col bg-gradient-to-b from-background to-muted/20 border border-[#deb56a]/20 shadow-sm hover:shadow-[0_10px_30px_rgba(222,181,106,0.15)] hover:border-[#deb56a]/40 transition-all duration-300">
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Avatar className="h-10 w-10 sm:h-12 sm:w-12 ring-2 ring-[#deb56a]/30">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-[#deb56a]/10 text-[#deb56a]">
                      {testimonial.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-base sm:text-lg text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 pt-2 sm:pt-4">
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 sm:h-5 sm:w-5 fill-[#deb56a] text-[#deb56a]"
                    />
                  ))}
                </div>
                <blockquote className="text-base sm:text-lg italic leading-relaxed text-foreground/90">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

    </div>
  )
}