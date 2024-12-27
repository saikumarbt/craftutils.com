"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function JsonFormatter() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [error, setError] = useState("")

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed, null, 2))
      setError("")
    } catch (e) {
      setError("Invalid JSON")
      setOutput("")
    }
  }

  const minifyJSON = () => {
    try {
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed))
      setError("")
    } catch (e) {
      setError("Invalid JSON")
      setOutput("")
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output)
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      <div className="space-y-2">
        <textarea
          className="w-full h-64 p-4 border rounded-lg bg-background"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste your JSON here..."
        />
      </div>
      
      <div className="flex gap-2">
        <Button onClick={formatJSON}>Format</Button>
        <Button onClick={minifyJSON} variant="secondary">Minify</Button>
        {output && <Button onClick={copyToClipboard}>Copy</Button>}
      </div>

      {error && (
        <div className="text-red-500 p-2 rounded bg-red-100">{error}</div>
      )}

      {output && (
        <pre className="bg-muted p-4 rounded-lg overflow-auto">
          <code>{output}</code>
        </pre>
      )}
    </div>
  )
}
