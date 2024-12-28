import { Navbar } from "@/components/navbar"
import { CategorySection } from "@/components/sections/category-section"
import { StatsSection } from "@/components/sections/stats"
import { Footer } from "@/components/sections/footer"
import { HeroSection } from "@/components/sections/hero-section"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <CategorySection />
      <StatsSection />
      <Footer />
    </div>
  )
}
