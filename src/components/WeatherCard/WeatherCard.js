import "./WeatherCard.css";
import { weatherConditions } from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  if (!weatherData) return null;

  function selectWeatherCondition(weatherData) {
    const weatherCondition = weatherData?.condition?.toLowerCase() || "";
    if (weatherCondition === null) return "";
    if (weatherCondition.includes("clear")) {
      return "sunday";
    } else if (weatherCondition.includes("clouds")) {
      return "cloudday";
    } else if (weatherCondition.includes("fog")) {
      return "fogday";
    } else if (
      weatherCondition.includes("rain") ||
      weatherCondition.includes("drizzle")
    ) {
      return "rainday";
    } else if (weatherCondition.includes("snow")) {
      return "snowday";
    } else {
      return "stormday";
    }
  }

  const weatherConditionText = selectWeatherCondition(weatherData);

  return (
    <div className="weathercard weathercard__background-day">
      <h2 className="weathercard__temp">
        {currentTemperatureUnit === "F"
          ? weatherData.temperatureF
          : weatherData.temperatureC}
      </h2>
      <div className="weathercard__image-wrapper">
        <img
          className="weathercard__image"
          src={process.env.PUBLIC_URL + weatherConditions[weatherConditionText]}
          alt={weatherConditionText}
        />
      </div>
    </div>
  );
}

export default WeatherCard;
