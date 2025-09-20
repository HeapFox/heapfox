"use client"

import { useState } from "react"
import { Input3D } from "./input-3d"
import { Select3D } from "./select-3d"
import { Button } from "./button"

interface FilterOption {
  value: string
  label: string
}

interface SearchFilter3DProps {
  onSearch: (query: string) => void
  onFilter: (filters: Record<string, string>) => void
  filterOptions?: Record<string, FilterOption[]>
  placeholder?: string
}

export function SearchFilter3D({
  onSearch,
  onFilter,
  filterOptions = {},
  placeholder = "Search...",
}: SearchFilter3DProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState<Record<string, string>>({})

  const handleSearch = () => {
    onSearch(searchQuery)
  }

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilter(newFilters)
  }

  const clearFilters = () => {
    setFilters({})
    setSearchQuery("")
    onSearch("")
    onFilter({})
  }

  return (
    <div className="bg-white border-2 border-gray-900 shadow-brutalist-sm p-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Input3D
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>

        {Object.entries(filterOptions).map(([key, options]) => (
          <div key={key} className="min-w-[150px]">
            <Select3D
              placeholder={`Filter by ${key}`}
              value={filters[key] || ""}
              onChange={(value) => handleFilterChange(key, value)}
              options={options}
            />
          </div>
        ))}

        <div className="flex gap-2">
          <Button onClick={handleSearch}>Search</Button>
          <Button variant="outline" onClick={clearFilters}>
            Clear
          </Button>
        </div>
      </div>
    </div>
  )
}
