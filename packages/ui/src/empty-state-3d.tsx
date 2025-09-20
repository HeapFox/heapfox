"use client"

import type { ReactNode } from "react"

interface EmptyState3DProps {
  title: string
  description?: string
  icon?: ReactNode
  action?: ReactNode
  className?: string
}

export function EmptyState3D({ title, description, icon, action, className = "" }: EmptyState3DProps) {
  return (
    <div className={`text-center py-12 px-6 border-2 border-gray-300 bg-gray-50 ${className}`}>
      {icon && <div className="text-4xl mb-4 opacity-50">{icon}</div>}

      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>

      {description && <p className="text-gray-600 mb-6 max-w-sm mx-auto">{description}</p>}

      {action && <div>{action}</div>}
    </div>
  )
}
