import { Card3D, Button, Badge3D } from "@heapfox/ui"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Default",
    price: "Free",
    description: "For solo devs & hobby projects",
    features: [
      "1 project",
      "heapfox.com subdomain",
      "Markdown/MDX",
      "Basic theme & branding",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "/mo",
    description: "For startups & small teams",
    features: [
      "Up to 10 projects",
      "Custom domains + SSL",
      "GitHub/GitLab sync",
      "Search & analytics",
      "Templates & custom CSS",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Team",
    price: "$19",
    period: "/mo",
    description: "For scaling products",
    features: [
      "Unlimited collaborators",
      "Roles & permissions",
      "Deploy history & rollbacks",
      "OpenAPI → API docs",
      "AI helpers (beta)",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-white cq-section">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">Simple, transparent pricing</h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">Start free. Scale when you need more. No surprises.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card3D key={index} className={`p-8 text-center relative ${plan.popular ? "border-red-500 border-2" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge3D variant="destructive">Most Popular</Badge3D>
                </div>
              )}

              <h3 className="text-2xl font-bold text-zinc-900 mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-zinc-900">{plan.price}</span>
                {plan.period && <span className="text-zinc-600">{plan.period}</span>}
              </div>
              <p className="text-zinc-600 mb-6">{plan.description}</p>

              <ul className="text-left mb-8 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button className="w-full" variant={plan.popular ? "default" : "outline"} size="lg">
                {plan.cta}
              </Button>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  )
}
