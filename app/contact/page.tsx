// app/contact/page.tsx
// NO "use client" here → this stays a Server Component

import ContactContent from "@/components/sections/ContactContent"

export const metadata = {
  title: "Contact Eddea | Start Your Project",
  description: "Get in touch to discuss your web development needs. Lagos-based full-stack studio.",
  // add openGraph, etc. if you want
}

export default function ContactPage() {
  return <ContactContent />
}