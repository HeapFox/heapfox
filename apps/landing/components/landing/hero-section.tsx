import { Button } from "@heapfox/ui"

export function HeroSection() {
  return (
    <section id="hero" className="py-20 px-4 sm:px-6 lg:px-8 subtle-grid cq-section">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-balance mb-8 animate-in fade-in duration-1200">
          Docs without the <span className="text-primary">overhead.</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto text-balance animate-in fade-in duration-1000 delay-150">
          Fully hosted, customizable documentation as a service, built for teams and devs who want beautiful docs
          without maintaining infra.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-in fade-in duration-1000 delay-300">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold transition-all duration-200 hover:scale-[1.02]"
          >
            Get Started Free
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-zinc-600 px-8 py-4 text-lg font-semibold bg-transparent transition-all duration-200 hover:scale-[1.02]"
          >
            See Templates
          </Button>
        </div>
      </div>
    </section>
  )
}
