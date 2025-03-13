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
  activeTab: "",

  setCurrentPost: (updatedFields) =>
    set((state) => ({
      currentPost: { ...state.currentPost, ...updatedFields },
    })),

  setPostData: (newPost) =>
    set((state) => {
      if (Array.isArray(newPost)) {
        return { postData: newPost };
      }

      if (!newPost || typeof newPost !== "object") {
        console.error("Invalid post data:", newPost);
        return state;
      }

      const { title, post } = newPost;
      if (!title?.trim() || !post?.trim()) {
        console.error(
          "Invalid post: It must have a title and content",
          newPost
        );
        return state;
      }

      return {
        postData: [...state.postData, newPost],
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

  removePost: (postId) =>
    set((state) => ({
      postData: state.postData.filter((post) => post.id !== postId),
    })),
}));
