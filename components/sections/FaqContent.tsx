// components/sections/FAQContent.tsx
"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const faqs = [
  {
    question: "How much does it cost to build a website or app with Eddea?",
    answer:
      "Pricing depends on complexity. Starter websites start at ₦1.5M–₦10M, full-featured mobile/web apps range from ₦15M–₦45M, and enterprise/Web3 projects start at ₦50M+. We provide transparent quotes after a free consultation. Book one now to get a custom estimate.",
  },
  {
    question: "What technologies do you use for Web3 and blockchain projects?",
    answer:
      "We specialize in Solidity (smart contracts), Ethers.js/Web3.js, Next.js/React for dApp frontends, IPFS for decentralized storage, and secure wallet integrations (MetaMask, WalletConnect). All projects include security best practices and gas optimization.",
  },
  {
    question: "How long does it take to build a mobile or web application?",
    answer:
      "Timelines vary by scope: simple websites take 4–8 weeks, mobile apps 3–6 months, and complex Web3/enterprise projects 6–12 months. We use agile development with weekly updates so you always know the progress.",
  },
  {
    question: "Do you offer cybersecurity audits and secure development?",
    answer:
      "Yes! Security is at the core of everything we build. We perform full audits (code review, vulnerability scanning, penetration testing), implement secure authentication (JWT, OAuth), encryption, and follow OWASP best practices. We also offer standalone security audits for existing projects.",
  },
  {
    question: "Can you help with ongoing maintenance and support?",
    answer:
      "Absolutely. We offer flexible monthly retainers (₦1.5M–₦5M) that include bug fixes, updates, performance monitoring, security patches, and scaling support. Many clients keep us on retainer for peace of mind.",
  },
  {
    question: "Do you work with startups and early-stage companies?",
    answer:
      "Yes — we love working with startups! We offer startup-friendly pricing, equity options in some cases, and focus on fast MVP development so you can launch quickly and iterate based on user feedback.",
  },
  {
    question: "What is your development process?",
    answer:
      "We follow a clear 5-step process: 1) Discovery & Planning, 2) Design & Prototyping, 3) Development & Testing, 4) Launch & Deployment, 5) Support & Optimization. You get weekly updates and full transparency throughout.",
  },
  {
    question: "Where are you based and do you work internationally?",
    answer:
      "We are proudly based in Lagos, Nigeria, but we work with clients across Africa, Europe, the US, and beyond. All communication is in English, and we use tools like Slack, Zoom, and Notion for seamless collaboration.",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

export default function FAQContent() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 sm:mb-20"
      >
        <h1 className="text-4xl py-3 sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
          Frequently Asked Questions
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          Got questions? We've got clear answers. If you don't find what you're looking for, feel free to reach out!
        </p>
      </motion.div>

      {/* FAQ Accordion */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={item}>
              <AccordionItem
                value={`item-${index}`}
                className="border border-[#deb56a]/20 rounded-xl overflow-hidden bg-gradient-to-b from-background to-muted/20 hover:border-[#deb56a]/40 transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-5 text-left hover:no-underline">
                  <span className="text-lg sm:text-xl font-medium text-foreground">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-16 sm:mt-24 text-center"
      >
        <h2 className="text-3xl py-2 sm:text-4xl font-bold mb-6 bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
          Still Have Questions?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          We're happy to answer anything — book a free 30-minute consultation and let's chat.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Button
            asChild
            size="lg"
            className="text-base sm:text-lg px-10 bg-gradient-to-r from-[#deb56a] to-[#cc0000] hover:from-[#cc0000] hover:to-[#deb56a] text-white shadow-2xl hover:shadow-3xl transition-all duration-300"
          >
            <Link href="/contact">Book Free Consultation</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="text-base sm:text-lg px-10 border-[#deb56a] text-[#deb56a] hover:bg-[#deb56a]/10 hover:text-[#deb56a] transition-all duration-300"
          >
            <a href="mailto:info@eddea.org">Email Us Directly</a>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}