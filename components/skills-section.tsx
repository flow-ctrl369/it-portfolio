"use client"

import { motion } from "framer-motion"
import { Monitor, Network, Cpu, Terminal, Server, Wrench, Headset } from "lucide-react"

const skillCategories = [
  {
    title: "Operating Systems",
    icon: Monitor,
    skills: [
      { name: "Linux (Ubuntu/Debian)", level: 75 },
      { name: "Windows 10/11", level: 80 },
      { name: "Windows Server", level: 45 },
      { name: "Raspberry Pi OS", level: 85 },
    ],
  },
  {
    title: "Networking",
    icon: Network,
    skills: [
      { name: "TCP/IP", level: 80 },
      { name: "DNS/DHCP", level: 85 },
      { name: "Subnetting", level: 70 },
      { name: "VLANs", level: 50 },
    ],
  },
  {
    title: "Hardware",
    icon: Cpu,
    skills: [
      { name: "PC Building", level: 90 },
      { name: "Troubleshooting", level: 85 },
      { name: "Peripherals", level: 90 },
      { name: "Mobile Devices", level: 75 },
    ],
  },
  {
    title: "Linux & CLI",
    icon: Terminal,
    skills: [
      { name: "Bash Scripting", level: 60 },
      { name: "SSH Administration", level: 80 },
      { name: "Package Management", level: 75 },
      { name: "File Systems", level: 70 },
    ],
  },
  {
    title: "Virtualization",
    icon: Server,
    skills: [
      { name: "Docker", level: 65 },
      { name: "VirtualBox", level: 75 },
      { name: "VMware", level: 50 },
      { name: "Containers", level: 60 },
    ],
  },
  {
    title: "Troubleshooting",
    icon: Wrench,
    skills: [
      { name: "Network Issues", level: 80 },
      { name: "Hardware Diagnosis", level: 85 },
      { name: "Software Problems", level: 85 },
      { name: "Documentation", level: 75 },
    ],
  },
]

const softSkills = [
  { name: "Customer Communication", icon: Headset },
  { name: "Problem Solving", icon: Wrench },
  { name: "Team Collaboration", icon: Server },
  { name: "Time Management", icon: Monitor },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
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
              <span className="text-primary">$</span> skills --list --all
            </h2>
          </div>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Technical competencies developed through certifications, homelab projects, and hands-on learning.
          </p>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                className="glass rounded-xl p-6"
              >
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
        </motion.div>
      </div>
    </section>
  )
}
