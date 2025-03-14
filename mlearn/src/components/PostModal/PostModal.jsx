import Modal from "../Modal/Modal";
import "./PostModal.css";
import { useModalStore } from "../../Store/UseModalStore";
import SafeHtmlContent from "../SafeHtmlContent/SafeHtmlContent";
import { useAuthStore } from "../../Store/UseAuthStore";

function PostModal({ isOpen }) {
  const { currentUser } = useAuthStore();
  const { closeActiveModal, handleConfirmationDeleteClick, selectedCard } =
    useModalStore();
  const post = selectedCard;
  console.log(post);

  return (
    <Modal name="preview" onClose={closeActiveModal} isOpen={isOpen}>
      <div className="modal__preview-content">
        <p className="modal__preview-date">{post.date}</p>
        <h2 className="modal__preview-title"> {post.title}</h2>
        <div className="modal__preview-scroll">
          <SafeHtmlContent html={post.post} />
        </div>
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close-preview"
        ></button>
        <div className="modal__footer">
          <p className="modal__author">{post.createdBy}</p>
          <button
            className="modal__delete"
            type="button"
            onClick={handleConfirmationDeleteClick}
            hidden={!(currentUser.id == selectedCard.createdBy)}
          >
            Delete item
          </button>{" "}
        </div>
      </div>
    </Modal>
  );
}

export default PostModal;
