import "../AirQualityResult/AirQualityResult.css";

const toFixedTwoFractionDigits = (value) => {
  return Number.parseFloat(value).toFixed(2);
};
//parseFloat() only string or numbers

const AirQualityResult = (props) => {
  return (
    <div>
      <h3>Air Quality</h3>
      <ul>
        <li>
          <p>co: {toFixedTwoFractionDigits(props.airQualityData.co)}</p>
        </li>
        <li>
          <p>no2: {toFixedTwoFractionDigits(props.airQualityData.no2)}</p>
        </li>
        <li>
          <p>pm2.5: {toFixedTwoFractionDigits(props.airQualityData.pm2_5)}</p>
        </li>
        <li>
          <p>pm10: {toFixedTwoFractionDigits(props.airQualityData.pm10)}</p>
        </li>
      </ul>
    </div>
  );
};

// return <div>{JSON.stringify(props.airQualityData)}</div>;

export default AirQualityResult;
