import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useAuthStore } from "../../Store/UseAuthStore";
import { useModalStore } from "../../Store/UseModalStore";

function RegisterModal({ isOpen }) {
  const { register } = useAuthStore();
  const { handleLoginClick, closeActiveModal } = useModalStore();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  useEffect(() => {
    if (isOpen) {
      setData({ name: "", email: "", password: "" });
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(data.name, data.email, data.password);
      closeActiveModal();
    } catch (error) {
      console.error("Register error:", error);
      alert("Try register again.");
    }
  };

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      isOpen={isOpen}
      redirectText="or Log in"
      onSubmit={handleSubmit}
      clickHandler={handleLoginClick}
    >
      <label htmlFor="signUp-email" className="modal__label">
        Email*
        <input
          id="signUp-email"
          type="email"
          value={data.email}
          className="modal__input"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          required
        />
      </label>

      <label htmlFor="signUp-password" className="modal__label">
        Password*
        <input
          type="password"
          className="modal__input"
          id="signUp-password"
          value={data.password}
          placeholder="Password"
          onChange={handleChange}
          name="password"
          required
        />
      </label>

      <label htmlFor="signUp-name" className="modal__label">
        Name*
        <input
          type="text"
          className="modal__input"
          id="signUp-name"
          value={data.name}
          placeholder="Name"
          onChange={handleChange}
          name="name"
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
