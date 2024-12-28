import { LucideIcon } from "lucide-react"
import Link from "next/link"
import { Card } from "@/components/ui/card"

interface ToolCardProps {
  name: string
  description: string
  icon: LucideIcon
  href: string
  isNew?: boolean
}

export function ToolCard({ name, description, icon: Icon, href, isNew }: ToolCardProps) {
  return (
    <Link href={href} className="block">
      <Card className="group h-full p-6 hover:shadow-md transition-all hover:border-primary relative">
        {isNew && (
          <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
            New
          </span>
        )}
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  )
}
