import "./ItemModal.css";

function ItemModal({ isOpen, name, card, onClose, handleDeleteModal }) {
  return (
    <div
      className={
        isOpen
          ? `item-modal modal_type_${name}`
          : `modal_type_${name} item-modal_hidden`
      }
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
          className="item-modal__delete"
          onClick={handleDeleteModal}
        >
          Delete Item
        </button>
      </div>
    </div>
  );
}

export default ItemModal;
