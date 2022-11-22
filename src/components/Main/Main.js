import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";

function Main({ weatherData, defaultClothing, handleCardClick }) {
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
  const clothingOptions = defaultClothing.filter((item) =>
    filterClothing(item, weatherType())
  );

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section>
        <div>
          <div className="main__description">
            <p>
              Today is {temperature}°F and it is {weatherType()} / You may want
              to wear:
            </p>
          </div>
        </div>
        <ul className="main__items">
          {clothingOptions.map((item) => {
            return (
              <ItemCard
                isOpen="false"
                clothingOption={item}
                key={item._id}
                name={item.name}
                image={item.link}
                weather={item.weather}
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
