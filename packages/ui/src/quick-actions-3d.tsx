"use client"

import type { ReactNode } from "react"
import { Button } from "./button"

interface QuickAction {
  id: string
  label: string
  icon?: ReactNode
  onClick: () => void
  variant?: "default" | "secondary" | "outline" | "destructive"
}

interface QuickActions3DProps {
  title: string
  actions: QuickAction[]
  layout?: "grid" | "list"
}

export function QuickActions3D({ title, actions, layout = "grid" }: QuickActions3DProps) {
  return (
    <div className="bg-white border-2 border-gray-900 shadow-brutalist-sm">
      <div className="p-4 border-b-2 border-gray-900 bg-gray-100">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>
      <div className="p-4">
        <div className={layout === "grid" ? "grid grid-cols-2 gap-3" : "space-y-3"}>
          {actions.map((action) => (
            <Button
              key={action.id}
              variant={action.variant || "outline"}
              onClick={action.onClick}
              className="justify-start gap-2"
            >
              {action.icon}
              {action.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
