import { Braces, Type } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FeatureCard } from "@/components/feature-card"
import { Navbar } from "@/components/navbar"

export const metadata = {
  title: 'WebTools - Developer Utilities',
  description: 'Professional web tools to enhance your development workflow. Format JSON, count words, and more.',
  openGraph: {
    title: 'WebTools - Developer Utilities',
    description: 'Professional web tools to enhance your development workflow',
    images: [{ url: '/og-image.png' }],
  },
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
                Developer Tools for
                <span className="text-primary"> Modern Web</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                Professional utilities to enhance your development workflow. Format JSON, analyze text, and more.
              </p>
              <div className="flex gap-4 justify-center animate-in fade-in slide-in-from-bottom-5 duration-700">
                <Button size="lg" asChild>
                  <a href="#features">Explore Tools</a>
                </Button>
                <Button size="lg" variant="outline">
                  View Documentation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-muted/50">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Available Tools</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              <FeatureCard
                title="JSON Formatter"
                description="Format, validate and minify your JSON data with ease"
                icon={Braces}
                href="/tools/json"
              />
              <FeatureCard
                title="Word Counter"
                description="Count words, characters, and analyze your text"
                icon={Type}
                href="/tools/word-counter"
              />
              {/* Add more feature cards here */}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Why Choose WebTools?</h2>
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <h3 className="font-semibold mb-2">Fast & Reliable</h3>
                  <p className="text-muted-foreground">Lightning-fast tools that work offline</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Privacy Focused</h3>
                  <p className="text-muted-foreground">Your data never leaves your browser</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Free to Use</h3>
                  <p className="text-muted-foreground">All core features are free forever</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container px-4 mx-auto text-center text-muted-foreground">
          <p>© 2024 WebTools. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
