'use client'
import { create } from 'zustand'
import { createUser, getUser, updateUser } from '@/services/userServices'

export const useUserStore = create((set, get) => ({
  user: null,
  loading: false,

  initializeGuest: async () => {
    const existing = localStorage.getItem('collabo_user')
    if (existing) {
      const parsed = JSON.parse(existing)
      set({ user: parsed })
      return
    }

    set({ loading: true })
    const guest = await createUser({ username: `Guest_${Math.floor(Math.random() * 10000)}` })
    localStorage.setItem('collabo_user', JSON.stringify(guest))
    set({ user: guest, loading: false })
  },

  loginUser: async (email, username) => {
    const current = get().user
    if (!current) return

    const updated = await updateUser(current._id, {
      email,
      username,
    })

    localStorage.setItem('collabo_user', JSON.stringify(updated))
    set({ user: updated })
  },

  refreshUser: async () => {
    const current = get().user
    if (!current) return

    const fetched = await getUser(current._id)
    set({ user: fetched })
    localStorage.setItem('collabo_user', JSON.stringify(fetched))
  },

  clearUser: () => {
    localStorage.removeItem('collabo_user')
    set({ user: null })
  },
}))
