"use client"

import { SectionWrapper } from "@/components/sections/SectionWrapper"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { GlassCard } from "@/components/cards/GlassCard"
import { StatCard } from "@/components/cards/StatCard"
import { aboutStats } from "@/lib/data/about"

export function AboutSection() {
  return (
    <SectionWrapper id="about" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="about --me"
          description="Passionate about transitioning from hospitality to IT support and networking."
        />

        <GlassCard>
        <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
            <p>
              Before I got into IT, I spent years in roles where things broke and people needed them
              fixed fast —{" "}
              <span className="text-primary font-medium">fire sprinkler systems</span>,{" "}
              <span className="text-primary font-medium">irrigation infrastructure</span>, retail
              troubleshooting at Hunting & Fishing NZ. Every job was essentially a support role: someone
              has a problem, you diagnose it, you fix it, you explain what happened.
            </p>

            <p>
              That instinct is what pulled me toward IT support. I&apos;ve since completed the{" "}
              <span className="text-terminal-cyan font-medium">CompTIA A+</span> and{" "}
              <span className="text-terminal-cyan font-medium">Network+</span> exams and a Full Stack
              Development certification, and built out a homelab running{" "}
              <span className="text-primary font-medium">Pi-hole</span>,{" "}
              <span className="text-primary font-medium">Docker</span>, and{" "}
              <span className="text-primary font-medium">ESP32/Raspberry Pi projects</span>. Comfortable
              across Linux, basic networking, and hardware.
            </p>

            <p>
              I also use <span className="text-primary font-medium">AI tools</span>{" "} daily for
              troubleshooting, learning, and building things faster. It&apos;s become a natural part of
              how I work. I&apos;m the type to read the error message instead of skimming past it.
            </p>
        </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-border">
            {aboutStats.map((stat) => (
              <StatCard key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>
        </GlassCard>
      </div>
    </SectionWrapper>
  )
}
