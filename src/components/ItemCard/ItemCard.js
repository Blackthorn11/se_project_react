import "./ItemCard.css";

function ItemCard({ image, name, onClick }) {
  return (
    <li className="card">
      <img className="card__image" src={image} alt={name} onClick={onClick} />
      <div className="card__title">{name}</div>
    </li>
  );
}

export default ItemCard;
