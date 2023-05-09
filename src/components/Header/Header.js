import "./Header.css";
import logo from "../../images/logo.png";
// import avatarPic from "../../images/avatar.png";
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header({
  weatherData,
  openModal,
  isLoggedIn,
  handleRegister,
  handleLogin,
}) {
  const currentUser = useContext(CurrentUserContext);
  if (!weatherData) return null;

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__container_logo">
        <NavLink to="/" activeClassName="menu__item-active">
          <img src={logo} alt="Webpage logo" className="header__logo" />
        </NavLink>
        <p className="header__date-with-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className="header__container_user">
        <ToggleSwitch />
        {isLoggedIn ? (
          <>
            <button
              type="button"
              className="header__button"
              onClick={openModal}
            >
              + Add clothes
            </button>
            <NavLink to="/profile" activeClassName="menu__item-active">
              <p className="header__user">{currentUser.name}</p>
            </NavLink>
            <img
              className="header__avatar"
              src={currentUser.avatar}
              alt="User avatar"
            />
          </>
        ) : (
          <>
            <button
              className="nav__register-button"
              type="button"
              onClick={handleRegister}
            >
              Sign up
            </button>
            <button
              className="nav__login-button"
              type="button"
              onClick={handleLogin}
            >
              Log in
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
