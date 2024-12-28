import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/sections/footer"
import { ToolCard } from "@/components/tool-card"
import { ArrowLeftRight, Binary, Percent, Clock, FileSpreadsheet, Link2 } from "lucide-react"

const converterTools = [
  { 
    name: "Unit Converter", 
    icon: ArrowLeftRight, 
    href: "/tools/unit-converter", 
    description: "Convert between different units of measurement",
    isNew: false
  },
  { 
    name: "Number Base", 
    icon: Binary, 
    href: "/tools/number-base", 
    description: "Convert between decimal, binary, hex, and octal",
    isNew: false
  },
  { 
    name: "Percentage Calculator", 
    icon: Percent, 
    href: "/tools/percentage", 
    description: "Calculate percentages and differences",
    isNew: true
  },
  { 
    name: "CSV to JSON", 
    icon: FileSpreadsheet, 
    href: "/tools/csv-json", 
    description: "Convert between CSV and JSON formats",
    isNew: true
  }
]

export default function ConverterToolsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-6">Converters & Calculators</h1>
          <p className="text-muted-foreground mb-8">
            Convert between different formats and perform calculations with ease.
          </p>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {converterTools.map((tool) => (
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
