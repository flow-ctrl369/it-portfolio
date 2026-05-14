"use client"

import { motion } from "framer-motion"
import { Terminal, Github, ExternalLink } from "lucide-react"
import { SectionWrapper } from "@/components/sections/SectionWrapper"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { FeatureCard } from "@/components/cards/FeatureCard"
import { projects } from "@/lib/data/projects"

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="ls ~/projects"
          description="Homelab projects demonstrating practical IT and networking skills through hands-on learning."
        />

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <FeatureCard hover className="overflow-hidden">
                {/* Project Video Preview */}
                <div className="w-full aspect-video overflow-hidden bg-terminal-bg border-b border-border">
                  {project.video ? (
                    <video
                      src={project.video}
                      className="w-full h-full object-cover object-center"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-secondary to-terminal-bg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Terminal className="w-8 h-8 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground font-mono">project_{index + 1}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono bg-secondary rounded border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Skills Demonstrated */}
                  <div className="text-xs text-muted-foreground mb-4">
                    <span className="text-primary font-medium">Skills:</span> {project.skills.join(" • ")}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Details</span>
                    </a>
                  </div>
                </div>
              </FeatureCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
