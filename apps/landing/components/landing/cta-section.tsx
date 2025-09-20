import { Button, Card3D } from "@heapfox/ui"

export function CTASection() {
  return (
    <section id="get-started" className="py-24 bg-red-500 subtle-grid cq-section">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Card3D className="bg-white p-12">
          <h2 className="text-4xl font-bold text-zinc-900 mb-4">From markdown to docs in minutes</h2>
          <p className="text-xl text-zinc-600 mb-8 max-w-2xl mx-auto">Ship beautiful, collaborative docs without maintaining infrastructure. Your docs, our infrastructure.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-500 hover:bg-red-600">Get Started Free</Button>
            <Button variant="outline" size="lg">View Pricing</Button>
          </div>
          <p className="text-sm text-zinc-500 mt-4">Free tier available • Custom domains on Pro • Team collaboration</p>
        </Card3D>
      </div>
    </section>
  )
}
