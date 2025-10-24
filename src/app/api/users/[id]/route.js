import connectDB from '@/lib/mongodb'
import User from '@/models/User'

export async function GET(req, { params }) {
  await connectDB()
  const { id } =  await params
  const user = await User.findById(id)
  if (!user) return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 })
  return new Response(JSON.stringify(user), { status: 200 })
}

export async function PUT(req, { params }) {
  await connectDB()
  const { id } = await params
  const body = await req.json()
  const { username, email } = body

  const user = await User.findById(id)
  if (!user) return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 })

  if (username) user.username = username
  if (email) {
    user.email = email
    user.isGuest = false
  }

  await user.save()
  return new Response(JSON.stringify(user), { status: 200 })
}


export async function DELETE(req, { params }) {
  await connectDB()
  const { id } =  await params
  const user = await User.findByIdAndDelete(id)
  if (!user) return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 })
  return new Response(JSON.stringify({ message: 'User deleted successfully' }), { status: 200 })
}
