'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useUserStore } from '@/store/userStore'

export default function LoginPage() {
  const router = useRouter()
  const { loginUser } = useUserStore()
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')

  const handleLogin = async () => {
    await loginUser(email, username)
    router.push('/')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow p-6 rounded-lg w-80">
        <h2 className="text-lg font-semibold mb-4">Login</h2>
        <input
          type="text"
          placeholder="Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full mb-3 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full mb-3 rounded"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded w-full"
        >
          Continue
        </button>
      </div>
    </div>
  )
}
