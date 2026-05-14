"use client"

import { motion } from "framer-motion"
import { Terminal, Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Raspberry Pi Pi-hole DNS Server",
    description:
      "Network-wide ad blocking and DNS filtering using Pi-hole on a Raspberry Pi. Configured custom blocklists, upstream DNS providers, and DHCP for the entire home network.",
    technologies: ["Raspberry Pi", "Pi-hole", "DNS", "DHCP", "Linux"],
    skills: ["Network Administration", "DNS Configuration", "Linux CLI"],
    github: "#",
  },
  {
    title: "Dockerized Next.js Portfolio",
    description:
      "This portfolio website, containerized with Docker for consistent deployment. Demonstrates modern web development practices alongside infrastructure skills.",
    technologies: ["Docker", "Next.js", "TypeScript", "Tailwind CSS"],
    skills: ["Containerization", "Web Development", "DevOps Basics"],
    github: "#",
  },
  {
    title: "Linux Home Server",
    description:
      "Repurposed hardware running Ubuntu Server for file sharing, media streaming, and various self-hosted services. Managed through SSH with automated backups.",
    technologies: ["Ubuntu Server", "SSH", "Samba", "Bash"],
    skills: ["Server Administration", "Remote Management", "Automation"],
    github: "#",
  },
  {
    title: "Networking Practice Lab",
    description:
      "Virtual networking environment using VirtualBox for practicing subnetting, routing, and network troubleshooting. Simulates enterprise network scenarios.",
    technologies: ["VirtualBox", "pfSense", "Windows Server", "Wireshark"],
    skills: ["Network Design", "Troubleshooting", "Virtualization"],
    github: "#",
  },
  {
    title: "SSH Remote Administration Setup",
    description:
      "Secure SSH configuration with key-based authentication, fail2ban protection, and custom port settings. Enables secure remote management of all homelab devices.",
    technologies: ["OpenSSH", "fail2ban", "UFW", "Linux"],
    skills: ["Security Hardening", "Access Management", "Automation"],
    github: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
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
              <span className="text-primary">$</span> ls ~/projects
            </h2>
          </div>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Homelab projects demonstrating practical IT and networking skills through hands-on learning.
          </p>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass rounded-xl overflow-hidden group hover:border-primary/30 transition-colors"
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-secondary to-terminal-bg flex items-center justify-center border-b border-border">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Terminal className="w-8 h-8 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">project_{index + 1}</span>
                  </div>
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
