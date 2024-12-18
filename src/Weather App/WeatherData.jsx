import "./WeatherData.css";

function WeatherData({ name, count, symbol, icon }) {
  return (
    <div id="weather-btm">
      <div id="left">
        <img src={icon} />
      </div>
      <div id="right">
        <p>
          {count}{symbol}
        </p>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default WeatherData;
