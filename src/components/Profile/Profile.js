import "./Profile.css";
import { SideBar } from "../SideBar/SideBar";
import { ClothesSection } from "../ClothesSection/ClothesSection";

export function Profile({ clothingItems, handleCardClick, openModal }) {
  return (
    <div className="profile__wrapper">
      <SideBar />
      <ClothesSection
        clothingItems={clothingItems}
        handleCardClick={handleCardClick}
        openModal={openModal}
      />
    </div>
  );
}
