import "./WeatherApp.scss";
import Layout from "../../components/Layout/Layout";
import WeatherForecast from "../../containers/WeatherForecast/WeatherForecast";
import { useState, useEffect } from "react";
import LocationSearch from "../../components/LocationSearch/LocationSearch";

const WeatherApp = () => {
  const [forecast, setForecast] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(null);

  const getLocation = () =>
    navigator.geolocation.getCurrentPosition(getForecast);

  const getForecast = async (position) => {
    let response = "";
    if (!searchTerm) {
      response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=cbfc2a5185254cceaff142413220911&q=${position.coords.latitude},${position.coords.longitude}&api=no&days=7`
      );
    } else {
      response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=cbfc2a5185254cceaff142413220911&q=${searchTerm}&api=no&days=7`
      );
    }
    const weatherData = await response.json();
    setForecast(weatherData);
    setIsLoading(false);
  };

  useEffect(() => {
    getLocation();
  }, [searchTerm]);

  const getSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.firstChild.value);
    e.target.firstChild.value = "";
  }

  return (
    <Layout>
      <div className="weather-app">
        {!isLoading && <h4>{`${forecast.location.name}, ${forecast.location.country}`}</h4>}
        <LocationSearch handleSubmit={getSearchTerm} />
        {!isLoading && <WeatherForecast forecast={forecast.forecast.forecastday} />}
      </div>
    </Layout>
  );
};

export default WeatherApp;
