"use client"

import type React from "react"

import { forwardRef, useRef, useState, useEffect } from "react"
import { cn } from "./lib/utils"

interface CodeInput2FAProps {
  length?: number
  onComplete?: (code: string) => void
  className?: string
  label?: string
  error?: string
}

const CodeInput2FA = forwardRef<HTMLDivElement, CodeInput2FAProps>(
  ({ length = 6, onComplete, className, label, error }, ref) => {
    const [values, setValues] = useState<string[]>(Array(length).fill(""))
    const [focusedIndex, setFocusedIndex] = useState<number>(0)
    const inputRefs = useRef<(HTMLInputElement | null)[]>([])

    useEffect(() => {
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus()
      }
    }, [])

    const handleChange = (index: number, value: string) => {
      if (value.length > 1) return // Prevent multiple characters

      const newValues = [...values]
      newValues[index] = value
      setValues(newValues)

      // Move to next input if value is entered
      if (value && index < length - 1) {
        inputRefs.current[index + 1]?.focus()
        setFocusedIndex(index + 1)
      }

      // Call onComplete if all fields are filled
      if (newValues.every((v) => v !== "") && onComplete) {
        onComplete(newValues.join(""))
      }
    }

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
      if (e.key === "Backspace" && !values[index] && index > 0) {
        inputRefs.current[index - 1]?.focus()
        setFocusedIndex(index - 1)
      }
    }

    const handlePaste = (e: React.ClipboardEvent) => {
      e.preventDefault()
      const pastedData = e.clipboardData.getData("text").slice(0, length)
      const newValues = Array(length).fill("")

      for (let i = 0; i < pastedData.length; i++) {
        if (i < length) {
          newValues[i] = pastedData[i]
        }
      }

      setValues(newValues)

      if (newValues.every((v) => v !== "") && onComplete) {
        onComplete(newValues.join(""))
      }
    }

    return (
      <div ref={ref} className={cn("space-y-2", className)}>
        {label && <label className="block text-sm font-bold text-zinc-900 dark:text-zinc-100">{label}</label>}
        <div className="flex gap-3 justify-center">
          {Array.from({ length }).map((_, index) => (
            <input
              key={index}
              ref={(el) => { inputRefs.current[index] = el }}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              value={values[index]}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onFocus={() => setFocusedIndex(index)}
              onPaste={handlePaste}
              className={cn(
                // Base styles
                "w-12 h-12 text-center text-lg font-bold",
                "bg-white dark:bg-zinc-900",
                "border-2 border-zinc-900 dark:border-zinc-100",
                "text-zinc-900 dark:text-zinc-100",
                // 3D effect
                "shadow-brutalist-sm",
                "transition-all duration-150 ease-out",
                // Focus state
                "focus:outline-none focus:shadow-brutalist-md focus:translate-x-[-2px] focus:translate-y-[-2px]",
                // Error state
                error && "border-red-600 shadow-brutalist-error",
                // Active state
                focusedIndex === index && "shadow-brutalist-md translate-x-[-2px] translate-y-[-2px]",
              )}
            />
          ))}
        </div>
        {error && <p className="text-sm font-medium text-red-600 text-center">{error}</p>}
      </div>
    )
  },
)

CodeInput2FA.displayName = "CodeInput2FA"

export { CodeInput2FA }
