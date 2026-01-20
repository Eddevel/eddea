// app/work/page.tsx
// Server Component – no "use client"

import WorkContent from "@/components/sections/WorkContent"

export const metadata = {
  title: "Work | Eddea – Selected Projects",
  description: "Explore our portfolio of modern web applications and websites built for clients in Nigeria and beyond.",
}

export default function WorkPage() {
  return <WorkContent />
}