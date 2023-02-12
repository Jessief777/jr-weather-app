const API_KEY = "e7b70b59bb5f45ceb9295631230402";
const FETCH_CITY_WEATHER_URL = "http://api.weatherapi.com/v1/current.json";

export const fetchWeatherByCity = async (city, showAirQuality) => {
  const url = new URL(FETCH_CITY_WEATHER_URL);
  

  url.searchParams.append("key", API_KEY);
  url.searchParams.append("q", city);
  url.searchParams.append("aqi", showAirQuality ? "yes" : "no");

  const response = await fetch(url);
  const data = await response.json();

  return data;
};
