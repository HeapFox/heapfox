"use client"

import { Button } from "@heapfox/ui"
import { Logo } from "@/components/logo"

const footerSections = [
  {
    title: "Product",
    links: [
      "Markdown/MDX Editor",
      "Git Sync (GitHub/GitLab)",
      "Hosting & SSL",
      "Themes & Branding",
      "Collaboration & Roles",
      "Deploy Pipeline",
    ],
  },
  {
    title: "Solutions",
    links: [
      "For Indie Devs",
      "For Startups",
      "For Open Source",
      "For SaaS",
      "Versioned Docs",
      "Embedded Docs Widget",
    ],
  },
  {
    title: "Developers",
    links: ["Documentation", "OpenAPI → API Docs", "Plugins", "Integrations", "Status Page", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Security", "Privacy Policy", "Terms of Service"],
  },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-foreground text-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Logo style="white" />
            </div>
            <p className="text-zinc-400 mb-4 sm:mb-6 text-sm sm:text-base max-w-sm">
              Docs without the overhead. Fully hosted, customizable documentation — built for teams and devs.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <Button variant="default" size="sm" className="text-xs sm:text-sm bg-primary">Get Started Free</Button>
              <Button variant="ghost" size="sm" className="text-xs sm:text-sm">View Pricing</Button>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="sm:col-span-1">
              <h4 className="font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base">{section.title}</h4>
              <ul className="space-y-1 sm:space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white transition-all duration-200 nav-link-3d block py-1 px-2 -mx-2 text-xs sm:text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-zinc-800 pt-6 sm:pt-8 mb-6 sm:mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-6">
            <div className="w-full lg:w-auto">
              <h4 className="font-bold text-white mb-2 text-sm sm:text-base">Stay updated</h4>
              <p className="text-zinc-400 text-xs sm:text-sm mb-4 lg:mb-0">
                Get the latest product updates and analytics insights.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 sm:px-4 py-2 bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:border-red-500 text-xs sm:text-sm w-full sm:w-auto"
              />
              <Button size="sm" className="text-xs sm:text-sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Scroll to Top */}
        <div className="border-t border-zinc-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-zinc-400 text-xs sm:text-sm order-2 sm:order-1">
            © 2025 HeapFox. All rights reserved.
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 order-1 sm:order-2">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-zinc-400">
              <a href="#" className="hover:text-white transition-all duration-200 nav-link-3d py-1 px-2">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-all duration-200 nav-link-3d py-1 px-2">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-all duration-200 nav-link-3d py-1 px-2">
                Security
              </a>
              <a href="#" className="hover:text-white transition-all duration-200 nav-link-3d py-1 px-2">
                Cookies
              </a>
            </div>
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="bg-foreground border-zinc-600 hover:bg-zinc-700 text-zinc-300 hover:text-white text-xs sm:text-sm px-2 sm:px-3"
            >
              ↑ Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
