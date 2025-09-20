import { cn } from "./lib/utils"

interface ProgressBar3DProps {
  value: number
  label?: string
  variant?: "default" | "success" | "warning" | "destructive"
  className?: string
}

export function ProgressBar3D({ value, label, variant = "default", className }: ProgressBar3DProps) {
  const variantStyles = {
    default: "bg-primary",
    success: "bg-green-600",
    warning: "bg-yellow-600",
    destructive: "bg-destructive",
  }

  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-foreground">{label}</span>
          <span className="text-sm text-muted-foreground">{value}%</span>
        </div>
      )}
      <div className="w-full h-3 bg-background border-2 border-zinc-600 shadow-brutal-sm">
        <div
          className={cn("h-full transition-all duration-500 ease-out", variantStyles[variant])}
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
    </div>
  )
}
