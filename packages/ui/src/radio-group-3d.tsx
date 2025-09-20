"use client"

import { forwardRef } from "react"
import { cn } from "./lib/utils"

interface RadioOption {
  value: string
  label: string
  description?: string
}

interface RadioGroup3DProps {
  options: RadioOption[]
  value?: string
  onChange?: (value: string) => void
  name: string
  label?: string
  className?: string
  error?: string
}

const RadioGroup3D = forwardRef<HTMLDivElement, RadioGroup3DProps>(
  ({ options, value, onChange, name, label, className, error }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-3", className)}>
        {label && <label className="block text-sm font-bold text-zinc-900 dark:text-zinc-100">{label}</label>}
        <div className="space-y-2">
          {options.map((option) => (
            <div key={option.value} className="flex items-start space-x-3">
              <div className="relative">
                <input
                  type="radio"
                  name={name}
                  value={option.value}
                  checked={value === option.value}
                  onChange={() => onChange?.(option.value)}
                  className="peer sr-only"
                />
                <div
                  className={cn(
                    // Base styles
                    "w-5 h-5 border-2 border-zinc-900 dark:border-zinc-100",
                    "bg-white dark:bg-zinc-900",
                    "cursor-pointer rounded-full",
                    "shadow-brutalist-xs",
                    "transition-all duration-150 ease-out",
                    // Hover state
                    "hover:shadow-brutalist-sm hover:translate-x-[-1px] hover:translate-y-[-1px]",
                    // Checked state
                    "peer-checked:border-red-600",
                    "peer-checked:shadow-brutalist-sm peer-checked:translate-x-[-1px] peer-checked:translate-y-[-1px]",
                    // Focus state
                    "peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-red-600 peer-focus:ring-offset-2",
                  )}
                  onClick={() => onChange?.(option.value)}
                >
                  <div
                    className={cn(
                      "w-2 h-2 bg-red-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                      "opacity-0 transition-opacity duration-150",
                      value === option.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label
                  className="text-sm font-bold text-zinc-900 dark:text-zinc-100 cursor-pointer"
                  onClick={() => onChange?.(option.value)}
                >
                  {option.label}
                </label>
                {option.description && <p className="text-sm text-zinc-600 dark:text-zinc-400">{option.description}</p>}
              </div>
            </div>
          ))}
        </div>
        {error && <p className="text-sm font-medium text-red-600">{error}</p>}
      </div>
    )
  },
)

RadioGroup3D.displayName = "RadioGroup3D"

export { RadioGroup3D }
