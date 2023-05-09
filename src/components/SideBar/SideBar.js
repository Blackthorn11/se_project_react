import "../Profile/Profile.css";

export function SideBar({ currentUser, handleEditClick, handleLogout }) {
  return (
    <div className="profile__sidebar">
      <div className="profile__sidebar-header">
        <img
          className="profile__avatar"
          src={currentUser.avatar}
          alt="user avatar"
        />
        <p className="profile__user-name">{currentUser.name}</p>
      </div>
      <div className="profile__options">
        <p className="sidebar__profile-data" onClick={handleEditClick}>
          Edit Profile
        </p>
        <p className="sidebar__logout" onClick={handleLogout}>
          Log out
        </p>
      </div>
    </div>
  );
}
