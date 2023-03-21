// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

function fetchWeatherData(latitude, longitude, APIkey) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
}

function filterWeatherData(data) {
  if (!data) {
    return null;
  }
  const weatherData = {};
  weatherData.city = data.name;
  weatherData.temperature = data.main.temp;
  weatherData.condition = data.weather.main;
  weatherData.temperatureF = `${Math.round(data.main.temp)}°F`;
  weatherData.temperatureC = `${Math.round(((data.main.temp - 32) * 5) / 9)}°C`;
  return weatherData;
}

export { fetchWeatherData, filterWeatherData };
