// all imports
import { useState, useEffect } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { Profile } from "../Profile/Profile";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import { APIkey, latitude, longitude } from "../../utils/constants";
import { getItems, addItem, removeItem } from "../../utils/api";
import { fetchWeatherData, filterWeatherData } from "../../utils/weatherApi";
import { AddItemModal } from "../AddItemModal/AddItemModal";
import { DeleteConfirmationModal } from "../DeleteConfirmationModal/DeleteConfirmationModal";

// Main App

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const closeModal = () => {
    setActiveModal(false);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const handleAddItemSubmit = (name, imageUrl, weatherType) => {
    addItem(name, imageUrl, weatherType)
      .then((item) => {
        const items = [...clothingItems, item];
        console.log(clothingItems);
        console.log(item);
        console.log(items);
        setClothingItems(items);
        closeModal();
      })
      .catch((err) => console.log(err));
  };

  const handleCardDelete = () => {
    removeItem(selectedCard.id)
      .then(() => {
        setClothingItems(
          clothingItems.filter((item) => item.id !== selectedCard.id)
        );
        setSelectedCard({});
        closeModal();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (latitude && longitude) {
      fetchWeatherData(latitude, longitude, APIkey)
        .then((data) => {
          setWeatherData(filterWeatherData(data));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const fetchClothingItems = () => {
    getItems()
      .then((data) => {
        setClothingItems(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchClothingItems();
  }, []);

  return (
    <div className="app">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <HashRouter>
          {/* Main components */}
          <div>
            <Header
              weatherData={weatherData}
              openModal={() => {
                setActiveModal("add");
              }}
            />
            <Switch>
              <Route exact path="/">
                <Main
                  weatherData={weatherData}
                  clothingItems={clothingItems}
                  handleCardClick={handleCardClick}
                />
              </Route>
              <Route path="/profile">
                <Profile
                  clothingItems={clothingItems}
                  handleCardClick={handleCardClick}
                  openModal={() => {
                    setActiveModal("add");
                  }}
                />
              </Route>
            </Switch>
            <Footer />
          </div>
          {/* Modals */}
          <AddItemModal
            isOpen={activeModal === "add"}
            name={"add"}
            title={"New Garment"}
            onClose={closeModal}
            onAddItem={handleAddItemSubmit}
          ></AddItemModal>
          <ItemModal
            isOpen={activeModal === "preview"}
            name={"preview"}
            card={selectedCard}
            onClose={closeModal}
            handleDeleteModal={() => {
              setActiveModal("delete");
            }}
          />
          <DeleteConfirmationModal
            isOpen={activeModal === "delete"}
            name="delete"
            onClose={closeModal}
            handleConfirm={() => handleCardDelete(selectedCard)}
            handleCancel={() => {
              setActiveModal("preview");
            }}
          />
        </HashRouter>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
