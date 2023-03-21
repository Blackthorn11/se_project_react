import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export const AddItemModal = ({ isOpen, onClose, onAddItem }) => {
  const [name, setName] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [weatherType, setWeatherType] = React.useState("");
  const [isHotChecked, setIsHotChecked] = React.useState(false);
  const [isWarmChecked, setIsWarmChecked] = React.useState(false);
  const [isColdChecked, setIsColdChecked] = React.useState(false);

  React.useEffect(() => {
    setName("");
    setImageUrl("");
    setWeatherType("");
    setIsHotChecked(false);
    setIsWarmChecked(false);
    setIsColdChecked(false);
  }, [isOpen]);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleUrl = (e) => {
    setImageUrl(e.target.value);
  };

  const handleWeather = (e) => {
    console.log(weatherType);
    setWeatherType(e.target.value);
    console.log(weatherType);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
            checked={isHotChecked}
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
            checked={isWarmChecked}
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
            checked={isColdChecked}
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
