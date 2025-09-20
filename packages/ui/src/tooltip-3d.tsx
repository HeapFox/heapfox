"use client"

import { useState, useRef, type ReactNode } from "react"

interface Tooltip3DProps {
  content: string
  children: ReactNode
  position?: "top" | "bottom" | "left" | "right"
  className?: string
}

export function Tooltip3D({ content, children, position = "top", className = "" }: Tooltip3DProps) {
  const [isVisible, setIsVisible] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)

  const showTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsVisible(true)
  }

  const hideTooltip = () => {
    timeoutRef.current = setTimeout(() => setIsVisible(false), 100)
  }

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
  }

  const arrowClasses = {
    top: "top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900",
    bottom:
      "bottom-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-gray-900",
    left: "left-full top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-gray-900",
    right:
      "right-full top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent border-r-gray-900",
  }

  return (
    <div className={`relative inline-block ${className}`} onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}

      {isVisible && (
        <div className={`absolute z-50 ${positionClasses[position]}`}>
          <div className="px-3 py-2 text-sm text-white bg-gray-900 border-2 border-gray-900 whitespace-nowrap max-w-xs">
            {content}
          </div>
          <div className={`absolute ${arrowClasses[position]}`} />
        </div>
      )}
    </div>
  )
}
