import { useEffect, useState } from "react";
import WeatherImg from "../../components/WeatherImg/WeatherImg"
import WeatherInfo from "../../components/WeatherInfo/WeatherInfo";
import { Link } from 'react-router-dom';
import "./Weather.scss";

const Weather = () => {
  const [forecast, setForecast] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getLocation = () => navigator.geolocation.getCurrentPosition(getForecast)

  const getForecast = async (position) => {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=cbfc2a5185254cceaff142413220911&q=${position.coords.latitude},${position.coords.longitude}&aqi=no`
    );
    const forecastData = await response.json();
    setForecast(forecastData);
    setIsLoading(false);
  };

  useEffect(() => {
    getLocation();
  });

  return (
      <Link to="/weather" className="weather">
        <div className="weather__cover"></div>
        {!isLoading && <WeatherInfo forecast={forecast} />}
        {!isLoading && <WeatherImg weather={forecast.current.condition.text} />}
      </Link>
  );
};

export default Weather;
