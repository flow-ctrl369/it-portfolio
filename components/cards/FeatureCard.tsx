"use client"

import { ReactNode } from "react"

interface FeatureCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function FeatureCard({ children, className = "", hover = false }: FeatureCardProps) {
  return (
    <div
      className={`glass rounded-xl p-6 ${
        hover ? "group hover:border-primary/30 transition-colors" : ""
      } ${className}`}
    >
      {children}
    </div>
  )
}
