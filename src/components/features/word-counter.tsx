"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Twitter } from "lucide-react"

interface TextStats {
  words: number
  characters: number
  sentences: number
  paragraphs: number
  twitterLength: number
}

export function WordCounter() {
  const [text, setText] = useState("")
  const [stats, setStats] = useState<TextStats>({
    words: 0,
    characters: 0,
    sentences: 0,
    paragraphs: 0,
    twitterLength: 0
  })

  const TWITTER_LIMIT = 280

  useEffect(() => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0
    const characters = text.length
    const sentences = text.split(/[.!?]+/).filter(Boolean).length
    const paragraphs = text.split(/\n\s*\n/).filter(Boolean).length
    
    setStats({
      words,
      characters,
      sentences,
      paragraphs,
      twitterLength: characters
    })
  }, [text])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `Words: ${stats.words}
Characters: ${stats.characters}
Sentences: ${stats.sentences}
Paragraphs: ${stats.paragraphs}`
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <textarea
        className="w-full h-64 p-4 border rounded-lg bg-background resize-y"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="text-sm text-muted-foreground">Words</div>
          <div className="text-2xl font-bold">{stats.words}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-muted-foreground">Characters</div>
          <div className="text-2xl font-bold">{stats.characters}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-muted-foreground">Sentences</div>
          <div className="text-2xl font-bold">{stats.sentences}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-muted-foreground">Paragraphs</div>
          <div className="text-2xl font-bold">{stats.paragraphs}</div>
        </Card>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Twitter className="h-4 w-4" />
            <span className="text-sm text-muted-foreground">
              Twitter Character Limit: {stats.twitterLength}/{TWITTER_LIMIT}
            </span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div
              className={`h-full rounded-full transition-all ${
                stats.twitterLength > TWITTER_LIMIT
                  ? "bg-destructive"
                  : "bg-primary"
              }`}
              style={{
                width: `${Math.min(
                  (stats.twitterLength / TWITTER_LIMIT) * 100,
                  100
                )}%`,
              }}
            />
          </div>
        </div>
        <Button onClick={copyToClipboard}>Copy Stats</Button>
      </div>
    </div>
  )
}
