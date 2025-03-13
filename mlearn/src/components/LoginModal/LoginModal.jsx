import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useModalStore } from "../../Store/UseModalStore";
import { useAuthStore } from "../../Store/UseAuthStore";

function LoginModal({ isOpen }) {
  const { handleRegisterClick, closeActiveModal } = useModalStore();
  const { login } = useAuthStore();

  const [data, setData] = useState({
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
      setData({ email: "", password: "" });
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(data.email, data.password);
      closeActiveModal();
    } catch (error) {
      console.error("Login error:", error);
      alert("Try again");
    }
  };

  return (
    <ModalWithForm
      title="Log in"
      buttonText="Log in"
      isOpen={isOpen}
      onSubmit={handleSubmit}
      redirectText="or Sign Up"
      clickHandler={handleRegisterClick}
    >
      <label htmlFor="login-email" className="modal__label">
        Email
        <input
          id="login-email"
          type="email"
          value={data.email}
          className="modal__input"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          required
        />
      </label>

      <label htmlFor="login-password" className="modal__label">
        Password
        <input
          id="login-password"
          type="password"
          value={data.password}
          className="modal__input"
          placeholder="Password"
          onChange={handleChange}
          name="password"
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
