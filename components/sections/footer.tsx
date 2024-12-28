import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-12 mt-auto">
      <div className="container px-4 mx-auto">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">ToolsKitt</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Your comprehensive toolkit for online utilities and converters.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/tools" className="text-muted-foreground hover:text-foreground">
                    All Tools
                  </Link>
                </li>
                <li>
                  <Link href="/tools/developer" className="text-muted-foreground hover:text-foreground">
                    Developer Tools
                  </Link>
                </li>
                <li>
                  <Link href="/tools/converters" className="text-muted-foreground hover:text-foreground">
                    Converters
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
          <p>© {new Date().getFullYear()} ToolsKitt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
