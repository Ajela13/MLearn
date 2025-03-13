import "./App.css";
import React from "react";
import { useModalStore } from "../../Store/UseModalStore.js";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import PostModal from "../PostModal/PostModal";
import Profile from "../Profile/Profile";
import AddPostModal from "../AddPostModal/AddPostModal";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import Tasks from "../Tasks/Tasks.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import { getPosts } from "../../utils/api.js";
import { usePostStore } from "../../Store/UsePostStore.js";
import { useAuthStore } from "../../Store/UseAuthStore.js";

const App = () => {
  const { activeModal } = useModalStore();
  const { setPostData } = usePostStore();
  const { isLoggedIn } = useAuthStore();
  useEffect(() => {
    getPosts().then(setPostData);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
        <Footer />
      </div>
      <AddPostModal isOpen={activeModal === "add-post"} />
      <PostModal isOpen={activeModal == "preview"} />
      <LoginModal isOpen={activeModal == "Login"} />
      <RegisterModal isOpen={activeModal == "register"} />
    </div>
  );
};

export default App;
