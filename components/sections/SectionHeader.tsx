"use client"

import { Terminal } from "lucide-react"

interface SectionHeaderProps {
  title: string
  description?: string
  className?: string
}

export function SectionHeader({ title, description, className = "" }: SectionHeaderProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <Terminal className="w-6 h-6 text-primary" />
        <h2 className="text-3xl font-bold">
          <span className="text-primary">$</span> {title}
        </h2>
      </div>
      {description && (
        <p className="text-muted-foreground max-w-2xl">{description}</p>
      )}
    </div>
  )
}
