"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Clipboard, 
  Trash2, 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin,
  Clock,
  GraduationCap
} from "lucide-react"
import { toast } from "sonner"
import { motion } from "framer-motion"

interface TextStats {
  words: number
  characters: number
  charactersNoSpaces: number
  sentences: number
  paragraphs: number
  readingTime: string
  gradeLevel: string
}

const SOCIAL_LIMITS = {
  instagram: 150,
  facebook: 250,
  twitter: 280,
  linkedin: 300
}

export function WordCounter() {
  const [text, setText] = useState("")
  const [stats, setStats] = useState<TextStats>({
    words: 0,
    characters: 0,
    charactersNoSpaces: 0,
    sentences: 0,
    paragraphs: 0,
    readingTime: "0m 0s",
    gradeLevel: "-"
  })

  useEffect(() => {
    const calculateStats = () => {
      if (!text.trim()) {
        setStats({
          words: 0,
          characters: 0,
          charactersNoSpaces: 0,
          sentences: 0,
          paragraphs: 0,
          readingTime: "0m 0s",
          gradeLevel: "-"
        })
        return
      }

      const words = text.trim().split(/\s+/).length
      const characters = text.length
      const charactersNoSpaces = text.replace(/\s/g, "").length
      const sentences = text.split(/[.!?]+\s*/).filter(Boolean).length
      const paragraphs = text.split(/\n\s*\n/).filter(Boolean).length
      
      // Calculate reading time (200 words per minute)
      const minutes = Math.floor(words / 200)
      const seconds = Math.floor((words % 200) / (200 / 60))
      const readingTime = `${minutes}m ${seconds}s`

      // Simple grade level estimation
      const avgWordsPerSentence = words / (sentences || 1)
      const gradeLevel = avgWordsPerSentence > 20 ? "Graduate" : 
                        avgWordsPerSentence > 15 ? "College" :
                        avgWordsPerSentence > 10 ? "High School" : "Basic"

      setStats({
        words,
        characters,
        charactersNoSpaces,
        sentences,
        paragraphs,
        readingTime,
        gradeLevel
      })
    }

    const timeoutId = setTimeout(calculateStats, 300)
    return () => clearTimeout(timeoutId)
  }, [text])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text)
      toast.success("Text copied to clipboard!")
    } catch (err) {
      toast.error("Failed to copy text")
    }
  }

  const clearText = () => {
    setText("")
    toast.success("Text cleared!")
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Main Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card className="p-4 text-center">
          <div className="text-3xl font-bold text-primary">{stats.words}</div>
          <div className="text-sm text-muted-foreground">Words</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-3xl font-bold text-primary">{stats.characters}</div>
          <div className="text-sm text-muted-foreground">Characters</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-3xl font-bold text-primary">{stats.sentences}</div>
          <div className="text-sm text-muted-foreground">Sentences</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-3xl font-bold text-primary">{stats.paragraphs}</div>
          <div className="text-sm text-muted-foreground">Paragraphs</div>
        </Card>
      </div>

      {/* Text Input */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Reading time: {stats.readingTime}</span>
            <GraduationCap className="h-4 w-4 text-muted-foreground ml-4" />
            <span className="text-sm text-muted-foreground">Level: {stats.gradeLevel}</span>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" onClick={clearText}>
              <Trash2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={copyToClipboard}>
              <Clipboard className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <textarea
          className="w-full h-64 p-4 border rounded-lg bg-background resize-none font-mono text-sm"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here..."
          spellCheck="false"
        />
      </Card>

      {/* Social Media Limits */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4">Social Media Character Limits</h3>
        <div className="space-y-4">
          {Object.entries(SOCIAL_LIMITS).map(([platform, limit]) => (
            <div key={platform} className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  {platform === 'instagram' && <Instagram className="h-4 w-4" />}
                  {platform === 'facebook' && <Facebook className="h-4 w-4" />}
                  {platform === 'twitter' && <Twitter className="h-4 w-4" />}
                  {platform === 'linkedin' && <Linkedin className="h-4 w-4" />}
                  <span className="capitalize text-sm">{platform}</span>
                </div>
                <span className="text-sm font-mono">
                  {stats.characters}/{limit}
                </span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className={`h-full transition-all ${
                    stats.characters > limit ? 'bg-destructive' : 'bg-primary'
                  }`}
                  style={{ width: `${Math.min((stats.characters / limit) * 100, 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
