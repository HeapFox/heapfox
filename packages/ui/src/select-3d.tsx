"use client"

import { forwardRef, useState } from "react"
import { cn } from "./lib/utils"
import { ChevronDown, Check } from "lucide-react"

interface SelectOption {
  value: string
  label: string
}

interface Select3DProps {
  options: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  label?: string
  className?: string
  error?: string
  disabled?: boolean
}

const Select3D = forwardRef<HTMLDivElement, Select3DProps>(
  ({ options, value, onChange, placeholder = "Select an option", label, className, error, disabled }, ref) => {
    const [isOpen, setIsOpen] = useState(false)
    const selectedOption = options.find((option) => option.value === value)

    const handleSelect = (optionValue: string) => {
      onChange?.(optionValue)
      setIsOpen(false)
    }

    return (
      <div ref={ref} className={cn("relative space-y-2", className)}>
        {label && <label className="block text-sm font-bold text-zinc-900 dark:text-zinc-100">{label}</label>}
        <div className="relative">
          <button
            type="button"
            onClick={() => !disabled && setIsOpen(!isOpen)}
            disabled={disabled}
            className={cn(
              // Base styles
              "w-full px-4 py-3 text-sm font-medium text-left",
              "bg-white dark:bg-zinc-900",
              "border-2 border-zinc-900 dark:border-zinc-100",
              "text-zinc-900 dark:text-zinc-100",
              "flex items-center justify-between",
              // 3D effect
              "shadow-brutalist-sm",
              "transition-all duration-150 ease-out",
              // Focus state
              "focus:outline-none focus:shadow-brutalist-md focus:translate-x-[-2px] focus:translate-y-[-2px]",
              // Error state
              error && "border-red-600 shadow-brutalist-error",
              // Disabled state
              "disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none",
              // Open state
              isOpen && "shadow-brutalist-md translate-x-[-2px] translate-y-[-2px]",
            )}
          >
            <span
              className={cn(selectedOption ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-500 dark:text-zinc-400")}
            >
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <ChevronDown className={cn("w-4 h-4 transition-transform duration-150", isOpen && "rotate-180")} />
          </button>

          {isOpen && (
            <div
              className={cn(
                "absolute top-full left-0 right-0 z-50 mt-1",
                "bg-white dark:bg-zinc-900",
                "border-2 border-zinc-900 dark:border-zinc-100",
                "shadow-brutalist-lg",
                "max-h-60 overflow-auto",
              )}
            >
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={cn(
                    "w-full px-4 py-3 text-sm font-medium text-left",
                    "hover:bg-zinc-100 dark:hover:bg-zinc-800",
                    "flex items-center justify-between",
                    "transition-colors duration-150",
                    value === option.value && "bg-red-50 dark:bg-red-900/20",
                  )}
                >
                  <span>{option.label}</span>
                  {value === option.value && <Check className="w-4 h-4 text-red-600" />}
                </button>
              ))}
            </div>
          )}
        </div>
        {error && <p className="text-sm font-medium text-red-600">{error}</p>}
      </div>
    )
  },
)

Select3D.displayName = "Select3D"

export { Select3D }
