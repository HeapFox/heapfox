"use client"

import { useState, useRef } from "react"
import { Upload, X, File } from "lucide-react"

interface FileUploadProps {
  accept?: string
  multiple?: boolean
  maxSize?: number // in MB
  onFilesChange?: (files: File[]) => void
}

export function FileUpload3D({ accept, multiple = false, maxSize = 10, onFilesChange }: FileUploadProps) {
  const [files, setFiles] = useState<File[]>([])
  const [isDragOver, setIsDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return

    const validFiles = Array.from(newFiles).filter((file) => {
      if (maxSize && file.size > maxSize * 1024 * 1024) {
        alert(`File ${file.name} is too large. Maximum size is ${maxSize}MB.`)
        return false
      }
      return true
    })

    const updatedFiles = multiple ? [...files, ...validFiles] : validFiles
    setFiles(updatedFiles)
    onFilesChange?.(updatedFiles)
  }

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index)
    setFiles(updatedFiles)
    onFilesChange?.(updatedFiles)
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <div className="space-y-4">
      {/* Drop Zone */}
      <div
        className={`
          border-2 border-dashed p-8 text-center cursor-pointer transition-all
          shadow-brutalist-sm hover:shadow-brutalist-md
          ${isDragOver ? "border-red-600 bg-red-50" : "border-zinc-400 bg-zinc-50 hover:bg-zinc-100"}
        `}
        onDragOver={(e) => {
          e.preventDefault()
          setIsDragOver(true)
        }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={(e) => {
          e.preventDefault()
          setIsDragOver(false)
          handleFiles(e.dataTransfer.files)
        }}
        onClick={() => fileInputRef.current?.click()}
      >
        <Upload className="w-12 h-12 mx-auto mb-4 text-zinc-400" />
        <p className="text-lg font-medium text-zinc-700 mb-2">Drop files here or click to browse</p>
        <p className="text-sm text-zinc-500">
          {accept && `Accepted formats: ${accept}`}
          {maxSize && ` • Max size: ${maxSize}MB`}
        </p>
      </div>

      {/* Hidden Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={(e) => handleFiles(e.target.files)}
        className="hidden"
      />

      {/* File List */}
      {files.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-medium text-zinc-900">Selected Files:</h4>
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 bg-white border-2 border-zinc-900 shadow-brutalist-sm"
            >
              <File className="w-5 h-5 text-zinc-500 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-zinc-900 truncate">{file.name}</p>
                <p className="text-sm text-zinc-500">{formatFileSize(file.size)}</p>
              </div>
              <button
                onClick={() => removeFile(index)}
                className="p-1 hover:bg-zinc-100 transition-colors border border-zinc-300"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
