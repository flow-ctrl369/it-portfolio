export interface Project {
  title: string
  description: string
  technologies: string[]
  skills: string[]
  github: string
}

export const projects: Project[] = [
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
