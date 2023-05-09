// all imports
import { useState, useEffect } from "react";
import { HashRouter, Switch, Route, useHistory } from "react-router-dom";
import "./App.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { Profile } from "../Profile/Profile";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import { APIkey, latitude, longitude } from "../../utils/constants";
import {
  getItems,
  addItem,
  removeItem,
  editUserInfo,
  addLike,
  removeLike,
} from "../../utils/api";
import { fetchWeatherData, filterWeatherData } from "../../utils/weatherApi";
import { AddItemModal } from "../AddItemModal/AddItemModal";
import { DeleteConfirmationModal } from "../DeleteConfirmationModal/DeleteConfirmationModal";
import { checkToken, signIn, signUp } from "../../utils/auth";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

// Main App

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const closeModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    const closeByEsc = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", closeByEsc);
    return () => window.removeEventListener("keydown", closeByEsc);
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleRedirect = () => {
    activeModal === "signup"
      ? setActiveModal("login")
      : setActiveModal("signup");
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
    removeItem(selectedCard._id)
      .then(() => {
        setClothingItems(
          clothingItems.filter((item) => item._id !== selectedCard._id)
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
      .then((res) => {
        setClothingItems(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchClothingItems();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      checkToken(token)
        .then((res) => {
          setCurrentUser(res);
          setIsLoggedIn(true);
        })
        .catch((err) => console.log(err.message));
    }
  }, []);

  function handleRegister({ name, avatar, email, password }) {
    setIsLoading(true);
    signUp(name, avatar, email, password)
      .then((res) => {
        closeModal();
        setIsLoggedIn(true);
        setCurrentUser(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleSignIn(email, password) {
    setIsLoading(true);
    signIn(email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res.token);
          setIsLoggedIn(true);
          closeModal();
          setCurrentUser(res);
        }
        checkToken(res.token)
          .then((data) => {
            setCurrentUser(data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setCurrentUser({});
    history.push("/");
  }

  function handleEditProfile(name, avatar) {
    setIsLoading(true);
    editUserInfo(name, avatar)
      .then((res) => {
        closeModal();
        setCurrentUser(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }

  const handleLike = (id, isLiked) => {
    isLiked
      ? addLike(id)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((card) => (card._id === id ? updatedCard.data : card))
            );
          })
          .catch((err) => console.log(err))
      : removeLike(id)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((card) => (card._id === id ? updatedCard.data : card))
            );
          })
          .catch((err) => console.log(err));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
                isLoggedIn={isLoggedIn}
                handleRegister={() => {
                  setActiveModal("signup");
                }}
                handleLogin={() => {
                  setActiveModal("login");
                }}
              />
              <Switch>
                <ProtectedRoute
                  path="/profile"
                  loggedIn={isLoggedIn}
                  currentUser={currentUser}
                >
                  <Route path="/profile">
                    <Profile
                      clothingItems={clothingItems}
                      handleCardClick={handleCardClick}
                      openModal={() => {
                        setActiveModal("add");
                      }}
                      handleEditClick={() => {
                        setActiveModal("edit");
                      }}
                      currentUser={currentUser}
                      handleLogout={handleLogout}
                      isLoggedIn={isLoggedIn}
                      handleLikeClick={handleLike}
                    />
                  </Route>
                </ProtectedRoute>

                <Route path="/">
                  <Main
                    weatherData={weatherData}
                    clothingItems={clothingItems}
                    handleCardClick={handleCardClick}
                    handleLikeClick={handleLike}
                    isLoggedIn={isLoggedIn}
                    currentUser={currentUser}
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
              isLoading={isLoading}
            ></AddItemModal>
            <ItemModal
              isOpen={activeModal === "preview"}
              name={"preview"}
              card={selectedCard}
              onClose={closeModal}
              handleDeleteModal={() => {
                setActiveModal("delete");
              }}
              onClick={handleOverlayClick}
              currentUser={currentUser}
            />
            <DeleteConfirmationModal
              isOpen={activeModal === "delete"}
              name="delete"
              onClose={closeModal}
              handleConfirm={() => handleCardDelete(selectedCard)}
              handleCancel={() => {
                setActiveModal("preview");
              }}
              onClick={handleOverlayClick}
            />
            <RegisterModal
              isOpen={activeModal === "signup"}
              name={"register"}
              title={"Register"}
              onClose={closeModal}
              onRegister={handleRegister}
              switchToLogin={handleRedirect}
              isLoading={isLoading}
            />
            <LoginModal
              isOpen={activeModal === "login"}
              name={"login"}
              title={"Login"}
              onClose={closeModal}
              onLogin={handleSignIn}
              switchToRegister={handleRedirect}
              isLoading={isLoading}
            />
            <EditProfileModal
              isOpen={activeModal === "edit"}
              name={"edit"}
              title={"Edit profile"}
              onClose={closeModal}
              currentUser={currentUser}
              handleEditProfile={handleEditProfile}
              isLoading={isLoading}
            />
          </HashRouter>
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
