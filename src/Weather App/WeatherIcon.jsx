import "./WeatherIcon.css";

function WeatherIcon({ temp }) {
  let snow = "snowflake.png";
  let windy = "windy.png";
  let clouds = "clouds.png";
  let partysunny = "partly-sunny.png";
  let hot = "hot.png";
  let veryhot = "veryhot.png";

  return (
    <div id="icons">
      <img id="clear" src={temp <= 0 ? snow : ""} />
      <img id="clear" src={temp > 0 && temp <= 10 ? windy : ""} />
      <img id="clear" src={temp > 10 && temp <= 20 ? clouds : ""} />
      <img id="clear" src={temp > 20 && temp <= 30 ? partysunny : ""} />
      <img id="clear" src={temp > 30 && temp <= 40 ? hot : ""} />
      <img id="clear" src={temp >= 41 ? veryhot : ""} />
    </div>
  );
}

export default WeatherIcon;
