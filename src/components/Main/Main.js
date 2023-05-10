import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({
  weatherData,
  clothingItems,
  handleCardClick,
  handleLikeClick,
  isLoggedIn,
  currentUser,
}) {
  const temperature = weatherData.temperature;
  const weatherType = () => {
    if (temperature >= 86) {
      return "hot";
    } else if (temperature >= 66 && temperature <= 85) {
      return "warm";
    } else if (temperature <= 65) {
      return "cold";
    }
  };

  function filterClothing(card, data) {
    if (card.weather === data) {
      return true;
    } else {
      return false;
    }
  }
  const clothingOptions = clothingItems.filter((item) =>
    filterClothing(item, weatherType())
  );

  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section>
        <div>
          <div className="main__description">
            <p>
              Today is{" "}
              {currentTemperatureUnit === "F"
                ? weatherData.temperatureF
                : weatherData.temperatureC}{" "}
              and it is {weatherType()} / You may want to wear:
            </p>
          </div>
        </div>
        <ul className="main__items">
          {clothingOptions.map((item) => {
            return (
              <ItemCard
                isOpen="false"
                clothing={item}
                key={item._id}
                weather={item.weather}
                handleLikeClick={handleLikeClick}
                isLoggedIn={isLoggedIn}
                currentUser={currentUser}
                onClick={() => {
                  handleCardClick(item);
                }}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
