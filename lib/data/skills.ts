import type { ComponentType, SVGProps } from "react"
import { Monitor, Network, Cpu, Terminal, Server, Wrench, Headset } from "lucide-react"

export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  title: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  skills: Skill[]
}

export interface SoftSkill {
  name: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

export const skillCategories: SkillCategory[] = [
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

export const softSkills: SoftSkill[] = [
  { name: "Customer Communication", icon: Headset },
  { name: "Problem Solving", icon: Wrench },
  { name: "Team Collaboration", icon: Server },
  { name: "Time Management", icon: Monitor },
]
