"use client"

import type React from "react"

import { forwardRef, useState } from "react"
import { cn } from "./lib/utils"

interface TextInputLabeledProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  helperText?: string
  required?: boolean
}

const TextInputLabeled = forwardRef<HTMLInputElement, TextInputLabeledProps>(
  ({ className, label, error, helperText, required, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false)

    return (
      <div className="space-y-2">
        <label className="block text-sm font-bold text-zinc-900 dark:text-zinc-100">
          {label}
          {required && <span className="text-red-600 ml-1">*</span>}
        </label>
        <input
          ref={ref}
          className={cn(
            // Base styles
            "w-full px-4 py-3 text-sm font-medium",
            "bg-white dark:bg-zinc-900",
            "border-2 border-zinc-900 dark:border-zinc-100",
            "text-zinc-900 dark:text-zinc-100",
            "placeholder:text-zinc-500 dark:placeholder:text-zinc-400",
            // 3D effect
            "shadow-brutalist-sm",
            "transition-all duration-150 ease-out",
            // Focus state
            "focus:outline-none focus:shadow-brutalist-md focus:translate-x-[-2px] focus:translate-y-[-2px]",
            // Error state
            error && "border-red-600 shadow-brutalist-error",
            // Disabled state
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none",
            className,
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {error && <p className="text-sm font-medium text-red-600">{error}</p>}
        {helperText && !error && <p className="text-sm text-zinc-600 dark:text-zinc-400">{helperText}</p>}
      </div>
    )
  },
)

TextInputLabeled.displayName = "TextInputLabeled"

export { TextInputLabeled }
