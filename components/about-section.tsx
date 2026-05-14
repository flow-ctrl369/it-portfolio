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
              After years in the <span className="text-primary font-medium">hospitality industry</span>,
              I developed strong communication skills, learned to thrive under pressure, and mastered
              the art of customer service. These experiences taught me how to troubleshoot problems
              on the fly and work effectively in fast-paced team environments.
            </p>

            <p>
              Now, I&apos;m channeling that same dedication into my <span className="text-terminal-cyan font-medium">transition to IT</span>.
              Through hands-on learning and earning my <span className="text-primary font-medium">CompTIA A+</span> and{" "}
              <span className="text-primary font-medium">Network+</span> certifications, I&apos;ve discovered
              a genuine passion for troubleshooting, networking, and Linux systems.
            </p>

            <p>
              My homelab has become my playground lately.. running Pi-hole for DNS filtering,
              experimenting with Docker containers, and building practical networking setups.
              I&apos;m keen to grow into a <span className="text-terminal-cyan font-medium">systems administration</span> or{" "}
              <span className="text-terminal-cyan font-medium">networking role</span>, bringing both
              technical skills and a customer-first mindset to every challenge.
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
