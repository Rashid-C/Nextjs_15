import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: 'hello from api in nextjs < 15' })
}

export async function POST(req: Request) {
  const data = await req.json()
  const { name } = data
  return NextResponse.json({ message: `this si the name: ${name}` })
}
