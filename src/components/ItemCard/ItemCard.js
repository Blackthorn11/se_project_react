import "./ItemCard.css";

function ItemCard({
  clothing,
  onClick,
  handleLikeClick,
  isLoggedIn,
  currentUser,
}) {
  const isLiked = clothing.likes.some((user) => user === currentUser._id);

  const itemLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_liked" : "card__like-button"
  } `;

  return (
    <li className="card">
      <img
        className="card__image"
        src={clothing.imageUrl}
        alt={clothing.name}
        onClick={onClick}
      />
      <div className="card__title">
        {clothing.name}
        {isLoggedIn ? (
          <button
            type="button"
            className={itemLikeButtonClassName}
            onClick={() => {
              handleLikeClick(clothing._id, !isLiked);
            }}
          ></button>
        ) : (
          <button type="button" className="card__like-button_hidden"></button>
        )}
      </div>
    </li>
  );
}

export default ItemCard;
