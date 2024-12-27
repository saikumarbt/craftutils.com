import Link from "next/link"
import { AuthButton } from "./auth/auth-button"
import { ThemeToggle } from "./theme-toggle"

export function Navbar() {
  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          WebTools
        </Link>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <AuthButton />
        </div>
      </nav>
    </header>
  )
}
