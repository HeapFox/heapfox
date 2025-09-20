"use client"

import { useState, type KeyboardEvent } from "react"
import { X } from "lucide-react"

interface TagInput3DProps {
  label?: string
  tags: string[]
  onChange: (tags: string[]) => void
  placeholder?: string
  maxTags?: number
  className?: string
}

export function TagInput3D({
  label,
  tags,
  onChange,
  placeholder = "Add tag...",
  maxTags,
  className = "",
}: TagInput3DProps) {
  const [inputValue, setInputValue] = useState("")

  const addTag = (tag: string) => {
    const trimmedTag = tag.trim()
    if (trimmedTag && !tags.includes(trimmedTag) && (!maxTags || tags.length < maxTags)) {
      onChange([...tags, trimmedTag])
      setInputValue("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    onChange(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault()
      addTag(inputValue)
    } else if (e.key === "Backspace" && !inputValue && tags.length > 0) {
      removeTag(tags[tags.length - 1])
    }
  }

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-900">
          {label}
          {maxTags && (
            <span className="text-gray-500 ml-1">
              ({tags.length}/{maxTags})
            </span>
          )}
        </label>
      )}

      <div className="border-2 border-gray-900 bg-white p-2 focus-within:border-red-600 transition-colors duration-200">
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 border-2 border-gray-900 text-sm font-medium text-gray-900"
            >
              {tag}
              <button
                type="button"
                onClick={() => removeTag(tag)}
                className="text-gray-600 hover:text-red-600 transition-colors duration-200"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>

        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={() => inputValue && addTag(inputValue)}
          placeholder={tags.length === 0 ? placeholder : ""}
          disabled={maxTags ? tags.length >= maxTags : false}
          className="w-full border-none outline-none text-gray-900 placeholder-gray-500 bg-transparent"
        />
      </div>

      <p className="text-xs text-gray-500">Press Enter or comma to add tags</p>
    </div>
  )
}
