import { NextResponse } from 'next/server'

interface WordCountResponse {
  words: number
  characters: number
  sentences: number
  paragraphs: number
  twitterLength: number
}

export async function POST(request: Request) {
  try {
    const { text } = await request.json()
    
    const stats: WordCountResponse = {
      words: text.trim() ? text.trim().split(/\s+/).length : 0,
      characters: text.length,
      sentences: text.split(/[.!?]+/).filter(Boolean).length,
      paragraphs: text.split(/\n\s*\n/).filter(Boolean).length,
      twitterLength: text.length
    }
    
    return NextResponse.json({
      success: true,
      data: stats
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Failed to process text',
      details: (error as Error).message
    }, { status: 400 })
  }
}
