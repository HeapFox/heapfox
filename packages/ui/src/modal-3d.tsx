"use client"

import type React from "react"

import { useEffect } from "react"
import { X } from "lucide-react"

interface Modal3DProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  size?: "sm" | "md" | "lg"
}

export function Modal3D({ isOpen, onClose, title, children, size = "md" }: Modal3DProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div
        className={`relative bg-white border-2 border-zinc-900 shadow-brutalist-lg transform transition-all duration-200 ${sizeClasses[size]} w-full max-h-[90vh] overflow-hidden`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b-2 border-zinc-900 bg-zinc-50">
          <h2 className="text-xl font-bold text-zinc-900">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-zinc-200 transition-colors border-2 border-zinc-900 bg-white shadow-brutalist-sm hover:shadow-brutalist-md active:shadow-none active:translate-x-1 active:translate-y-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">{children}</div>
      </div>
    </div>
  )
}
