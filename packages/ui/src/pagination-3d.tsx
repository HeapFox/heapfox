"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  showFirstLast?: boolean
}

export function Pagination3D({ currentPage, totalPages, onPageChange, showFirstLast = true }: PaginationProps) {
  const getVisiblePages = () => {
    const delta = 2
    const range = []
    const rangeWithDots = []

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i)
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...")
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages)
    } else {
      rangeWithDots.push(totalPages)
    }

    return rangeWithDots
  }

  const visiblePages = totalPages > 1 ? getVisiblePages() : [1]

  return (
    <div className="flex items-center gap-2">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 border-2 border-zinc-900 bg-white hover:bg-zinc-50 disabled:bg-zinc-100 disabled:text-zinc-400 shadow-brutalist-sm hover:shadow-brutalist-md active:shadow-none active:translate-x-1 active:translate-y-1 transition-all disabled:shadow-none disabled:transform-none"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Page Numbers */}
      {visiblePages.map((page, index) => (
        <div key={index}>
          {page === "..." ? (
            <span className="px-3 py-2 text-zinc-500">...</span>
          ) : (
            <button
              onClick={() => onPageChange(page as number)}
              className={`
                px-3 py-2 border-2 border-zinc-900 font-medium transition-all
                shadow-brutalist-sm hover:shadow-brutalist-md active:shadow-none active:translate-x-1 active:translate-y-1
                ${currentPage === page ? "bg-red-600 text-white" : "bg-white hover:bg-zinc-50 text-zinc-900"}
              `}
            >
              {page}
            </button>
          )}
        </div>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 border-2 border-zinc-900 bg-white hover:bg-zinc-50 disabled:bg-zinc-100 disabled:text-zinc-400 shadow-brutalist-sm hover:shadow-brutalist-md active:shadow-none active:translate-x-1 active:translate-y-1 transition-all disabled:shadow-none disabled:transform-none"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  )
}
