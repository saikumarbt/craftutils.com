import { LucideIcon } from "lucide-react"
import Link from "next/link"

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
}

export function FeatureCard({ title, description, icon: Icon, href }: FeatureCardProps) {
  return (
    <Link 
      href={href}
      className="group relative overflow-hidden rounded-xl border bg-background p-6 hover:border-primary transition-colors duration-200"
    >
      <div className="flex flex-col gap-4">
        <Icon className="h-8 w-8 text-primary transition-transform duration-200 group-hover:scale-110" />
        <div>
          <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-opacity opacity-0 group-hover:opacity-100" />
    </Link>
  )
}
