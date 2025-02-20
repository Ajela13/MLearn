import { createContext, useState, useContext } from "react";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [postData, setPostData] = useState({
    title: "Title",
    post: "Start here...",
  });

  return (
    <PostContext.Provider value={{ postData, setPostData }}>
      {children}
    </PostContext.Provider>
  );
};

// Custom hook to use PostContext
export const usePost = () => useContext(PostContext);
