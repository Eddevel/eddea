"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, Lock, Eye, FileText, Server, AlertTriangle } from "lucide-react"
import Link from "next/link"

const features = [
  "Full Security Audits & Penetration Testing",
  "Secure Authentication (JWT, OAuth, Biometrics)",
  "Data Encryption & Secure Storage",
  "OWASP Top 10 Compliance",
  "Vulnerability Scanning & Remediation",
  "GDPR, ISO 27001 & PCI-DSS Guidance",
]

const process = [
  { step: "1", title: "Initial Assessment", desc: "Review current security posture and risks." },
  { step: "2", title: "Threat Modeling", desc: "Identify potential attack vectors." },
  { step: "3", title: "Testing & Auditing", desc: "Perform penetration testing and code review." },
  { step: "4", title: "Reporting & Fixes", desc: "Deliver detailed report with remediation steps." },
  { step: "5", title: "Ongoing Monitoring", desc: "Provide support and security updates." },
]

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } }
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } } }

export default function CybersecurityContent() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
        <h1 className="text-4xl py-3 sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
          Cybersecurity & Secure Development
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          We protect your business with enterprise-grade security — from audits to secure-by-design development.
        </p>
      </motion.div>

      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {features.map((feature, i) => (
          <motion.div key={i} variants={item}>
            <Card className="h-full bg-gradient-to-b from-background to-muted/20 border-[#deb56a]/20 hover:border-[#deb56a]/40 hover:shadow-[0_10px_30px_rgba(222,181,106,0.15)] transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#deb56a]/20 to-[#cc0000]/20 flex items-center justify-center mb-4">
                  {i === 0 && <ShieldCheck className="h-6 w-6 text-[#deb56a]" />}
                  {i === 1 && <Lock className="h-6 w-6 text-[#deb56a]" />}
                  {i === 2 && <Eye className="h-6 w-6 text-[#deb56a]" />}
                  {i === 3 && <FileText className="h-6 w-6 text-[#deb56a]" />}
                  {i === 4 && <Server className="h-6 w-6 text-[#deb56a]" />}
                  {i === 5 && <AlertTriangle className="h-6 w-6 text-[#deb56a]" />}
                </div>
                <CardTitle className="text-lg">{feature}</CardTitle>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Process */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-16">
        <h2 className="text-3xl py-2 sm:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
          Our Cybersecurity Process
        </h2>
        <div className="grid md:grid-cols-5 gap-6 text-center">
          {process.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 bg-gradient-to-b from-background to-muted/20 rounded-xl border border-[#deb56a]/20 hover:border-[#deb56a]/40 transition-all"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#deb56a]/20 to-[#cc0000]/20 flex items-center justify-center text-[#deb56a] font-bold text-xl">
                {step.step}
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center">
        <h2 className="text-3xl py-2 sm:text-4xl font-bold mb-6 bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
          Ready to Secure Your Business?
        </h2>
        <Button asChild size="lg" className="bg-gradient-to-r from-[#deb56a] to-[#cc0000] hover:from-[#cc0000] hover:to-[#deb56a] text-white shadow-2xl hover:shadow-3xl">
          <Link href="/contact">Book Free Security Consultation</Link>
        </Button>
      </motion.div>
    </div>
  )
}