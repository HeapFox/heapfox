"use client"

import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
  current?: boolean
}

interface Breadcrumb3DProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb3D({ items }: Breadcrumb3DProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <ChevronRight className="h-4 w-4 text-gray-500 mx-2" />}
          {item.current ? (
            <span className="text-gray-900 font-medium px-2 py-1 bg-gray-100 border-2 border-gray-900">
              {item.label}
            </span>
          ) : (
            <a
              href={item.href}
              className="text-gray-600 hover:text-gray-900 px-2 py-1 border-2 border-transparent hover:border-gray-900 hover:bg-white transition-all duration-200 hover:shadow-brutalist-sm"
            >
              {item.label}
            </a>
          )}
        </div>
      ))}
    </nav>
  )
}
