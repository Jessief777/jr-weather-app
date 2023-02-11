import "./Weather.css";
import { useState } from "react";

const API_KEY = "e7b70b59bb5f45ceb9295631230402";
const FETCH_CITY_WEATHER_URL = "http://api.weatherapi.com/v1/current.json";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState();

  const onCityInputChangeHandler = (event) => {
    const value = event.target.value;
    setCity(value);
  };

  const onSearchCityHandler = async () => {
    if (!city) {
      // todo:error handling
      return;
    }
    const url = new URL(FETCH_CITY_WEATHER_URL);

    url.searchParams.append("key", API_KEY);
    url.searchParams.append("q", city);
    url.searchParams.append("aqi", "false");

    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
  };

  return (
    <div className="weather-container">
      <h1>JR Weather App 🌤</h1>
      <input
        type="text"
        placeholder="Search a city..."
        value={city}
        onChange={onCityInputChangeHandler}
      />
      <button onClick={onSearchCityHandler}>Search</button>
      {weather && <p>{JSON.stringify(weather)}</p>}
    </div>
  );
};

export default Weather;
