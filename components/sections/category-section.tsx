'use client'

import { CategoryCard } from "@/components/category-card"
import { 
  FileText, Code, ArrowLeftRight, 
  Image, Video, FileSpreadsheet 
} from "lucide-react"

const categories = [
  {
    title: "Text Tools",
    icon: FileText,
    description: "Word counter, formatters, and text analysis tools",
    tools: "15+ tools",
    href: "/tools/text",
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "Developer Tools",
    icon: Code,
    description: "JSON formatter, encoders, and code utilities",
    tools: "10+ tools",
    href: "/tools/developer",
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    title: "Converters",
    icon: ArrowLeftRight,
    description: "Unit converters and file format converters",
    tools: "12+ tools",
    href: "/tools/converters",
    color: "bg-green-500/10 text-green-500"
  },
  {
    title: "Image Tools",
    icon: Image,
    description: "Image editors, converters, and optimizers",
    tools: "8+ tools",
    href: "/tools/image",
    color: "bg-orange-500/10 text-orange-500"
  },
  {
    title: "Video Tools",
    icon: Video,
    description: "Video converters and basic editors",
    tools: "5+ tools",
    href: "/tools/video",
    color: "bg-red-500/10 text-red-500"
  },
  {
    title: "File Tools",
    icon: FileSpreadsheet,
    description: "File converters and utilities",
    tools: "7+ tools",
    href: "/tools/file",
    color: "bg-teal-500/10 text-teal-500"
  }
]

export function CategorySection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">All Tools</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  )
}
