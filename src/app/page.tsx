import { Braces, Type, ArrowRight, Star, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FeatureCard } from "@/components/feature-card"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { FeaturesSection } from "@/components/sections/features"
import { BenefitsSection } from "@/components/sections/benefits"
import { Footer } from "@/components/sections/footer"

export const metadata = {
  title: 'WebTools - Professional Developer Utilities',
  description: 'Free online developer tools including JSON formatter, word counter, and more. Built for modern web development workflows.',
  openGraph: {
    title: 'WebTools - Professional Developer Utilities',
    description: 'Free online developer tools for modern web development',
    type: 'website',
    locale: 'en_US',
    url: 'https://webtools.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebTools - Professional Developer Utilities',
    description: 'Free online developer tools for modern web development',
  },
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <Footer />
    </div>
  )
}
