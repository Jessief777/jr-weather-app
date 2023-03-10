import { useState } from "react";
import { fetchWeatherByCity } from "../../../services/weatherService";
import "./SearchCity.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

const SearchCity = (props) => {
  const [city, setCity] = useState("");
  const [showAirQuality, setShowAirQuality] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [error, setError] = useState("");

  const onCityInputChangeHandler = (event) => {
    const value = event.target.value;
    setCity(value);
    setError("");

    //input data validation
    if (value.length > 1) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const onSearchCityHandler = async (event) => {
    event.preventDefault();
    if (!city) {
      // todo:error handling
      return;
    }

    try {
      props.setLoading(true);
      const weatherData = await fetchWeatherByCity(city, showAirQuality);
      props.search(weatherData);
    } catch (error) {
      //console.error("Failed to fetch city weather due to error: ", error);
      setError(error.message);
    } finally {
      props.setLoading(false);
    }
  };

  const onCheckBoxChangeHandler = (event) => {
    //can console log event to see what shown in target=>checked
    const isChecked = event.target.checked;
    setShowAirQuality(isChecked);
  };

  return (
    <Form onSubmit={onSearchCityHandler}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type="text"
          placeholder="Search a city..."
          value={city}
          onChange={onCityInputChangeHandler}
        />
      </Form.Group>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Show air data"
          className="air-quality"
          onChange={onCheckBoxChangeHandler}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!isFormValid}>
        Search
      </Button>
    </Form>
  );
};

export default SearchCity;
