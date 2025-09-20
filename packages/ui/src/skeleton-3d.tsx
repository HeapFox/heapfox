"use client"

import type { ReactNode } from "react"

interface Skeleton3DProps {
  variant?: "text" | "circular" | "rectangular"
  className?: string
}

export function Skeleton3D({ variant = "text", className = "" }: Skeleton3DProps) {
  const baseClasses = "bg-gray-200 border-2 border-gray-300 animate-pulse"

  const variantClasses = {
    text: "h-4 w-full",
    circular: "h-12 w-12 rounded-full",
    rectangular: "h-24 w-full",
  }

  return <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} />
}

interface SkeletonGroupProps {
  children: ReactNode
  className?: string
}

export function SkeletonGroup({ children, className = "" }: SkeletonGroupProps) {
  return <div className={`space-y-3 ${className}`}>{children}</div>
}
