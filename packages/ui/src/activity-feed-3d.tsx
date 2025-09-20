"use client"

import type { ReactNode } from "react"

interface ActivityItem {
  id: string
  title: string
  description: string
  timestamp: string
  icon?: ReactNode
  type?: "info" | "success" | "warning" | "error"
}

interface ActivityFeed3DProps {
  items: ActivityItem[]
  maxItems?: number
}

export function ActivityFeed3D({ items, maxItems = 10 }: ActivityFeed3DProps) {
  const displayItems = items.slice(0, maxItems)

  const typeColors = {
    info: "border-blue-500 bg-blue-50",
    success: "border-green-500 bg-green-50",
    warning: "border-yellow-500 bg-yellow-50",
    error: "border-red-500 bg-red-50",
  }

  return (
    <div className="bg-white border-2 border-gray-900 shadow-brutalist-sm">
      <div className="p-4 border-b-2 border-gray-900 bg-gray-100">
        <h3 className="text-lg font-bold text-gray-900">Recent Activity</h3>
      </div>
      <div className="divide-y-2 divide-gray-900 max-h-96 overflow-y-auto">
        {displayItems.map((item) => (
          <div key={item.id} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-start gap-3">
              {item.icon && (
                <div className={`p-2 border-2 border-gray-900 ${typeColors[item.type || "info"]}`}>{item.icon}</div>
              )}
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                <time className="text-xs text-gray-500 font-medium">{item.timestamp}</time>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
