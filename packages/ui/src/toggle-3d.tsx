"use client"

import { cn } from "./lib/utils"
import { useState } from "react"

interface Toggle3DProps {
  label: string
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  className?: string
}

export function Toggle3D({ label, defaultChecked = false, onChange, className }: Toggle3DProps) {
  const [checked, setChecked] = useState(defaultChecked)

  const handleToggle = () => {
    const newChecked = !checked
    setChecked(newChecked)
    onChange?.(newChecked)
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <button
        onClick={handleToggle}
        className={cn(
          "relative w-12 h-6 border-2 transition-all duration-200 ease-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
          checked
            ? "bg-primary border-primary shadow-brutal-sm"
            : "bg-background border-zinc-600 hover:shadow-brutal-sm hover:-translate-y-0.5",
        )}
        aria-pressed={checked}
        aria-label={label}
      >
        <div
          className={cn(
            "absolute top-0.5 w-4 h-4 bg-background border border-zinc-600 transition-all duration-200 ease-out",
            checked ? "left-6 bg-primary-foreground" : "left-0.5",
          )}
        />
      </button>
      <span className="text-sm font-medium text-foreground">{label}</span>
    </div>
  )
}
