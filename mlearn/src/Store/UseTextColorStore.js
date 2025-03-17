import { create } from "zustand";
import { useLocation } from "react-router-dom";

export const useTextColorStore = create((set, get) => ({
  textColor: "white",
  updateTextColor: () => {
    const location = useLocation();
    set({ textColor: location === "/profile" ? "black" : "white" });
  },
}));
