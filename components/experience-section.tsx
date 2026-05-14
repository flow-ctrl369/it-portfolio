"use client"

import { motion } from "framer-motion"
import { Terminal, Briefcase, ArrowRight } from "lucide-react"
import { SectionWrapper } from "@/components/sections/SectionWrapper"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { GlassCard } from "@/components/cards/GlassCard"
import { experiences } from "@/lib/data/experience"

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          title="history --translate"
          description="Translating hospitality experience into valuable IT support competencies."
        />

        {/* Experience Card */}
        {experiences.map((exp) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <GlassCard>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
              </div>

              <div className="space-y-4">
                {exp.transferableSkills.map((item, index) => (
                  <motion.div
                    key={item.skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 p-4 rounded-lg bg-secondary/50"
                  >
                    <span className="font-medium text-foreground min-w-48">{item.skill}</span>
                    <ArrowRight className="hidden md:block w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">{item.itApplication}</span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}