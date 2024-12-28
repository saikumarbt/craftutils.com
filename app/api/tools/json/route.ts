import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { text } = await request.json()
    
    // Validate JSON
    const parsed = JSON.parse(text)
    
    // Format JSON with indentation
    const formatted = JSON.stringify(parsed, null, 2)
    
    return NextResponse.json({
      success: true,
      data: {
        formatted,
        valid: true
      }
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Invalid JSON format',
      details: (error as Error).message
    }, { status: 400 })
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'JSON Formatter API endpoint'
  })
}
