"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Terminal, Mail, Linkedin, Github, Send, FileText } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">
              <span className="text-primary">$</span> contact --send
            </h2>
          </div>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Ready to discuss opportunities or collaborate? Let&apos;s connect.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="glass rounded-xl p-8 space-y-6">
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
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-6">Connect with me</h3>

                <div className="space-y-4">
                  <a
                    href="mailto:hello@example.com"
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium group-hover:text-primary transition-colors">Email</div>
                      <div className="text-sm text-muted-foreground">hello@example.com</div>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium group-hover:text-primary transition-colors">LinkedIn</div>
                      <div className="text-sm text-muted-foreground">Connect professionally</div>
                    </div>
                  </a>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Github className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium group-hover:text-primary transition-colors">GitHub</div>
                      <div className="text-sm text-muted-foreground">View my projects</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Resume Download */}
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Download Resume</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get a comprehensive overview of my skills, certifications, and experience.
                </p>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Download CV (PDF)
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
