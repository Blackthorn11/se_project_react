import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({
  isOpen,
  onClose,
  onLogin,
  switchToRegister,
  isLoading,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({ email, password });
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Log In"
      buttonText={isLoading ? "Logging in..." : "Log in"}
    >
      <h4 className="form__label">Email</h4>
      <input
        className="form__input form__input_type_email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Email"
        required
        minLength={1}
        maxLength={30}
      />
      <label className="form__label">Password</label>
      <input
        className="form__input form__input_type_password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Password"
        required
        minLength={4}
        maxLength={35}
      />
      <p className="form__switch" onClick={switchToRegister}>
        or Register
      </p>
    </ModalWithForm>
  );
};
export default LoginModal;
