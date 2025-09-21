import { Header } from "@/components/global/header"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { IntegrationSection } from "@/components/landing/integration-section"
import { TemplatesSection } from "@/components/landing/templates-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/global/footer"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <TemplatesSection />
        <IntegrationSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export const dynamic = "force-static"
