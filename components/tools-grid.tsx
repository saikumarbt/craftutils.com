import { 
  Braces, Type, Calculator, ArrowLeftRight, 
  FileText, Code, Hash, Clock, 
  Percent, Binary, FileJson, Regex,
  TextQuote, Link2, FileSpreadsheet
} from "lucide-react"
import { ToolCard } from "./tool-card"

const tools = [
  {
    title: "Popular Tools",
    items: [
      { 
        name: "JSON Formatter", 
        icon: Braces, 
        href: "/tools/json", 
        description: "Format, validate and beautify JSON with syntax highlighting",
        isNew: false
      },
      { 
        name: "Word Counter", 
        icon: Type, 
        href: "/tools/word-counter", 
        description: "Count words, characters with Twitter post limit checker",
        isNew: false
      },
      { 
        name: "Text Formatter", 
        icon: FileText, 
        href: "/tools/text-formatter", 
        description: "Clean and format text with various options",
        isNew: true
      }
    ]
  },
  {
    title: "Developer Tools",
    items: [
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
  },
  {
    title: "Converters & Calculators",
    items: [
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
      }
    ]
  },
  {
    title: "Text Tools",
    items: [
      { 
        name: "Lorem Ipsum Generator", 
        icon: TextQuote, 
        href: "/tools/lorem-ipsum", 
        description: "Generate placeholder text with customization",
        isNew: false
      },
      { 
        name: "URL Encoder/Decoder", 
        icon: Link2, 
        href: "/tools/url-codec", 
        description: "Encode and decode URLs with special characters",
        isNew: false
      },
      { 
        name: "CSV to JSON", 
        icon: FileSpreadsheet, 
        href: "/tools/csv-json", 
        description: "Convert between CSV and JSON formats",
        isNew: true
      }
    ]
  }
]

export function ToolsGrid() {
  return (
    <div className="py-12 container px-4 mx-auto">
      {tools.map((category) => (
        <div key={category.title} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {category.items.map((tool) => (
              <ToolCard
                key={tool.name}
                name={tool.name}
                description={tool.description}
                icon={tool.icon}
                href={tool.href}
                isNew={tool.isNew}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
