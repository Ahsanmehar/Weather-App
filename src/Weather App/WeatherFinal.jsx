import "./WeatherFinal.css";
import WeatherData from "./WeatherData";

function WeatherFinal({ weather }) {

    let icon = "clear.png";

    return (
        <div id="final">
            <img src={icon} alt="" />
        {/* <img src={weather.temp > 15 ? icon : false} id="clear"/> */}
        <div id="weather-top">
            <h1 id="temp">{weather.temp}°<span>C</span></h1>
            <h1 id="city">{weather.city}</h1>
        </div>
        <div id="weather-btm">
        <WeatherData name="humidity" count={weather.humidity} symbol="%" icon="humidity.png"/>
        <WeatherData name="Wind Speed " count={weather.wind} symbol="km/h" icon="wind.png"/>
        </div>
        </ div> 
    )
}

export default WeatherFinal;