"use client"

import { CheckCircle, AlertCircle, Info, AlertTriangle, X } from "lucide-react"

type AlertType = "success" | "error" | "warning" | "info"

interface AlertProps {
  type: AlertType
  title: string
  message?: string
  dismissible?: boolean
  onDismiss?: () => void
}

const alertConfig = {
  success: {
    icon: CheckCircle,
    className: "bg-green-50 border-green-600 text-green-900",
  },
  error: {
    icon: AlertCircle,
    className: "bg-red-50 border-red-600 text-red-900",
  },
  warning: {
    icon: AlertTriangle,
    className: "bg-yellow-50 border-yellow-600 text-yellow-900",
  },
  info: {
    icon: Info,
    className: "bg-blue-50 border-blue-600 text-blue-900",
  },
}

export function Alert3D({ type, title, message, dismissible = false, onDismiss }: AlertProps) {
  const config = alertConfig[type]
  const Icon = config.icon

  return (
    <div
      className={`
      border-2 shadow-brutalist-md p-4 ${config.className}
    `}
    >
      <div className="flex items-start gap-3">
        <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-sm">{title}</h4>
          {message && <p className="text-sm mt-1 opacity-90">{message}</p>}
        </div>
        {dismissible && (
          <button onClick={onDismiss} className="p-1 hover:bg-black/10 transition-colors border border-current/20">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  )
}
