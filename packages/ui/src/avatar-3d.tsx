"use client"

interface Avatar3DProps {
  src?: string
  name: string
  size?: "sm" | "md" | "lg" | "xl"
  status?: "online" | "offline" | "busy" | "away"
  className?: string
}

const sizeClasses = {
  sm: "h-8 w-8 text-xs",
  md: "h-12 w-12 text-sm",
  lg: "h-16 w-16 text-base",
  xl: "h-20 w-20 text-lg",
}

const statusColors = {
  online: "bg-green-500",
  offline: "bg-gray-400",
  busy: "bg-red-500",
  away: "bg-yellow-500",
}

export function Avatar3D({ src, name, size = "md", status, className = "" }: Avatar3DProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)

  return (
    <div className={`relative inline-block ${className}`}>
      <div
        className={`${sizeClasses[size]} border-2 border-gray-900 bg-gray-200 flex items-center justify-center font-bold text-gray-900 transition-all duration-200 hover:shadow-brutalist-sm overflow-hidden`}
      >
        {src ? (
          <img src={src || "/placeholder.svg"} alt={name} className="h-full w-full object-cover" />
        ) : (
          <span>{initials}</span>
        )}
      </div>

      {status && (
        <div
          className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 border-2 border-white ${statusColors[status]} rounded-full`}
        />
      )}
    </div>
  )
}
