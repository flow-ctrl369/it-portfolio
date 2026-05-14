"use client"

import { motion } from "framer-motion"
import { Terminal, Award, Clock } from "lucide-react"

const certifications = [
  {
    name: "CompTIA A+",
    issuer: "CompTIA",
    date: "2024",
    status: "Certified",
    description:
      "Foundation-level certification covering hardware, software, networking, and troubleshooting fundamentals.",
    skills: ["Hardware", "Software Troubleshooting", "Networking Basics", "Security", "Operational Procedures"],
  },
  {
    name: "CompTIA Network+",
    issuer: "CompTIA",
    date: "2024",
    status: "Certified",
    description:
      "Validates technical skills needed to design, configure, manage, and troubleshoot any wired and wireless network.",
    skills: ["Network Architecture", "Network Security", "Network Operations", "Troubleshooting", "Industry Standards"],
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "In Progress",
    status: "Studying",
    description: "Validates core security skills necessary to perform core security functions and pursue an IT security career.",
    skills: ["Threats & Vulnerabilities", "Risk Management", "Cryptography", "Identity Management"],
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-4 bg-secondary/30">
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
              <span className="text-primary">$</span> certifications --verified
            </h2>
          </div>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Industry-recognized certifications validating IT support and networking competencies.
          </p>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`glass rounded-xl p-6 ${
                  cert.status === "Studying" ? "opacity-75" : ""
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      cert.status === "Certified"
                        ? "bg-primary/20 text-primary"
                        : "bg-terminal-yellow/20 text-terminal-yellow"
                    }`}
                  >
                    {cert.status}
                  </span>
                </div>

                {/* Cert Info */}
                <h3 className="text-xl font-semibold mb-1">{cert.name}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <span>{cert.issuer}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <p className="text-sm text-foreground/80 mb-4 leading-relaxed">{cert.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs bg-secondary rounded border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
