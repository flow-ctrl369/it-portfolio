"use client"

import { motion } from "framer-motion"
import { Terminal, Award, Clock } from "lucide-react"
import { SectionWrapper } from "@/components/sections/SectionWrapper"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { FeatureCard } from "@/components/cards/FeatureCard"
import { certifications } from "@/lib/data/certifications"

export function CertificationsSection() {
  return (
    <SectionWrapper id="certifications" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          title="certifications --verified"
          description="Industry-recognized certifications validating IT support and networking competencies."
        />

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <FeatureCard className={cert.status === "Studying" ? "opacity-75" : ""}>
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
              </FeatureCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
