'use client'

import { LucideIcon } from "lucide-react"
import Link from "next/link"

interface CategoryCardProps {
  title: string
  description: string
  tools: string
  icon: LucideIcon
  href: string
  color: string
}

export function CategoryCard({ title, description, tools, icon: Icon, href, color }: CategoryCardProps) {
  return (
    <Link href={href}>
      <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-start gap-4">
          <div className={`rounded-lg p-3 ${color} transition-colors`}>
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {description}
            </p>
            <span className="text-xs font-medium bg-muted px-2.5 py-1 rounded-full">
              {tools}
            </span>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </Link>
  )
}
