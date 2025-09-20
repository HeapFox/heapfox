"use client"

import { useState } from "react"
import { Calendar } from "lucide-react"

interface DatePicker3DProps {
  label?: string
  value?: Date
  onChange?: (date: Date) => void
  placeholder?: string
  required?: boolean
}

export function DatePicker3D({ label, value, onChange, placeholder = "Select date", required }: DatePicker3DProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(value)

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    onChange?.(date)
    setIsOpen(false)
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const generateCalendar = () => {
    const today = new Date()
    const currentMonth = today.getMonth()
    const currentYear = today.getFullYear()
    const firstDay = new Date(currentYear, currentMonth, 1)
    const lastDay = new Date(currentYear, currentMonth + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(currentYear, currentMonth, day))
    }

    return days
  }

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-900">
          {label}
          {required && <span className="text-red-600 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-3 text-left bg-white border-2 border-gray-900 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-red-600 transition-all duration-200 hover:shadow-brutalist-sm flex items-center justify-between"
        >
          <span className={selectedDate ? "text-gray-900" : "text-gray-500"}>
            {selectedDate ? formatDate(selectedDate) : placeholder}
          </span>
          <Calendar className="h-5 w-5 text-gray-500" />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-gray-900 shadow-brutalist z-50">
            <div className="p-4">
              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                  <div key={day} className="p-2 font-medium text-gray-600">
                    {day}
                  </div>
                ))}
                {generateCalendar().map((date, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => date && handleDateSelect(date)}
                    disabled={!date}
                    className={`p-2 text-sm transition-all duration-200 ${
                      date
                        ? selectedDate && date.toDateString() === selectedDate.toDateString()
                          ? "bg-red-600 text-white border-2 border-gray-900"
                          : "hover:bg-gray-100 border-2 border-transparent hover:border-gray-900"
                        : ""
                    }`}
                  >
                    {date?.getDate()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
