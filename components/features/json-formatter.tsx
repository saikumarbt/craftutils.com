'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Copy, Check, Loader2 } from "lucide-react"
import { toast } from "sonner"

export function JsonFormatter() {
  const [input, setText] = useState("")
  const [output, setOutput] = useState("")
  const [error, setError] = useState("")
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(false)

  const formatJSON = () => {
    if (!input.trim()) {
      toast.error("Please enter some JSON to format")
      return
    }

    try {
      setLoading(true)
      setError("")
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed, null, 2))
      toast.success("JSON formatted successfully")
    } catch (err) {
      setError("Invalid JSON: Please check your input")
      toast.error("Invalid JSON: Please check your input format")
      setOutput("")
    } finally {
      setLoading(false)
    }
  }

  const minifyJSON = () => {
    if (!input.trim()) {
      toast.error("Please enter some JSON to minify")
      return
    }

    try {
      setLoading(true)
      setError("")
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed))
      toast.success("JSON minified successfully")
    } catch (err) {
      setError("Invalid JSON: Please check your input")
      toast.error("Invalid JSON: Please check your input format")
      setOutput("")
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = () => {
    if (!output) return;
    
    const textArea = document.createElement('textarea');
    textArea.value = output;
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
      document.execCommand('copy');
      setCopied(true);
      toast.success("Copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy to clipboard");
    }
    
    document.body.removeChild(textArea);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="p-6">
        <div className="space-y-2">
          <textarea
            className="w-full h-64 p-4 border rounded-lg bg-background font-mono text-sm resize-y"
            value={input}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste your JSON here..."
            spellCheck="false"
          />
        </div>
        
        <div className="flex gap-2 mt-4">
          <Button onClick={formatJSON} disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Format"
            )}
          </Button>
          <Button onClick={minifyJSON} variant="secondary" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Minify"
            )}
          </Button>
        </div>
      </Card>

      {error && (
        <div className="bg-destructive/10 text-destructive p-4 rounded-lg">
          {error}
        </div>
      )}

      {output && (
        <Card className="p-6">
          <div className="flex justify-between items-center mb-2">
            <div className="text-sm text-muted-foreground">
              {output.length.toLocaleString()} characters
            </div>
            <Button
              variant="outline"
              size="sm"
              className="h-8 px-3 flex items-center gap-2"
              onClick={copyToClipboard}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>Copy</span>
                </>
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
