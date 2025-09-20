import type React from "react"
import { cn } from "./lib/utils"
import { forwardRef } from "react"

interface Input3DProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export const Input3D = forwardRef<HTMLInputElement, Input3DProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full bg-background px-4 py-2 text-sm",
        "border-2 border-zinc-600 text-foreground",
        "placeholder:text-muted-foreground",
        "transition-all duration-200 ease-out",
        "focus-visible:outline-none focus-visible:border-primary",
        "focus-visible:shadow-brutal-md focus-visible:-translate-y-0.5",
        "hover:shadow-brutal-sm hover:-translate-y-0.5",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Input3D.displayName = "Input3D"
