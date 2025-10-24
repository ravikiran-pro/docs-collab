import { getRandomColor } from '@/constants/helper'
import connectDB from '@/lib/mongodb'
import User from '@/models/User'
import { v4 as uuidv4 } from 'uuid'

export async function POST(req) {
  await connectDB()
  const body = await req.json()
  const { username, email } = body

  if (!username) return new Response(JSON.stringify({ error: 'Username is required' }), { status: 400 })

  const user = await User.create({
    username,
    email: email || null,
    avatarColor: getRandomColor(),
    sessionId: uuidv4(),
    isGuest: !email
  })

  return new Response(JSON.stringify(user), { status: 201 })
}

export async function GET() {
  await connectDB()
  const users = await User.find()
  return new Response(JSON.stringify(users), { status: 200 })
}
