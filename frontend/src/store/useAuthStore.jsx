import { create } from "zustand"

export const useAuthStore = create((set, get) => ({
    user: undefined,
    checkAuth: async () => {
        try {
            const res = await fetch("https://solid-xylophone-69qrv597w99hrpxq-3000.app.github.dev/auth/me", {
                credentials: "include"
            })

            if (!res.ok) throw new Error(res.error)

            const data = await res.json()

            if (!data) return

            set((state) => ({ ...state, user: data }))
        } catch (error) {
            console.error(error)
        }
    },
    clearUser: () => {
        set((state) => ({...state, user: undefined}))
    }
}))