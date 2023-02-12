import "./AirQualityResult";

const AirQualityResult = (props) => {
  return (
    <div>
      <h3>Air Quality</h3>
      <ul>
        <li>co: {props.airQualityData.co}</li>
        <li>no2: {props.airQualityData.no2}</li>
        <li>pm2.5: {props.airQualityData.pm2_5}</li>
        <li>pm10: {props.airQualityData.pm10}</li>
      </ul>
    </div>
  );
};

// return <div>{JSON.stringify(props.airQualityData)}</div>;

export default AirQualityResult;
