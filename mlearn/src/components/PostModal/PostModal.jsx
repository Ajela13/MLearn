import Modal from "../Modal/Modal";
import "./PostModal.css";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { usePost } from "../../contexts/PostContext";
import SafeHtmlContent from "../SafeHtmlContent/SafeHtmlContent";
function PostModal({ isOpen }) {
  const { postData } = usePost();
  const { closeActiveModal, handleConfirmationDeleteClick, selectedCard } =
    useContext(ModalContext);
  const card = selectedCard;
  return (
    <Modal name="preview" onClose={closeActiveModal} isOpen={isOpen}>
      <div className="modal__preview-content">
        <p className="modal__preview-date">Post date</p>
        <h2 className="modal__preview-title"> {postData.title}</h2>
        <SafeHtmlContent html={postData.post} />
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close-preview"
        ></button>
        <div className="modal__footer">
          <p className="modal__author">Author</p>
          <button className="modal__delete" type="button">
            Delete item
          </button>{" "}
        </div>
      </div>
    </Modal>
  );
}

export default PostModal;
