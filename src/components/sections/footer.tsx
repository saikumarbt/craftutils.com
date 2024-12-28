import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-12 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">WebTools</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Professional web tools to enhance your development workflow.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Tools</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/tools/json" className="text-muted-foreground hover:text-foreground">
                    JSON Formatter
                  </Link>
                </li>
                <li>
                  <Link href="/tools/word-counter" className="text-muted-foreground hover:text-foreground">
                    Word Counter
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} WebTools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
