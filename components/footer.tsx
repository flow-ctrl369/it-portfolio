"use client"

import { motion } from "framer-motion"
import { Terminal, Github, Linkedin, Mail } from "lucide-react"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

const socials = [
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Email", href: "mailto:hello@example.com", icon: Mail },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-5 h-5 text-primary" />
                <span className="font-mono text-primary">portfolio@nz:~</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Aspiring IT Support & Networking Technician based in New Zealand. 
                Passionate about Linux, networking, and building practical solutions.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <nav className="grid grid-cols-2 gap-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Socials */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} IT Portfolio. All rights reserved.
            </p>
            
            {/* Terminal status */}
            <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>system status: <span className="text-primary">operational</span></span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
