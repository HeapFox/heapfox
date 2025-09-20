"use client"

import { useState, useEffect } from "react"
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react"

type ToastType = "success" | "error" | "warning" | "info"

interface Toast {
  id: string
  type: ToastType
  title: string
  message?: string
  duration?: number
}

interface ToastProps extends Toast {
  onRemove: (id: string) => void
}

const toastIcons = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
}

const toastStyles = {
  success: "bg-green-50 border-green-600 text-green-900",
  error: "bg-red-50 border-red-600 text-red-900",
  warning: "bg-yellow-50 border-yellow-600 text-yellow-900",
  info: "bg-blue-50 border-blue-600 text-blue-900",
}

function ToastItem({ id, type, title, message, duration = 5000, onRemove }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)
  const Icon = toastIcons[type]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => onRemove(id), 200)
    }, duration)

    return () => clearTimeout(timer)
  }, [id, duration, onRemove])

  return (
    <div
      className={`
      transform transition-all duration-200 border-2 shadow-brutalist-md p-4 mb-3 max-w-sm w-full
      ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
      ${toastStyles[type]}
    `}
    >
      <div className="flex items-start gap-3">
        <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm">{title}</p>
          {message && <p className="text-sm mt-1 opacity-90">{message}</p>}
        </div>
        <button
          onClick={() => {
            setIsVisible(false)
            setTimeout(() => onRemove(id), 200)
          }}
          className="p-1 hover:bg-black/10 transition-colors border border-current/20"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts((prev) => [...prev, { ...toast, id }])
  }

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  // Expose addToast globally for demo purposes
  useEffect(() => {
    ;(window as any).addToast = addToast
  }, [])

  return (
    <div className="fixed top-4 right-4 z-50 pointer-events-none">
      <div className="pointer-events-auto">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} {...toast} onRemove={removeToast} />
        ))}
      </div>
    </div>
  )
}

export type { Toast, ToastType }
