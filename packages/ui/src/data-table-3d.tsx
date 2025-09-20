"use client"

import { useState } from "react"
import type { ReactNode } from "react"

interface Column {
  key: string
  label: string
  sortable?: boolean
}

interface DataTable3DProps {
  columns: Column[]
  data: Record<string, any>[]
  actions?: (row: Record<string, any>) => ReactNode
}

export function DataTable3D({ columns, data, actions }: DataTable3DProps) {
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

  const handleSort = (columnKey: string) => {
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(columnKey)
      setSortDirection("asc")
    }
  }

  const sortedData = [...data].sort((a, b) => {
    if (!sortColumn) return 0

    const aVal = a[sortColumn]
    const bVal = b[sortColumn]

    if (aVal < bVal) return sortDirection === "asc" ? -1 : 1
    if (aVal > bVal) return sortDirection === "asc" ? 1 : -1
    return 0
  })

  return (
    <div className="bg-white border-2 border-gray-900 shadow-brutalist-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100 border-b-2 border-gray-900">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wide ${
                    column.sortable ? "cursor-pointer hover:bg-gray-200" : ""
                  }`}
                  onClick={() => column.sortable && handleSort(column.key)}
                >
                  <div className="flex items-center gap-2">
                    {column.label}
                    {column.sortable && sortColumn === column.key && (
                      <span className="text-red-600">{sortDirection === "asc" ? "↑" : "↓"}</span>
                    )}
                  </div>
                </th>
              ))}
              {actions && (
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wide">Actions</th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-gray-900">
            {sortedData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4 text-sm text-gray-900">
                    {row[column.key]}
                  </td>
                ))}
                {actions && <td className="px-6 py-4 text-sm">{actions(row)}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
