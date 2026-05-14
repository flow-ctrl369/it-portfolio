"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/sections/SectionWrapper"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { FeatureCard } from "@/components/cards/FeatureCard"
import { skillCategories, softSkills } from "@/lib/data/skills"

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="skills --list --all"
          description="Technical competencies developed through certifications, homelab projects, and hands-on learning."
        />

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
            >
              <FeatureCard>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-foreground/80">{skill.name}</span>
                        <span className="text-muted-foreground font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-primary to-terminal-cyan rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </FeatureCard>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Transferable Skills from Hospitality</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border"
              >
                <skill.icon className="w-4 h-4 text-primary" />
                <span className="text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
