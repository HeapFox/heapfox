import { Card3D } from "@heapfox/ui"
import { FileCode2, GitBranch, UploadCloud } from "lucide-react"

const steps = [
  {
    title: "Write",
    description: "Create content in Markdown or MDX. Use our dashboard editor with live preview or keep docs in your repo.",
    Icon: FileCode2,
    number: 1,
  },
  {
    title: "Connect",
    description: "Sync a GitHub/GitLab repo (docs/ folder) or write in-app. We’ll watch for changes automatically.",
    Icon: GitBranch,
    number: 2,
  },
  {
    title: "Deploy",
    description: "Every push builds and deploys to a project subdomain. Add a custom domain with automatic SSL when ready.",
    Icon: UploadCloud,
    number: 3,
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-white cq-section border-t border-zinc-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">Write, Deploy, Share</h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">Your docs flow in three simple steps — built for speed and collaboration.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <Card3D key={s.title} className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-9 w-9 rounded-full bg-zinc-100 text-zinc-900 flex items-center justify-center font-bold">
                  {s.number}
                </div>
                <s.Icon className="h-7 w-7 text-zinc-900" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">{s.title}</h3>
              <p className="text-zinc-600">{s.description}</p>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  )
}
