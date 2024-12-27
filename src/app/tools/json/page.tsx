import { JsonFormatter } from "@/components/features/json-formatter"

export default function JsonPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">JSON Formatter</h1>
      <JsonFormatter />
    </div>
  )
}
