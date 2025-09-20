"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface AccordionItem {
  id: string
  title: string
  content: React.ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
  allowMultiple?: boolean
  defaultOpen?: string[]
}

export function Accordion3D({ items, allowMultiple = false, defaultOpen = [] }: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen)

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]))
    }
  }

  return (
    <div className="space-y-2">
      {items.map((item) => {
        const isOpen = openItems.includes(item.id)

        return (
          <div key={item.id} className="border-2 border-zinc-900 bg-white shadow-brutalist-sm">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full p-4 text-left flex items-center justify-between hover:bg-zinc-50 transition-colors font-medium"
            >
              <span>{item.title}</span>
              <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            <div
              className={`
              overflow-hidden transition-all duration-200 border-t-2 border-zinc-900
              ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
            `}
            >
              <div className="p-4 bg-zinc-50">{item.content}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
