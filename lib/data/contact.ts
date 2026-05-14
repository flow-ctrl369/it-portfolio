import type { ComponentType, SVGProps } from "react"
import { Mail, Linkedin, Github } from "lucide-react"

export interface ContactLink {
  name: string
  href: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  description: string
}

export const contactEmail = "poutama.mtech@gmail.com"
export const resumeLink = "/Poutama_CV.pdf"

export const contactLinks: ContactLink[] = [
  {
    name: "Email",
    href: `mailto:${contactEmail}`,
    icon: Mail,
    description: contactEmail,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/poutama-m/",
    icon: Linkedin,
    description: "Connect professionally",
  },
]

export const socialLinks: ContactLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/flow-ctrl369",
    icon: Github,
    description: "View my projects",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/poutama-m/",
    icon: Linkedin,
    description: "Connect professionally",
  },
  {
    name: "Email",
    href: `mailto:${contactEmail}`,
    icon: Mail,
    description: contactEmail,
  },
]
