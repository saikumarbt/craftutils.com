import { Braces, Type, Zap } from "lucide-react"
import { FeatureCard } from "@/components/feature-card"

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Powerful Tools
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to streamline your development workflow.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <FeatureCard
            title="JSON Formatter"
            description="Format, validate and beautify your JSON data with syntax highlighting"
            icon={Braces}
            href="/tools/json"
          />
          <FeatureCard
            title="Word Counter"
            description="Count words, characters, and analyze your text with real-time stats"
            icon={Type}
            href="/tools/word-counter"
          />
          <FeatureCard
            title="More Coming Soon"
            description="We're constantly adding new tools to help improve your workflow"
            icon={Zap}
            href="#"
          />
        </div>
      </div>
    </section>
  )
}
