import "../Profile/Profile.css";
import avatar from "../../images/avatar.png";

export function SideBar() {
  return (
    <div className="profile__sidebar">
      <div className="profile__sidebar-header">
        <img className="profile__avatar" src={avatar} alt="user avatar" />
        <p className="profile__user-name">Terrence Tegegne</p>
      </div>
    </div>
  );
}
