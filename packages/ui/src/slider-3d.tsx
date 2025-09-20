"use client"

import type React from "react"

import { forwardRef, useState } from "react"
import { cn } from "./lib/utils"

interface Slider3DProps {
  value?: number
  onChange?: (value: number) => void
  min?: number
  max?: number
  step?: number
  label?: string
  className?: string
  showValue?: boolean
  disabled?: boolean
}

const Slider3D = forwardRef<HTMLDivElement, Slider3DProps>(
  ({ value = 50, onChange, min = 0, max = 100, step = 1, label, className, showValue = true, disabled }, ref) => {
    const [isDragging, setIsDragging] = useState(false)
    const percentage = ((value - min) / (max - min)) * 100

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value)
      onChange?.(newValue)
    }

    return (
      <div ref={ref} className={cn("space-y-3", className)}>
        {(label || showValue) && (
          <div className="flex items-center justify-between">
            {label && <label className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{label}</label>}
            {showValue && <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{value}</span>}
          </div>
        )}
        <div className="relative">
          {/* Track */}
          <div
            className={cn(
              "h-2 bg-zinc-300 dark:bg-zinc-700",
              "border border-zinc-900 dark:border-zinc-100",
              "shadow-brutalist-xs",
            )}
          >
            {/* Progress */}
            <div className="h-full bg-red-600 transition-all duration-150" style={{ width: `${percentage}%` }} />
          </div>

          {/* Slider Input */}
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={handleChange}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            disabled={disabled}
            className={cn("absolute inset-0 w-full h-full opacity-0 cursor-pointer", "disabled:cursor-not-allowed")}
          />

          {/* Thumb */}
          <div
            className={cn(
              "absolute top-1/2 w-5 h-5 -mt-2.5",
              "bg-white dark:bg-zinc-900",
              "border-2 border-zinc-900 dark:border-zinc-100",
              "shadow-brutalist-sm",
              "transition-all duration-150 ease-out",
              "pointer-events-none",
              isDragging && "shadow-brutalist-md translate-x-[-1px] translate-y-[-1px]",
              disabled && "opacity-50",
            )}
            style={{ left: `calc(${percentage}% - 10px)` }}
          />
        </div>
      </div>
    )
  },
)

Slider3D.displayName = "Slider3D"

export { Slider3D }
