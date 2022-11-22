import "./Header.css";
import logo from "../../images/logo.png";
import avatarPic from "../../images/avatar.png";

function Header({ weatherData, openModal }) {
  if (!weatherData) return null;

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__container_logo">
        <img src={logo} alt="Webpage logo" className="header__logo" />
        <p className="header__date-with-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className="header__container_user">
        <button type="button" className="header__button" onClick={openModal}>
          + Add clothes
        </button>
        <p className="header__user">Terrence Tegegne</p>
        <img className="header__avatar" src={avatarPic} alt="Profile picture" />
      </div>
    </header>
  );
}

export default Header;
