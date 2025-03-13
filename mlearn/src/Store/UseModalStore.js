import { create } from "zustand";

export const useModalStore = create((set) => ({
  activeModal: "",
  selectedCard: {},

  setSelectedCard: (card) => set({ selectedCard: card }), // Added to allow independent updates
  closeActiveModal: () => set({ activeModal: "" }),
  handleAddClick: () => set({ activeModal: "add-post" }),
  handleLoginClick: () => set({ activeModal: "Login" }),
  handleRegisterClick: () => set({ activeModal: "register" }),
  handleUpdateProfileClick: () => set({ activeModal: "update profile" }),
  handleCardClick: (post) =>
    set({ activeModal: "preview", selectedCard: post }),
  handleConfirmationDeleteClick: () => set({ activeModal: "confirmation" }),
}));
