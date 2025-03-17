import "./ModalWithForm.css";
import Modal from "../Modal/Modal";
import { useModalStore } from "../../Store/UseModalStore";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onSubmit,
  redirectText,
  clickHandler,
}) {
  const { closeActiveModal } = useModalStore();
  return (
    <Modal name="form" onClose={closeActiveModal} isOpen={isOpen}>
      <div
        className={`modal__content ${
          title === "New Post" ? "modal__content_size_wide" : ""
        }`}
      >
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close"
        />
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <div className="modal__submit-buttons">
            <button type="submit" className="modal__submit">
              {buttonText}
            </button>
          </div>
        </form>
        <button
          hidden={!redirectText}
          className="modal__redirect"
          onClick={clickHandler}
        >
          {redirectText}
        </button>
      </div>
    </Modal>
  );
}

export default ModalWithForm;
