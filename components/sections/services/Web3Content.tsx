"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Code, Wallet, Lock, Zap } from "lucide-react"
import Link from "next/link"

const features = [
  "Smart Contract Development (Solidity)",
  "dApp Frontend (Next.js + React)",
  "Wallet Integration (MetaMask, WalletConnect)",
  "Token & NFT Platforms",
  "DeFi Protocols & Yield Farming",
  "Gas Optimization & Security Audits",
]

const process = [
  { step: "1", title: "Discovery & Tokenomics", desc: "Define your vision, token model, and blockchain requirements." },
  { step: "2", title: "Smart Contract Design", desc: "Write secure, audited Solidity contracts." },
  { step: "3", title: "Frontend & Integration", desc: "Build beautiful dApp interfaces with Web3 connectivity." },
  { step: "4", title: "Testing & Audit", desc: "Full security audit and testnet deployment." },
  { step: "5", title: "Launch & Support", desc: "Mainnet launch + ongoing maintenance." },
]

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } }
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } } }

export default function Web3Content() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
        <h1 className="text-4xl py-3 sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#deb56a] to-[#cc0000] bg-clip-text text-transparent">
          Web3 & Blockchain Development
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          We build secure, scalable decentralized applications, smart contracts, and Web3 platforms that stand the test of time.
        </p>
      </motion.div>

      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {features.map((feature, i) => (
          <motion.div key={i} variants={item}>
            <Card className="h-full bg-gradient-to-b from-background to-muted/20 border-[#deb56a]/20 hover:border-[#deb56a]/40 hover:shadow-[0_10px_30px_rgba(222,181,106,0.15)] transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#deb56a]/20 to-[#cc0000]/20 flex items-center justify-center mb-4">
                  {i === 0 && <Globe className="h-6 w-6 text-[#deb56a]" />}
                  {i === 1 && <Code className="h-6 w-6 text-[#deb56a]" />}
                  {i === 2 && <Wallet className="h-6 w-6 text-[#deb56a]" />}
                  {i === 3 && <Lock className="h-6 w-6 text-[#deb56a]" />}
                  {i === 4 && <Zap className="h-6 w-6 text-[#deb56a]" />}
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
          Our Web3 Development Process
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
          Ready to Launch Your Web3 Vision?
        </h2>
        <Button asChild size="lg" className="bg-gradient-to-r from-[#deb56a] to-[#cc0000] hover:from-[#cc0000] hover:to-[#deb56a] text-white shadow-2xl hover:shadow-3xl">
          <Link href="/contact">Book Free Consultation</Link>
        </Button>
      </motion.div>
    </div>
  )
}