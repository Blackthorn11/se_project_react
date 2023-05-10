import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({
  isOpen,
  onClose,
  onRegister,
  switchToLogin,
  isLoading,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({ name, avatar, email, password });
  }

  return (
    <ModalWithForm
      title="Sign up"
      isOpen={isOpen}
      buttonText={isLoading ? "Saving..." : "Sign up"}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <h4 className="form__label">Email</h4>
      <input
        className="form__input form__input_type_email"
        type="email"
        placeholder="Email"
        required
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        minLength="1"
        maxLength="30"
      />
      <h4 className="form__label">Password</h4>
      <input
        className="form__input form__input_type_password"
        type="password"
        placeholder="Password"
        required
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        minLength="5"
      />
      <h4 className="form__label">Name</h4>
      <input
        className="form__input form__input_type_name"
        type="text"
        placeholder="Name"
        required
        onChange={(e) => setName(e.target.value)}
        value={name}
        minLength="1"
        maxLength="30"
      />
      <h4 className="form__label">Avatar URL</h4>
      <input
        className="form__input form__input_type_avatar"
        type="url"
        placeholder="Avatar URL"
        required
        onChange={(e) => setAvatar(e.target.value)}
        value={avatar}
      />
      <p className="form__switch" onClick={switchToLogin}>
        or Log in
      </p>
    </ModalWithForm>
  );
};

export default RegisterModal;
