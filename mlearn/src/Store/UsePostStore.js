import { create } from "zustand";

export const usePostStore = create((set) => ({
  postData: [],
  currentPost: {
    id: null,
    title: "",
    post: "<h2>Start here...</h2>",
    savedBy: "",
    createdBy: [],
    date: "",
  },
  visibleCount: 3,
  activeTab: "created",

  setCurrentPost: (updatedFields) =>
    set((state) => ({
      currentPost: { ...state.currentPost, ...updatedFields },
    })),

  setPostData: (newPost) =>
    set((state) => {
      if (!newPost.title.trim() || !newPost.post.trim()) {
        console.error("It must have a title and content");
        return state;
      }

      return {
        postData: [...state.postData, newPost], // Agrega el nuevo post
      };
    }),

  increaseVisibleCount: () =>
    set((state) => ({ visibleCount: state.visibleCount + 3 })),

  toggleSavePost: (postId, userId) =>
    set((state) => ({
      postData: state.postData.map((post) =>
        post.id === postId
          ? {
              ...post,
              savedBy: post.savedBy.includes(userId)
                ? post.savedBy.filter((id) => id !== userId) // Elimina el ID
                : [...post.savedBy, userId], // Agrega el ID
            }
          : post
      ),
    })),

  setActiveTab: (tab) => set({ activeTab: tab }), // 🔹 Función para cambiar de pestaña

  // removePost: (postId) =>
  //   set((state) => ({
  //     postData: state.postData.filter((post) => post.id !== postId),
  //   })),

  // updatePost: (updatedPost) =>
  //   set((state) => ({
  //     postData: state.postData.map((post) =>
  //       post.id === updatedPost.id ? updatedPost : post
  //     ),
  //   })),
}));
