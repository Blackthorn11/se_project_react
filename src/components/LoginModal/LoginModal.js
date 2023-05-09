import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useHistory } from "react-router-dom";

const LoginModal = ({
  isOpen,
  onClose,
  onLogin,
  switchToRegister,
  isLoading,
}) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({ email, password });
    history.push("/profile");
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
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        minLength={1}
        maxLength={30}
      />
      <label className="form__label">Password</label>
      <input
        className="form__input form__input_type_password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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
