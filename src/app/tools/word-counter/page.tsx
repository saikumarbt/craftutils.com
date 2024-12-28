import { WordCounter } from "@/components/features/word-counter"

export default function WordCounterPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Word Counter</h1>
      <WordCounter />
    </div>
  )
}
