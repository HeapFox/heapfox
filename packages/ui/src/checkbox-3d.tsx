"use client"

import type React from "react"

import { forwardRef } from "react"
import { cn } from "./lib/utils"
import { Check } from "lucide-react"

interface Checkbox3DProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  description?: string
}

const Checkbox3D = forwardRef<HTMLInputElement, Checkbox3DProps>(({ className, label, description, ...props }, ref) => {
  return (
    <div className="flex items-start space-x-3">
      <div className="relative">
        <input ref={ref} type="checkbox" className={cn("peer sr-only", className)} {...props} />
        <div
          className={cn(
            // Base styles
            "w-5 h-5 border-2 border-zinc-900 dark:border-zinc-100",
            "bg-white dark:bg-zinc-900",
            "cursor-pointer",
            "shadow-brutalist-xs",
            "transition-all duration-150 ease-out",
            "relative flex items-center justify-center", // Added flex centering for checkmark
            // Hover state
            "hover:shadow-brutalist-sm hover:translate-x-[-1px] hover:translate-y-[-1px]",
            // Checked state
            "peer-checked:bg-white peer-checked:border-red-600",
            "peer-checked:shadow-brutalist-sm peer-checked:translate-x-[-1px] peer-checked:translate-y-[-1px]",
            // Focus state
            "peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-red-600 peer-focus:ring-offset-2",
            // Disabled state
            "peer-disabled:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:shadow-none",
          )}
          onClick={() => {
            if (!props.disabled && ref && "current" in ref && ref.current) {
              ref.current.checked = !ref.current.checked
              const event = new Event("change", { bubbles: true })
              ref.current.dispatchEvent(event)
            }
          }}
        >
          <Check
            className={cn("w-3 h-3 text-red-600", "opacity-0 peer-checked:opacity-100 transition-opacity duration-150")}
          />
        </div>
      </div>
      {(label || description) && (
        <div className="space-y-1">
          {label && (
            <label
              htmlFor={props.id}
              className="text-sm font-bold text-zinc-900 dark:text-zinc-100 cursor-pointer"
              onClick={() => {
                if (!props.disabled && ref && "current" in ref && ref.current) {
                  ref.current.click()
                }
              }}
            >
              {label}
            </label>
          )}
          {description && <p className="text-sm text-zinc-600 dark:text-zinc-400">{description}</p>}
        </div>
      )}
    </div>
  )
})

Checkbox3D.displayName = "Checkbox3D"

export { Checkbox3D }
