"use client"

interface StatusIndicator3DProps {
  status: "online" | "offline" | "busy" | "away" | "error" | "success" | "warning"
  label?: string
  size?: "sm" | "md" | "lg"
}

export function StatusIndicator3D({ status, label, size = "md" }: StatusIndicator3DProps) {
  const statusColors = {
    online: "bg-green-500 border-green-700",
    offline: "bg-gray-400 border-gray-600",
    busy: "bg-red-500 border-red-700",
    away: "bg-yellow-500 border-yellow-700",
    error: "bg-red-600 border-red-800",
    success: "bg-green-600 border-green-800",
    warning: "bg-amber-500 border-amber-700",
  }

  const sizes = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  }

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  }

  return (
    <div className="flex items-center gap-2">
      <div className={`${sizes[size]} ${statusColors[status]} border-2 shadow-brutalist-xs`} />
      {label && <span className={`font-medium text-gray-900 ${textSizes[size]}`}>{label}</span>}
    </div>
  )
}
