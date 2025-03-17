import { create } from "zustand";

export const useModalStore = create((set) => ({
  activeModal: "",
  selectedCard: {},
  menuOpen: false,

  setMenuOpen: (menuOpen) => set({ menuOpen }),
  setSelectedCard: (card) => set({ selectedCard: card }), // Added to allow independent updates
  closeActiveModal: () => set({ activeModal: "" }),
  handleAddClick: () => set({ activeModal: "add-post", menuOpen: false }),
  handleLoginClick: () => set({ activeModal: "Login", menuOpen: false }),
  handleRegisterClick: () => set({ activeModal: "register", menuOpen: false }),
  handleUpdateProfileClick: () => set({ activeModal: "update profile" }),
  handleCardClick: (post) =>
    set({ activeModal: "preview", selectedCard: post }),
  handleConfirmationDeleteClick: () => set({ activeModal: "confirmation" }),
}));
