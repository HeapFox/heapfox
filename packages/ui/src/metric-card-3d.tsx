"use client"

import type { ReactNode } from "react"

interface MetricCard3DProps {
  title: string
  value: string | number
  change?: string
  changeType?: "positive" | "negative" | "neutral"
  icon?: ReactNode
  description?: string
}

export function MetricCard3D({ title, value, change, changeType = "neutral", icon, description }: MetricCard3DProps) {
  const changeColor = {
    positive: "text-green-600",
    negative: "text-red-600",
    neutral: "text-gray-600",
  }[changeType]

  return (
    <div className="bg-white border-2 border-gray-900 shadow-brutalist-sm hover:shadow-brutalist-md transition-all duration-200 p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            {icon && <div className="text-gray-700">{icon}</div>}
            <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide">{title}</h3>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
          {change && (
            <div className={`text-sm font-medium ${changeColor}`}>
              {changeType === "positive" && "↗"} {changeType === "negative" && "↘"} {change}
            </div>
          )}
          {description && <p className="text-sm text-gray-500 mt-2">{description}</p>}
        </div>
      </div>
    </div>
  )
}
