import { Card3D, Button } from "@heapfox/ui"
import { BookOpen, Code2, GitBranch, Search, Sparkles } from "lucide-react"

const templates = [
  {
    title: "Developer API Docs",
    description: "Clean, code-first layout with endpoints, SDK examples, and versioned navigation.",
    Icon: Code2,
  },
  {
    title: "Product Documentation",
    description: "Beautiful product guides, how-tos, and changelogs with search built-in.",
    Icon: BookOpen,
  },
  {
    title: "Open-source Docs",
    description: "Lightweight docs with GitHub sync, perfect for READMEs and wikis.",
    Icon: GitBranch,
  },
  {
    title: "Minimal Docs",
    description: "Ultra-minimal theme for speed and clarity. Great for small projects.",
    Icon: Sparkles,
  },
  {
    title: "Knowledge Base",
    description: "Organize articles and FAQs with categories and fast search.",
    Icon: Search,
  },
]

export function TemplatesSection() {
  return (
    <section id="templates" className="py-24 bg-white cq-section border-t border-zinc-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">Templates to get you shipping</h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">Pick a starting point and make it yours with themes, colors, and branding.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {templates.map((t) => (
            <Card3D key={t.title} className="p-6">
              <t.Icon className="h-8 w-8 text-zinc-900 mb-3" />
              <h3 className="text-xl font-bold text-zinc-900 mb-2">{t.title}</h3>
              <p className="text-zinc-600 mb-6">{t.description}</p>
              <div className="flex gap-3">
                <Button size="sm">Preview</Button>
                <Button size="sm" variant="outline">Use Template</Button>
              </div>
            </Card3D>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg">Browse all templates</Button>
        </div>
      </div>
    </section>
  )
}
