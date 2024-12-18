import { useState } from "react";
import WeatherApp from "./WeatherApp";
import WeatherFinal from "./WeatherFinal";
import "./WeatherInfo.css";

function WeatherInfo() {
  let [weather, setWeather] = useState({
    temp: 31,
    city: "Lahore",
    country: "PK",
    humidity: 35,
    wind: "2.06",
  });

  let updateResult = (result) => {
    setWeather(result);
  };

  return (
    <div id="weather-card">
      <WeatherApp update={updateResult} />
      <WeatherFinal weather={weather}/>
    </div>
  );
}

export default WeatherInfo;
