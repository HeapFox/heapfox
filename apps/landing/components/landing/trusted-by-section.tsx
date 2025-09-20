export function TrustedBySection() {
  const logos = [
    "Acme",
    "Beta Labs",
    "Open Source Org",
    "SaaS Starter",
    "Dev Collective",
    "Widget Co.",
  ]

  return (
    <section id="trusted-by" className="py-8 bg-white border-y border-zinc-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <p className="text-xs uppercase tracking-wider text-zinc-500">Trusted by</p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 opacity-70 grayscale">
            {logos.map((name) => (
              <div
                key={name}
                className="px-4 py-2 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 text-sm font-medium"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
