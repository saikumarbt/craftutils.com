"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Copy, Check } from "lucide-react"

export function JsonFormatter() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [error, setError] = useState("")
  const [copied, setCopied] = useState(false)

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed, null, 2))
      setError("")
    } catch (e) {
      setError("Invalid JSON: Please check your input")
      setOutput("")
    }
  }

  const minifyJSON = () => {
    try {
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed))
      setError("")
    } catch (e) {
      setError("Invalid JSON: Please check your input")
      setOutput("")
    }
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="p-6">
        <div className="space-y-2">
          <textarea
            className="w-full h-64 p-4 border rounded-lg bg-background font-mono text-sm"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your JSON here..."
          />
        </div>
        
        <div className="flex gap-2 mt-4">
          <Button onClick={formatJSON}>Format</Button>
          <Button onClick={minifyJSON} variant="secondary">Minify</Button>
        </div>
      </Card>

      {error && (
        <div className="bg-destructive/10 text-destructive p-4 rounded-lg">
          {error}
        </div>
      )}

      {output && (
        <Card className="p-6">
          <div className="flex justify-end mb-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8"
              onClick={copyToClipboard}
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
          <pre className="bg-muted p-4 rounded-lg overflow-auto max-h-[500px] font-mono text-sm">
            <code>{output}</code>
          </pre>
        </Card>
      )}
    </div>
  )
}
