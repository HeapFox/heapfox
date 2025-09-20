"use client"

import { cn } from "./lib/utils"
import { useState } from "react"

const tabs = [
  {
    id: "analytics",
    label: "Analytics",
    content: "Track user behavior and conversion metrics with real-time data visualization.",
  },
  {
    id: "features",
    label: "Features",
    content: "Manage feature flags and A/B tests across your entire application stack.",
  },
  {
    id: "insights",
    label: "Insights",
    content: "Get actionable insights from your data with AI-powered recommendations.",
  },
  { id: "reports", label: "Reports", content: "Generate comprehensive reports and export data in multiple formats." },
]

export function TabsDemo() {
  const [activeTab, setActiveTab] = useState("analytics")

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex border-b-2 border-zinc-600 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-200 ease-out",
              "border-b-2 -mb-0.5",
              activeTab === tab.id
                ? "text-primary border-primary bg-background shadow-brutal-sm"
                : "text-muted-foreground border-transparent hover:text-foreground hover:shadow-brutal-sm hover:-translate-y-0.5",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[120px]">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={cn(
              "transition-all duration-300 ease-out",
              activeTab === tab.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 absolute",
            )}
          >
            {activeTab === tab.id && (
              <div className="bg-card border-2 border-zinc-600 p-6 shadow-brutal-md">
                <p className="text-card-foreground leading-relaxed">{tab.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
