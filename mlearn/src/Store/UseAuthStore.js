import { create } from "zustand";

export const useAuthStore = create((set) => ({
  currentUser: null,
  isLoggedIn: false,

  setCurrentUser: (userData) => set({ currentUser: userData }),
  setLoggedIn: () => set((state) => ({ isLoggedIn: !state.isLoggedIn })),
}));
