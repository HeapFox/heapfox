import { Card3D } from "@heapfox/ui"
import { Github, Gitlab, FileCog, Search, Slack, Cloud, Palette, Bell, Map, BarChart3, Puzzle } from "lucide-react"

const integrations = [
  { name: "GitHub", Icon: Github },
  { name: "GitLab", Icon: Gitlab },
  { name: "OpenAPI", Icon: FileCog },
  { name: "Search", Icon: Search },
  { name: "Slack", Icon: Slack },
  { name: "Cloudflare", Icon: Cloud },
  { name: "Custom CSS", Icon: Palette },
  { name: "Webhooks", Icon: Bell },
  { name: "Sitemaps", Icon: Map },
  { name: "Analytics Plugin", Icon: BarChart3 },
  { name: "Feedback Widget", Icon: Puzzle },
  { name: "Embeds", Icon: Puzzle },
]

export function IntegrationSection() {
  return (
    <section id="integrations" className="py-24 bg-white cq-section">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">Works with your workflow</h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">Connect your repo, generate API docs from OpenAPI, add search and integrations. No lock-in.</p>
        </div>

  <div className="cq-grid-6 gap-6 mb-16">
          {integrations.map((integration, index) => (
            <Card3D key={index} className="p-6 text-center hover:shadow-brutal-lg transition-all">
              <integration.Icon className="h-7 w-7 mx-auto mb-2 text-zinc-900" />
              <p className="font-semibold text-zinc-900">{integration.name}</p>
            </Card3D>
          ))}
        </div>

        <div className="bg-foreground text-white p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Quick Setup</h3>
          <div className="bg-black p-4 font-mono text-sm text-green-400">
            <div className="mb-2">$ npm i -g heapfox</div>
            <div className="mb-2">$ heapfox docs init</div>
            <div className="mb-2">$ heapfox docs deploy</div>
            <div className="text-zinc-400"># From markdown to docs in minutes</div>
          </div>
        </div>
      </div>
    </section>
  )
}
