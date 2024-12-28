import { WordCounter } from "@/components/features/word-counter"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/sections/footer"

export const metadata = {
  title: 'Word Counter - ToolsKitt',
  description: 'Free online word counter with character count, reading time, and social media limits.',
}

export default function WordCounterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Word Counter</h1>
          <p className="text-muted-foreground">
            Count words, characters, and analyze your text with our free online word counter.
            Perfect for tweets, essays, and social media posts.
          </p>
        </div>
        <WordCounter />
      </main>
      <Footer />
    </div>
  )
}
