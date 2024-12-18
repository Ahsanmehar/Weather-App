import { useState } from "react";
import "./WeatherApp.css";

function WeatherApp({ update }) {
  let [city, setCity] = useState("");
  let url_Api = "https://api.openweathermap.org/data/2.5/weather?q=";
  let key_Api = "ab32e50ff51fb90be107d4cb48af732c";

  function Update(e) {
    setCity(e.target.value);
  }

  let onSubmit = async (e) => {
    e.preventDefault();
    let result = await getWeather();
    update(result);
  };

  let getWeather = async () => {
    let res = await fetch(`${url_Api}${city}&appid=${key_Api}&units=metric`);
    let json = await res.json();

    let result = {
      temp: json.main.temp,
      city: json.name,
      country: json.sys.country,
      humidity: json.main.humidity,
      wind: json.wind.speed,
    };

    return result;
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Enter City Name"
        onChange={Update}
        value={city}
      />
      <button>
        <i className="ri-search-line"></i>
      </button>
    </form>
  );
}

export default WeatherApp;
