import { Card3D, Button } from "@heapfox/ui"
import { FileCode2, GitBranch, Cloud, Palette, Users2, Zap } from "lucide-react"

const features = [
  {
    title: "Markdown / MDX Editor",
    description:
      "Write in Markdown or MDX with live preview. Keep docs close to code or edit right in the dashboard.",
    icon: FileCode2,
  },
  {
    title: "Git Sync",
    description:
      "Connect GitHub or GitLab and auto-import your docs/ folder. Auto-deploy on push.",
    icon: GitBranch,
  },
  {
    title: "Hosted for You",
    description: "Every project gets a subdomain like project.heapfox.com with SSL out of the box.",
    icon: Cloud,
  },
  {
    title: "Themes & Branding",
    description: "Light/dark, color tweaks, logo, sidebar. Advanced: custom CSS or heapfox.config.js.",
    icon: Palette,
  },
  {
    title: "Collaboration",
    description: "Invite your team. Roles: admin, editor, viewer. See deploy history and changes.",
    icon: Users2,
  },
  {
    title: "Deploy Pipeline",
    description: "Cloudflare-backed builds. Git push → build → deploy. Fast, reliable, automatic.",
    icon: Zap,
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-foreground cq-section">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Markdown in, <span className="text-secondary">Docs out</span></h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">Everything you need to write, brand, and deploy documentation without touching infrastructure.</p>
        </div>

  <div className="cq-grid-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card3D key={index} className="p-6 text-center">
              <feature.icon className="h-9 w-9 text-zinc-900 mb-4" />
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{feature.title}</h3>
              <p className="text-zinc-600">{feature.description}</p>
            </Card3D>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="mr-4">Get Started Free</Button>
          <Button variant="outline" size="lg">Explore Templates</Button>
        </div>
      </div>
    </section>
  )
}
