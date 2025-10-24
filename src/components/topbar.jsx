'use client'

import { useRouter } from 'next/navigation'
import { useUserStore } from '@/store/userStore'
import { useEffect } from 'react'

const TopBar = () => {
  const router = useRouter()
  const { user, initializeGuest } = useUserStore()

  useEffect(() => {
    initializeGuest()
  }, [initializeGuest])

  return (
    <div className="h-12 bg-white border-b border-gray-200 flex items-center justify-between px-4 sticky top-0 z-50 shadow-sm">
      <span className="text-sm text-gray-700 font-normal">Untitled document</span>

      <div className="flex items-center gap-3">
        {user && (
          <span className="text-sm text-gray-600">
            {user.username || 'Guest'}
          </span>
        )}
        <button
          onClick={() => router.push('/login')}
          className="text-sm font-medium text-gray-700 border border-gray-300 rounded-md px-4 py-1.5 hover:bg-gray-50 transition"
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default TopBar
