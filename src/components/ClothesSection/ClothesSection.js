import "../Profile/Profile.css";
import "../ItemCard/ItemCard.css";
import ItemCard from "../ItemCard/ItemCard";

export function ClothesSection({
  clothingItems,
  handleCardClick,
  openModal,
  currentUser,
  isLoggedIn,
  handleLikeClick,
}) {
  return (
    <div className="profile__clothing-section">
      <div className="profile__clothing-header">
        <p className="profile__clothing-section-title">Your items</p>
        <button className="profile__add-button" onClick={openModal}>
          + Add new
        </button>
      </div>
      <ul className="profile__card-list">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              isOpen="false"
              clothing={item}
              key={item._id}
              weather={item.weather}
              currentUser={currentUser}
              isLoggedIn={isLoggedIn}
              handleLikeClick={handleLikeClick}
              onClick={() => {
                handleCardClick(item);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
}
