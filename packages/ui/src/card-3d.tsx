import { cn } from "./lib/utils"
import type { ReactNode } from "react"

interface Card3DProps {
  title?: string
  description?: string
  metric?: string
  label?: string
  className?: string
  children?: ReactNode
}

export function Card3D({ title, description, metric, label, className, children }: Card3DProps) {
  return (
    <div
      className={cn(
        "group relative bg-card border-2 border-zinc-600 p-6",
        "transition-all duration-200 ease-out",
        "hover:shadow-brutal-lg hover:-translate-y-1",
        "active:shadow-brutal-sm active:translate-y-0",
        "cursor-pointer",
        className,
      )}
    >
      <div className="space-y-4">
        {title && <h4 className="text-lg font-bold text-card-foreground">{title}</h4>}
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
        {metric && (
          <div className="pt-2 border-t border-zinc-300">
            <div className="text-2xl font-bold text-primary">{metric}</div>
            {label && <div className="text-xs text-muted-foreground uppercase tracking-wide">{label}</div>}
          </div>
        )}
        {children}
      </div>
      <div className="absolute top-0 right-0 w-3 h-3 bg-accent transition-colors duration-200 group-hover:bg-primary" />
    </div>
  )
}
