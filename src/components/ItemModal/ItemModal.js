import "./ItemModal.css";

function ItemModal({
  isOpen,
  name,
  card,
  onClose,
  handleDeleteModal,
  onClick,
  currentUser,
}) {
  const isOwn = card.owner === currentUser._id;
  const itemDeleteButtonClassName = `item-modal__delete ${
    isOwn ? "item-modal__delete" : "item-modal__delete_hidden"
  }`;
  return (
    <div
      className={
        isOpen
          ? `item-modal modal_type_${name}`
          : `modal_type_${name} item-modal_hidden`
      }
      onClick={onClick}
    >
      <div className="item-modal__container">
        <button
          onClick={onClose}
          type="button"
          className="item-modal__close"
          alt="close button"
        ></button>
        <img
          src={card.imageUrl}
          alt={`${card.name}`}
          className="item-modal__image"
        />
        <p className="item-modal__title">{card.name}</p>
        <p className="item-modal__desc">Weather: {card.weather}</p>
        <button
          type="button"
          className={itemDeleteButtonClassName}
          onClick={handleDeleteModal}
        >
          Delete Item
        </button>
      </div>
    </div>
  );
}

export default ItemModal;
