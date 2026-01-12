import { create } from "zustand";

const useAppStore = create((set, get) => ({
    currentClicks: 0,
    setCurentClicks: (amount) => set((state) => ({...state, currentClicks: amount})),
    leaderboard: [
        {userId: 1, email: "ktoto@gdeto.ru", clicks: 678},
        {userId: 2, email: "gdeto@gdeto.ru", clicks: 783},
        {userId: 3, email: "tamto@gdeto.ru", clicks: 94},
    ]
}))

export default useAppStore