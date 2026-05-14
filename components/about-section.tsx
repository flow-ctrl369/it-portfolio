"use client"

import { motion } from "framer-motion"
import { Terminal } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-8">
            <Terminal className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">
              <span className="text-primary">$</span> about --me
            </h2>
          </div>

          {/* Content Card */}
          <div className="glass rounded-xl p-8">
            <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
              <p>
                After years in the <span className="text-primary font-medium">hospitality industry</span>, 
                I developed strong communication skills, learned to thrive under pressure, and mastered 
                the art of customer service. These experiences taught me how to troubleshoot problems 
                on the fly and work effectively in fast-paced team environments.
              </p>
              
              <p>
                Now, I&apos;m channeling that same dedication into my <span className="text-terminal-cyan font-medium">transition to IT</span>. 
                Through hands-on learning and earning my <span className="text-primary font-medium">CompTIA A+</span> and{" "}
                <span className="text-primary font-medium">Network+</span> certifications, I&apos;ve discovered 
                a genuine passion for troubleshooting, networking, and Linux systems.
              </p>
              
              <p>
                My homelab has become my playground — running Pi-hole for DNS filtering, 
                experimenting with Docker containers, and building practical networking setups. 
                I&apos;m motivated to grow into <span className="text-terminal-cyan font-medium">systems administration</span> or{" "}
                <span className="text-terminal-cyan font-medium">networking roles</span>, bringing both 
                technical skills and a customer-first mindset to every challenge.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-border">
              {[
                { label: "Certifications", value: "2" },
                { label: "Homelab Projects", value: "5+" },
                { label: "Technologies", value: "15+" },
                { label: "Years Learning", value: "1+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
