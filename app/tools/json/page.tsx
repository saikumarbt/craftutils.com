import { JsonFormatter } from "@/components/features/json-formatter"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/sections/footer"

export const metadata = {
  title: 'JSON Formatter - ToolsKitt',
  description: 'Free online JSON formatter, validator and minifier with syntax highlighting',
}

export default function JsonPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">JSON Formatter</h1>
          <p className="text-muted-foreground">
            Format, validate, and beautify your JSON data with our free online tool.
            Copy the formatted result with a single click.
          </p>
        </div>
        <JsonFormatter />
      </main>
      <Footer />
    </div>
  )
}
