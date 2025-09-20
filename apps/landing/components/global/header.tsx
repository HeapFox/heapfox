import { Button } from "@heapfox/ui"
import { Logo } from "@/components/logo"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-300 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
            </Link>
          </div>

          <nav className="hidden sm:flex items-center space-x-1 md:space-x-2 lg:space-x-4 xl:space-x-8 h-full">
            <a href="#features" className="nav-link-3d text-foreground hover:text-primary font-medium px-2 md:px-3 lg:px-4 h-full flex items-center transition-all duration-200 text-sm md:text-base lg:text-base">
              Features
            </a>
            <a href="#integrations" className="nav-link-3d text-foreground hover:text-primary font-medium px-2 md:px-3 lg:px-4 h-full flex items-center transition-all duration-200 text-sm md:text-base lg:text-base">
              Integrations
            </a>
            <a href="#pricing" className="nav-link-3d text-foreground hover:text-primary font-medium px-2 md:px-3 lg:px-4 h-full flex items-center transition-all duration-200 text-sm md:text-base lg:text-base">
              Pricing
            </a>
            <a href="#templates" className="nav-link-3d text-foreground hover:text-primary font-medium px-2 md:px-3 lg:px-4 h-full items-center transition-all duration-200 text-sm md:text-base lg:text-base hidden lg:flex">
              Templates
            </a>
            <a href="#" className="nav-link-3d text-foreground hover:text-primary font-medium px-2 md:px-3 lg:px-4 h-full items-center transition-all duration-200 text-sm md:text-base lg:text-base hidden lg:flex">
              Docs
            </a>
          </nav>

          <div className="flex items-center space-x-2 md:space-x-4">
            <Button
              variant="outline"
              className="border-2 border-zinc-600 bg-transparent text-xs sm:text-sm md:text-base px-2 sm:px-3 md:px-4 py-1 sm:py-2"
            >
              Dashboard
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
