'use client'

import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/50">
      <div className="container px-4 mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Free Tools to Make
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"> Everything </span>
          Simple
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          We offer text, developer, conversion, and other online tools to make your life easier. No sign-up required.
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for tools..."
              className="w-full px-6 py-4 rounded-full border bg-background/50 backdrop-blur focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button 
              className="absolute right-2 top-1/2 -translate-y-1/2"
              size="sm"
            >
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
