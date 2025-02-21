import "./AddPostModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Editor from "../Editor/Editor";
import { useEffect } from "react";
import { usePost } from "../../contexts/PostContext";

function AddPostModal({ isOpen }) {
  const { postData, setPostData } = usePost();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", postData);
    // setPostData({ title: "", post: "<h2>Start here...</h2>" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (isOpen) {
      console.log(postData);
      setPostData((prevData) => ({
        ...prevData,
      }));
    }
  }, [isOpen, setPostData]);

  return (
    <ModalWithForm
      title="New Post"
      buttonText="Add Post"
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="title" className="modal__label">
        Title
        <input
          id="title"
          type="text"
          value={postData.title}
          className="modal__input"
          placeholder="Title"
          onChange={handleChange}
          name="title"
        />
      </label>
      <Editor isOpen={isOpen} />
    </ModalWithForm>
  );
}

export default AddPostModal;
