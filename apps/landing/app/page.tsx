import { Header } from "@/components/global/header"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { IntegrationSection } from "@/components/landing/integration-section"
import { TemplatesSection } from "@/components/landing/templates-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/global/footer"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { TrustedBySection } from "@/components/landing/trusted-by-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        {/*<TrustedBySection />*/}
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
// Ensure this route is statically generated at build time
export const dynamic = "force-static"
