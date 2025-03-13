import { create } from "zustand";
import { authorize, checkToken } from "../utils/auth";

export const useAuthStore = create((set) => ({
  currentUser: {
    id: null,
    name: "",
    password: "",
    email: "",
  },
  isLoggedIn: false,

  register: async (name, email, password) => {
    try {
      const response = await authorize(email, password);
      const userData = await checkToken(response.token);
      set({ currentUser: { ...userData.data, name }, isLoggedIn: true });
    } catch (error) {
      console.error("Registration failed", error);
    }
  },

  login: async (email, password) => {
    try {
      const response = await authorize(email, password);
      const userData = await checkToken(response.token);
      set({ currentUser: userData.data, isLoggedIn: true });
    } catch (error) {
      console.error("Login failed", error);
    }
  },

  logout: () => set({ currentUser: null, isLoggedIn: false }),
}));
