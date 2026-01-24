"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "sonner"
import { addDoc, collection } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { motion } from "framer-motion"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().optional(),
  projectType: z.string(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: "Website",
      message: "",
    },
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      await addDoc(collection(db, "inquiries"), {
        ...values,
        createdAt: new Date().toISOString(),
      })
      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours. Thank you for reaching out!",
      })
      form.reset()
    } catch (error) {
      console.error("Submission error:", error)
      toast.error("Something went wrong", {
        description: "Please try again or email us directly at hello@eddea.dev",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <motion.form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-2xl mx-auto bg-gradient-to-b from-background to-muted/20 p-6 sm:p-10 rounded-2xl border border-[#deb56a]/20 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your name" 
                    {...field} 
                    className="border-[#deb56a]/50 focus:border-[#deb56a] focus:ring-[#deb56a]/20"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Email</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="your@email.com" 
                    type="email" 
                    {...field} 
                    className="border-[#deb56a]/50 focus:border-[#deb56a] focus:ring-[#deb56a]/20"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Phone (optional)</FormLabel>
              <FormControl>
                <Input 
                  placeholder="+234 ..." 
                  {...field} 
                  className="border-[#deb56a]/50 focus:border-[#deb56a] focus:ring-[#deb56a]/20"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="projectType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Project Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="border-[#deb56a]/50 focus:border-[#deb56a] focus:ring-[#deb56a]/20">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Website">Website</SelectItem>
                  <SelectItem value="Web App">Web App</SelectItem>
                  <SelectItem value="Mobile App">Mobile App</SelectItem>
                  <SelectItem value="Web3 / Blockchain">Web3 / Blockchain</SelectItem>
                  <SelectItem value="Security Audit">Security Audit</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us about your project..." 
                  rows={6} 
                  {...field} 
                  className="border-[#deb56a]/50 focus:border-[#deb56a] focus:ring-[#deb56a]/20"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-[#deb56a] to-[#cc0000] hover:from-[#cc0000] hover:to-[#deb56a] text-white shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </motion.form>
    </Form>
  )
}