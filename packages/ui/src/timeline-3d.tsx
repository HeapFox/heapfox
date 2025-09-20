"use client"

import type { ReactNode } from "react"

interface TimelineItem {
  id: string
  title: string
  description?: string
  timestamp: string
  status: "completed" | "current" | "upcoming"
  icon?: ReactNode
}

interface Timeline3DProps {
  items: TimelineItem[]
  className?: string
}

export function Timeline3D({ items, className = "" }: Timeline3DProps) {
  const getStatusStyles = (status: TimelineItem["status"]) => {
    switch (status) {
      case "completed":
        return {
          dot: "bg-green-500 border-green-600",
          line: "bg-green-300",
          content: "text-gray-900",
        }
      case "current":
        return {
          dot: "bg-red-600 border-red-700",
          line: "bg-gray-300",
          content: "text-gray-900 font-medium",
        }
      case "upcoming":
        return {
          dot: "bg-gray-300 border-gray-400",
          line: "bg-gray-200",
          content: "text-gray-500",
        }
    }
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {items.map((item, index) => {
        const styles = getStatusStyles(item.status)
        const isLast = index === items.length - 1

        return (
          <div key={item.id} className="relative flex items-start">
            {/* Timeline line */}
            {!isLast && <div className={`absolute left-6 top-12 w-0.5 h-6 ${styles.line}`} />}

            {/* Timeline dot */}
            <div
              className={`flex-shrink-0 w-12 h-12 border-2 ${styles.dot} flex items-center justify-center text-white font-bold`}
            >
              {item.icon || index + 1}
            </div>

            {/* Content */}
            <div className="ml-4 flex-1">
              <div className={`${styles.content}`}>
                <h4 className="font-bold text-lg">{item.title}</h4>
                {item.description && <p className="text-sm mt-1">{item.description}</p>}
                <span className="text-xs text-gray-500 mt-2 block">{item.timestamp}</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
