import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/sections/footer"
import { ToolCard } from "@/components/tool-card"
import { Braces, Code, Regex, Hash, FileJson, Binary } from "lucide-react"

const developerTools = [
  { 
    name: "JSON Formatter", 
    icon: Braces, 
    href: "/tools/json", 
    description: "Format, validate and beautify JSON with syntax highlighting",
    isNew: false
  },
  { 
    name: "Code Beautifier", 
    icon: Code, 
    href: "/tools/code-beautifier", 
    description: "Format and beautify code in multiple languages",
    isNew: false
  },
  { 
    name: "Regex Tester", 
    icon: Regex, 
    href: "/tools/regex", 
    description: "Test and debug regular expressions with real-time results",
    isNew: true
  },
  { 
    name: "Hash Generator", 
    icon: Hash, 
    href: "/tools/hash-generator", 
    description: "Generate MD5, SHA-1, SHA-256 hashes",
    isNew: true
  }
]

export default function DeveloperToolsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-6">Developer Tools</h1>
          <p className="text-muted-foreground mb-8">
            Professional tools for developers to streamline your workflow.
          </p>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {developerTools.map((tool) => (
              <ToolCard
                key={tool.name}
                {...tool}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
