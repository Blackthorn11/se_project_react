import "./Header.css";
import logo from "../../images/logo.png";
import avatarPic from "../../images/avatar.png";
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";
import { NavLink } from "react-router-dom";

function Header({ weatherData, openModal }) {
  if (!weatherData) return null;

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__container_logo">
        <NavLink exact to="/" activeClassName="menu__item-active">
          <img src={logo} alt="Webpage logo" className="header__logo" />
        </NavLink>
        <p className="header__date-with-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className="header__container_user">
        <ToggleSwitch />
        <button type="button" className="header__button" onClick={openModal}>
          + Add clothes
        </button>
        <NavLink to="/profile" activeClassName="menu__item-active">
          <p className="header__user">Terrence Tegegne</p>
        </NavLink>
        <img className="header__avatar" src={avatarPic} alt="Profile picture" />
      </div>
    </header>
  );
}

export default Header;
