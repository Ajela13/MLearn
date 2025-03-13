import "./AddPostModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Editor from "../Editor/Editor";
import { usePostStore } from "../../Store/UsePostStore";
import { useModalStore } from "../../Store/UseModalStore";
import { useAuthStore } from "../../Store/UseAuthStore";

function AddPostModal({ isOpen }) {
  const { currentPost, setCurrentPost, setPostData } = usePostStore();
  const { closeActiveModal } = useModalStore();
  const { currentUser } = useAuthStore();
  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      ...currentPost,
      id: Date.now(),
      createdBy: currentUser.id,
      date: new Date().toISOString().split("T")[0],
    };

    setPostData(newPost);

    setCurrentPost({
      title: "",
      post: "<h2>Start here...</h2>",
      savedBy: [],
      createdBy: "",
      date: "",
    });
    closeActiveModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentPost({ [name]: value });
  };

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
          value={currentPost.title}
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
