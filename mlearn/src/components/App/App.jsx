import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import PostModal from "../PostModal/PostModal";
import Profile from "../Profile/Profile";
import AddPostModal from "../AddPostModal/AddPostModal";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import Tasks from "../Tasks/Tasks.jsx";

import { ModalContext } from "../../contexts/ModalContext.jsx";

const App = () => {
  const { activeModal } = useContext(ModalContext);

  return (
    <div className="page">
      <div className="page__content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
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
