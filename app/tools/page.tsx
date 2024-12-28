import { Navbar } from "@/components/navbar"
import { ToolsGrid } from "@/components/tools-grid"
import { Footer } from "@/components/sections/footer"

export default function ToolsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-6">All Tools</h1>
          <p className="text-muted-foreground mb-8">
            Browse our complete collection of online utilities and tools.
          </p>
        </div>
        <ToolsGrid />
      </main>
      <Footer />
    </div>
  )
}
