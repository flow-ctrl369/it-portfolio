export type TerminalLine = {
  type: "command" | "output"
  content: string
  delay: number
}

export const terminalContent: TerminalLine[] = [
  { type: "command", content: "$ whoami", delay: 0 },
  { type: "output", content: "Poutama (Pou) — 29, Auckland, NZ", delay: 800 },
  { type: "command", content: "$ certifications --list", delay: 1600 },
  { type: "output", content: "CompTIA A+", delay: 2200 },
  { type: "output", content: "CompTIA Network+", delay: 2600 },
  { type: "output", content: "Full Stack Web Development MRHQ", delay: 2800 },
  { type: "command", content: "$ skills --current", delay: 3400 },
  { type: "output", content: "Linux | Networking | Troubleshooting | Docker", delay: 4000 },
  { type: "output", content: "Pi-hole DNS | SSH | Bash | TCP/IP | DHCP | DNS", delay: 4400 },
  { type: "command", content: "$ learning --in-progress", delay: 5200 },
  { type: "output", content: "Active Directory | Wireshark | VLANs | Windows Server | Cybersecurity", delay: 5800 },
]
