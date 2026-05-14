"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { terminalContent } from "@/lib/data/hero"
import { resumeLink } from "@/lib/data/contact"
import { FileText } from "lucide-react"

export function HeroSection() {
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []

    terminalContent.forEach((line, index) => {
      const timer = setTimeout(() => {
        setVisibleLines(index + 1)
      }, line.delay)
      timers.push(timer)
    })

    return () => timers.forEach(clearTimeout)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Subtle glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-5xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <div className="rounded-lg overflow-hidden border border-terminal-border bg-terminal-bg shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-terminal-border">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-4 text-sm text-muted-foreground font-mono">terminal@personalportfolio:~</span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm min-h-[320px]">
              {terminalContent.slice(0, visibleLines).map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mb-1 ${line.type === "command" ? "text-terminal-green" : "text-foreground/80 pl-4"}`}
                >
                  {line.content}
                </motion.div>
              ))}
              <span className={`inline-block w-2 h-4 bg-terminal-green ${showCursor ? "opacity-100" : "opacity-0"}`} />
            </div>
          </div>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 lg:order-2 text-center lg:text-left"
        >
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto lg:mx-0 mb-6 rounded-full bg-secondary border-2 border-primary/30 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-terminal-cyan/20 flex items-center justify-center">
              <span className="text-4xl text-primary font-mono">&gt;_</span>
            </div>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">
            <span className="text-primary">Poutama</span> <span className="text-terminal-cyan">(Pou)</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            29 · Auckland, New Zealand · IT Support & Networking Technician
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
            >
              Contact Me
            </a>
            <a
              href={resumeLink}
              download="Poutama_CV.pdf"
              className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-colors"
            >
              Download CV

            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
