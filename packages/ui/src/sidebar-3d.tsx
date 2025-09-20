"use client"

import { useState, type ReactNode } from "react"
import { ChevronDown, ChevronRight, Menu } from "lucide-react"

interface SidebarItem {
  id: string
  label: string
  icon?: ReactNode
  active?: boolean
  children?: SidebarItem[]
}

interface Sidebar3DProps {
  items: SidebarItem[]
  collapsed?: boolean
  onToggle?: () => void
  className?: string
}

export function Sidebar3D({ items, collapsed = false, onToggle, className = "" }: Sidebar3DProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  const toggleExpanded = (itemId: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId)
    } else {
      newExpanded.add(itemId)
    }
    setExpandedItems(newExpanded)
  }

  const renderItem = (item: SidebarItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0
    const isExpanded = expandedItems.has(item.id)
    const paddingLeft = collapsed ? "pl-4" : `pl-${4 + level * 4}`

    return (
      <div key={item.id}>
        <button
          onClick={() => (hasChildren ? toggleExpanded(item.id) : undefined)}
          className={`w-full flex items-center justify-between ${paddingLeft} py-3 text-left transition-all duration-200 border-2 border-transparent hover:border-gray-900 hover:bg-gray-50 ${
            item.active ? "bg-red-50 border-red-600 text-red-700 font-medium" : "text-gray-700"
          }`}
        >
          <div className="flex items-center gap-3">
            {item.icon && <span className="text-lg">{item.icon}</span>}
            {!collapsed && <span className="font-medium">{item.label}</span>}
          </div>

          {!collapsed && hasChildren && (
            <span className="mr-2">
              {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </span>
          )}
        </button>

        {!collapsed && hasChildren && isExpanded && (
          <div className="bg-gray-50">{item.children?.map((child) => renderItem(child, level + 1))}</div>
        )}
      </div>
    )
  }

  return (
    <div
      className={`bg-white border-r-2 border-gray-900 transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      } ${className}`}
    >
      {/* Header */}
      <div className="p-4 border-b-2 border-gray-900 flex items-center justify-between">
        {!collapsed && <h2 className="font-bold text-gray-900">Navigation</h2>}
        {onToggle && (
          <button
            onClick={onToggle}
            className="p-2 border-2 border-gray-900 bg-white hover:bg-gray-50 transition-all duration-200 hover:shadow-brutalist-sm"
          >
            <Menu className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Navigation Items */}
      <nav className="py-2">{items.map((item) => renderItem(item))}</nav>
    </div>
  )
}
