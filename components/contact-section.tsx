"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, FileText } from "lucide-react"
import { SectionWrapper } from "@/components/sections/SectionWrapper"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { GlassCard } from "@/components/cards/GlassCard"
import { contactLinks, resumeLink, contactEmail } from "@/lib/data/contact"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
  }

  return (
    <SectionWrapper id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          title="contact --send"
          description="Ready to discuss opportunities or collaborate? Let's connect."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <GlassCard>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </GlassCard>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <GlassCard>
              <h3 className="text-lg font-semibold mb-6">Connect with me</h3>

              <div className="space-y-4">
                {contactLinks.map((contact) => {
                  const Icon = contact.icon
                  return (
                    <a
                      key={contact.name}
                      href={contact.href}
                      target={contact.name !== "Email" ? "_blank" : undefined}
                      rel={contact.name !== "Email" ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium group-hover:text-primary transition-colors">{contact.name}</div>
                        <div className="text-sm text-muted-foreground">{contact.description}</div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </GlassCard>

            {/* Resume Download */}
            <GlassCard>
              <h3 className="text-lg font-semibold mb-4">Download Resume</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get a comprehensive overview of my skills, certifications, and experience.
              </p>
              <a
                href={resumeLink}
                download="Poutama_CV.pdf"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
              >
                <FileText className="w-4 h-4" />
                Download CV (PDF)
              </a>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}