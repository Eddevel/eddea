"use client"

import { useEffect, useState } from "react"
import { gsap } from "gsap"
import Image from "next/image"

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setIsLoading(false),
    })

    tl.to(".preloader-text", { 
      opacity: 1, 
      y: 0, 
      duration: 1, 
      ease: "power3.out" 
    })
    .to(".preloader", { 
      y: "-100%", 
      duration: 1.2, 
      ease: "power4.inOut"   // ← GSAP syntax works here
    }, "-=0.6")

    // Optional: force minimum display time
    setTimeout(() => tl.play(), 800)
  }, [])

  if (!isLoading) return null

  return (
    <div className="preloader fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="preloader-text opacity-0 translate-y-10 text-4xl font-bold text-primary">
                    <Image src="/assets/4.svg" loading="eager" alt="" width={100} height={50} className="" />
        
      </div>
    </div>
  )
}