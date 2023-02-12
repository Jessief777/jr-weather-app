import "./Weather.css";
import { useState } from "react";
import SearchCity from "./SearchCity/SearchCity";
import WeatherResult from "./WeatherResult/WeatherResult";
import Card from "react-bootstrap/Card";
import Spinner from "../Spinner/Spinner";

const Weather = () => {
  const [weather, setWeather] = useState(undefined);
  const [isLoading, setLoading] = useState(false);

  const onSearch = (weatherData) => {
    setWeather(weatherData);
  };

  // input data validation
  // let weatherResult = "Please submit a city to search";
  // if (isLoading) {
  //   weatherResult = <Spinner />;
  // } else if (weather) {
  //   weatherResult = <WeatherResult weather={weather} />;
  // }

  // const onSetLoading = (isLoading) => setLoading(isLoading);

  return (
    <Card className="text-center weather-container">
      <Card.Header>
        <h1>JR Weather App 🌤</h1>
      </Card.Header>
      <Card.Body>
        <SearchCity search={onSearch} setLoading={setLoading} />
        {/* {weatherResult} */}
        {isLoading ? (
          <Spinner />
        ) : (
          weather && <WeatherResult weatherData={weather} />
        )}
      </Card.Body>
      <Card.Footer className="text-muted">by Jessie Feng</Card.Footer>
    </Card>
  );
};

export default Weather;
