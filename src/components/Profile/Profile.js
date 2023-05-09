import "./Profile.css";
import { SideBar } from "../SideBar/SideBar";
import { ClothesSection } from "../ClothesSection/ClothesSection";

export function Profile({
  clothingItems,
  handleCardClick,
  openModal,
  currentUser,
  handleEditClick,
  handleLogout,
  isLoggedIn,
  handleLikeClick,
}) {
  return (
    <div className="profile__wrapper">
      <SideBar
        currentUser={currentUser}
        handleEditClick={handleEditClick}
        handleLogout={handleLogout}
      />
      <ClothesSection
        clothingItems={clothingItems}
        handleCardClick={handleCardClick}
        openModal={openModal}
        currentUser={currentUser}
        isLoggedIn={isLoggedIn}
        handleLikeClick={handleLikeClick}
      />
    </div>
  );
}
