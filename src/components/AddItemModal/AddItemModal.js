import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export const AddItemModal = ({ isOpen, onClose, onAddItem }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weatherType, setWeatherType] = useState("");

  useEffect(() => {
    setName("");
    setImageUrl("");
    setWeatherType("");
  }, [isOpen]);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleUrl = (e) => {
    setImageUrl(e.target.value);
  };

  const handleWeather = (e) => {
    setWeatherType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(name, imageUrl, weatherType);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      name="add"
      title="New garment"
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Add garment"
    >
      <h4 className="form__label">Name</h4>
      <input
        className="form__input form__input_type_name"
        id="name"
        name="name"
        type="text"
        onChange={handleName}
        value={name}
        placeholder="Name"
        minLength="1"
        maxLength="40"
        required
      />
      <h4 className="form__label">Image</h4>
      <input
        className="form__input form__input_type_image"
        id="link"
        name="imageUrl"
        type="url"
        onChange={handleUrl}
        value={imageUrl}
        placeholder="Image URL"
        required
      />
      <h4 className="form__label">Select the weather type:</h4>
      <div className="form__radio-container">
        <div className="form__radio">
          <input
            className="form__input-radio"
            checked={weatherType === "hot"}
            id="hot"
            name="weather"
            value="hot"
            type="radio"
            onChange={handleWeather}
          />
          <label className="form__label-radio" htmlFor="hot">
            Hot
          </label>
        </div>
        <div className="form__radio">
          <input
            className="form__input-radio"
            checked={weatherType === "warm"}
            id="warm"
            name="weather"
            value="warm"
            type="radio"
            onChange={handleWeather}
          />
          <label className="form__label-radio" htmlFor="warm">
            Warm
          </label>
        </div>
        <div className="form__radio">
          <input
            className="form__input-radio"
            checked={weatherType === "cold"}
            id="cold"
            name="weather"
            value="cold"
            type="radio"
            onChange={handleWeather}
          />
          <label className="form__label-radio" htmlFor="cold">
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};
