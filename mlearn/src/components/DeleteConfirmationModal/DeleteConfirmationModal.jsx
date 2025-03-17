import Modal from "../Modal/Modal";
import "./DeleteConfirmationModal.css";
import { usePostStore } from "../../Store/UsePostStore";
import { useModalStore } from "../../Store/UseModalStore";

function DeleteConfirmationModal({ isOpen }) {
  const { removePost } = usePostStore();
  const { closeActiveModal, selectedCard } = useModalStore();
  console.log(selectedCard);
  const handleDeletePost = (selectedId) => {
    removePost(selectedId);
    closeActiveModal();
  };

  return (
    <Modal name="confirmation" onClose={closeActiveModal} isOpen={isOpen}>
      <div className="modal__confirmation-content ">
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close-confirmation"
        ></button>
        <p className="modal__confirmation-title">
          Are you sure you want to delete this item? This action is
          irreversible.
        </p>
        <button
          className="modal__confirmation-delete"
          type="button"
          onClick={() => {
            handleDeletePost(selectedCard.id);
          }}
        >
          Yes, delete item
        </button>
        <button
          className="modal__confirmation-cancel"
          type="button"
          onClick={closeActiveModal}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
}
export default DeleteConfirmationModal;
