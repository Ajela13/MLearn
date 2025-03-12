import { create } from "zustand";

export const usePostStore = create((set) => ({
  postData: [],
  currentPost: { id: null, title: "", post: "<h2>Start here...</h2>" }, // Post en edición

  setCurrentPost: (updatedFields) =>
    set((state) => ({
      currentPost: { ...state.currentPost, ...updatedFields },
    })),

  setPostData: (newPost) =>
    set((state) => {
      if (!newPost.title.trim() || !newPost.post.trim()) {
        console.error("It must have a title and content");
        return state; // No actualiza el estado si falta información
      }

      return {
        postData: [...state.postData, newPost], // Agrega el nuevo post
      };
    }),
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
