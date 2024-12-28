import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="animate-in fade-in slide-in-from-bottom-3 duration-1000 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Professional Developer Tools
              <span className="text-primary block">For Modern Web</span>
            </h1>
            <p className="animate-in fade-in slide-in-from-bottom-4 duration-1000 mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Streamline your development workflow with our suite of powerful online tools. 
              Format JSON, analyze text, and more - all in one place.
            </p>
          </div>
          <div className="animate-in fade-in slide-in-from-bottom-5 duration-1000 space-x-4">
            <Button size="lg" asChild>
              <a href="#features">
                Explore Tools <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline">
              View Documentation
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary/30 to-primary-foreground/30 opacity-30" 
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }} 
          />
        </div>
      </div>
    </section>
  )
}
