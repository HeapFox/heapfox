"use client"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  color?: "red" | "yellow" | "zinc"
}

export function LoadingSpinner({ size = "md", color = "red" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  const colorClasses = {
    red: "border-red-600",
    yellow: "border-yellow-500",
    zinc: "border-zinc-600",
  }

  return (
    <div
      className={`
      ${sizeClasses[size]} 
      border-2 ${colorClasses[color]} border-t-transparent 
      animate-spin
    `}
    />
  )
}

export function LoadingSkeleton({ className = "" }: { className?: string }) {
  return <div className={`bg-zinc-200 border-2 border-zinc-300 animate-pulse ${className}`} />
}

export function LoadingCard() {
  return (
    <div className="bg-white border-2 border-zinc-900 shadow-brutalist-md p-6 space-y-4">
      <LoadingSkeleton className="h-6 w-3/4" />
      <LoadingSkeleton className="h-4 w-full" />
      <LoadingSkeleton className="h-4 w-2/3" />
      <div className="flex gap-2">
        <LoadingSkeleton className="h-8 w-20" />
        <LoadingSkeleton className="h-8 w-16" />
      </div>
    </div>
  )
}
