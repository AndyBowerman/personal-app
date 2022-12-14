import "./WeatherApp.scss";
import Layout from "../../components/Layout/Layout";
import WeatherForecast from "../../containers/WeatherForecast/WeatherForecast";
import { useState, useEffect } from "react";
import LocationSearch from "../../components/LocationSearch/LocationSearch";
import LocationNotFound from "../../components/LocationNotFound/LocationNotFound";
import { api_key } from "../../config";

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
        `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${position.coords.latitude},${position.coords.longitude}&days=5`
      );
    } else {
      response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${searchTerm}&days=5`
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
        {!isLoading && !forecast.error && <h4>{`${forecast.location.name}, ${forecast.location.country}`}</h4>}
        <LocationSearch handleSubmit={getSearchTerm} />
        {!isLoading && !forecast.error ? <WeatherForecast forecast={forecast.forecast.forecastday} /> : <LocationNotFound />}
      </div>
    </Layout>
  );
};

export default WeatherApp;
