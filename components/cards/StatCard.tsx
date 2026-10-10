"use client"

interface StatCardProps {
  label: string
  value: string
  className?: string
}

export function StatCard({ label, value, className = "" }: StatCardProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-2xl font-bold text-primary">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}
