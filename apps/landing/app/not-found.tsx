import { Button, BackButton } from "@heapfox/ui"
import { Header } from "@/components/global/header"
import { Footer } from "@/components/global/footer"
import Link from "next/link"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: "The page you're looking for could not be found. Return to HeapFox Docs to continue exploring hosted, customizable documentation.",
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* 404 Number with 3D styling */}
            <div className="mb-8 animate-in fade-in duration-1000">
              <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-700 select-none">
                404
              </h1>
              <div className="w-32 h-1 bg-red-600 mx-auto mt-4 rounded-full shadow-[0_4px_0_0_#dc2626] animate-in fade-in duration-800 delay-200"></div>
            </div>

            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance animate-in fade-in duration-1000 delay-100">
              <span className="text-primary">Oops!</span> Page not found
            </h2>

            {/* Description */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance animate-in fade-in duration-1000 delay-200">
              The page you're looking for seems to have wandered off. Let's get you back to writing and shipping docs.
            </p>

            {/* Error details */}
            <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 mb-8 max-w-md mx-auto animate-in fade-in duration-1000 delay-300">
              <h3 className="font-semibold text-lg mb-2">What happened?</h3>
              <p className="text-muted-foreground text-sm">
                The URL you entered might be incorrect, or the page may have been moved or deleted.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-in fade-in duration-1000 delay-400">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold transition-all duration-200 hover:scale-[1.02]"
              >
                <Link href="/">
                  Go back home
                </Link>
              </Button>
              <BackButton
                variant="outline"
                size="lg"
                className="border-2 border-zinc-600 px-8 py-4 text-lg font-semibold bg-transparent transition-all duration-200 hover:scale-[1.02]"
              >
                Go back
              </BackButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
