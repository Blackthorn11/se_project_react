// all imports
import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import {
  APIkey,
  latitude,
  longitude,
  defaultClothingItems,
} from "../../utils/constants";
import { fetchWeatherData, filterWeatherData } from "../../utils/weatherApi";

// Main App

function App() {
  const [weatherData, setWeatherData] = React.useState({});
  const [activeModal, setActiveModal] = React.useState("");
  const [selectedCard, setSelectedCard] = React.useState({});

  const closeModal = () => {
    setActiveModal(false);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  React.useEffect(() => {
    if (latitude && longitude) {
      fetchWeatherData(latitude, longitude, APIkey)
        .then((data) => {
          setWeatherData(filterWeatherData(data));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className="app">
      {/* Main components */}
      <div>
        <Header
          weatherData={weatherData}
          openModal={() => {
            setActiveModal("add");
          }}
        />
        <Main
          weatherData={weatherData}
          defaultClothing={defaultClothingItems}
          handleCardClick={handleCardClick}
        />
        <Footer />
      </div>
      {/* Modals */}
      {activeModal === "add" && (
        <ModalWithForm
          isOpen={activeModal === "add"}
          name="add"
          title="New clothing"
          buttonText="Add clothing"
          onClose={closeModal}
        >
          <h4 className="form__label">Name</h4>
          <input
            className="form__input form__input_type_name"
            name="name"
            type="text"
            placeholder="Name"
            minLength="1"
            maxLength="40"
            required
          />
          <h4 className="form__label">Image</h4>
          <input
            className="form__input form__input_type_image"
            name="image"
            type="url"
            placeholder="Image URL"
            required
          />
          <h4 className="form__label">Select the weather type:</h4>
          <div className="form__radio-container">
            <div className="form__radio">
              <input
                className="form__input-radio"
                name="temp"
                value="Hot"
                type="radio"
                id="hot"
              />
              <label className="form__label-radio" htmlFor="hot">
                Hot
              </label>
            </div>
            <div className="form__radio">
              <input
                className="form__input-radio"
                name="temp"
                value="Warm"
                type="radio"
                id="warm"
              />
              <label className="form__label-radio" htmlFor="warm">
                Warm
              </label>
            </div>
            <div className="form__radio">
              <input
                className="form__input-radio"
                name="temp"
                value="Cold"
                type="radio"
                id="cold"
              />
              <label className="form__label-radio" htmlFor="cold">
                Cold
              </label>
            </div>
          </div>
        </ModalWithForm>
      )}
      <ItemModal
        isOpen={activeModal === "preview"}
        name={"preview"}
        card={selectedCard}
        onClose={closeModal}
      />
    </div>
  );
}

export default App;
