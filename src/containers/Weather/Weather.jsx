import { useEffect, useState } from "react";
import WeatherImg from "../../components/WeatherImg/WeatherImg"
import WeatherInfo from "../../components/WeatherInfo/WeatherInfo";
import { Link } from 'react-router-dom';
import "./Weather.scss";
import { api_key } from "../../config";

const Weather = () => {
  const [forecast, setForecast] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getLocation = () => navigator.geolocation.getCurrentPosition(getForecast)

  const getForecast = async (position) => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${position.coords.latitude},${position.coords.longitude}`
    );
    const forecastData = await response.json();
    setForecast(forecastData);
    setIsLoading(false);
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
      <Link to="/weather" className="weather">
        <div className="weather__cover"></div>
        {!isLoading && <WeatherInfo forecast={forecast} apiSuccess={Object.keys(forecast).indexOf("error") === -1} />}
        {!isLoading && <WeatherImg forecast={forecast} />}
      </Link>
  );
};

export default Weather;
