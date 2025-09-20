"use client"

import { useState, useEffect, type ReactNode } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselItem {
  id: string
  content: ReactNode
}

interface Carousel3DProps {
  items: CarouselItem[]
  autoPlay?: boolean
  autoPlayInterval?: number
  showDots?: boolean
  showArrows?: boolean
  className?: string
}

export function Carousel3D({
  items,
  autoPlay = false,
  autoPlayInterval = 3000,
  showDots = true,
  showArrows = true,
  className = "",
}: Carousel3DProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, items.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  if (items.length === 0) return null

  return (
    <div className={`relative border-2 border-gray-900 bg-white overflow-hidden ${className}`}>
      {/* Carousel Content */}
      <div className="relative h-64 overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0 h-full">
              {item.content}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {showArrows && items.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white border-2 border-gray-900 hover:bg-gray-50 transition-all duration-200 hover:shadow-brutalist-sm"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white border-2 border-gray-900 hover:bg-gray-50 transition-all duration-200 hover:shadow-brutalist-sm"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && items.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 border-2 border-gray-900 transition-all duration-200 ${
                index === currentIndex ? "bg-red-600" : "bg-white hover:bg-gray-100"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
