export interface Certification {
  name: string
  issuer: string
  date: string
  status: string
  description: string
  skills: string[]
}

export const certifications: Certification[] = [
  {
    name: "CompTIA A+",
    issuer: "CompTIA",
    date: "Completed 2025",
    status: "Certified",
    description:
      "Foundation-level certification covering hardware, software, networking, and troubleshooting fundamentals.",
    skills: ["Hardware", "Software Troubleshooting", "Networking Basics", "Security", "Operational Procedures"],
  },
  {
    name: "CompTIA Network+",
    issuer: "CompTIA",
    date: "Completed 2024",
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
  {
    name: "Full Stack Web Development Security+",
    issuer: "MRHQNZ",
    date: "Completed 2025",
    status: "Certified",
    description: "Validates core competency to an ability to perform full stack operations and following best practices in web development.",
    skills: [ "TypeScript",  "Next.js", "Python", "Node.js", "Express", "MySQL", "Authentication", "Authorization",  "Security Best Practices" ],
  },  
]
