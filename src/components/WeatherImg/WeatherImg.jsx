import "./WeatherImg.scss";
import { useEffect, useState } from "react";
import sun from "../../assets/sun.jpg";
import cloud from "../../assets/cloud.jpg";
import fog from "../../assets/fog.jpg";
import heavyRain from "../../assets/heavy-rain.jpg";
import heavySnow from "../../assets/heavy-snow.jpg";
import lightRain from "../../assets/light-rain.jpg";
import lightSnow from "../../assets/light-snow.jpg";
import thunder from "../../assets/thunder.jpg";

const WeatherImg = ({ weather }) => {
  const [weatherImg, setWeatherImg] = useState(sun);

  const selectImage = () => {
    switch (weather) {
      case "Sunny":
      case "Clear":
      case "Partly cloudy":
        setWeatherImg(sun);
        break;
      case "Cloudy":
      case "Overcast":
      case "Patchy rain possible":
        setWeatherImg(cloud);
        break;
      case "Mist":
      case "Fog":
      case "Freezing fog":
        setWeatherImg(fog);
        break;
      case "Freezing drizzle":
      case "Heavy freezing drizzle":
      case "Moderate rain":
      case "Heavy rain at times":
      case "Heavy rain":
      case "Moderate or heavy freezing rain":
      case "Moderate or heavy sleet":
      case "Moderate or heavy rain shower":
      case "Torrential rain shower":
      case "Moderate or heavy sleet showers":
        setWeatherImg(heavyRain);
        break;
      case "Blowing snow":
      case "Blizzard":
      case "Moderate snow":
      case "Patchy heavy snow":
      case "Heavy snow":
      case "Ice pellets":
      case "Moderate or heavy snow showers":
      case "Moderate or heavy showers of ice pellets":
      case "Moderate or heavy snow with thunder":
        setWeatherImg(heavySnow);
        break;
      case "Patchy rain possible":
      case "Patchy sleet possible":
      case "Patchy freezing drizzle possible":
      case "Patchy light drizzle":
      case "Light drizzle":
      case "Patchy light rain":
      case "Light rain":
      case "Moderate rain at times":
      case "Light freezing rain":
      case "Light sleet":
      case "Light rain shower":
      case "Light sleet showers":
        setWeatherImg(lightRain);
        break;
      case "Patchy snow possible":
      case "Patchy light snow":
      case "Light snow":
      case "Patchy moderate snow":
      case "Moderate snow":
      case "Light snow showers":
      case "Light showers of ice pellets":
      case "Moderate rain at times":
      case "Light freezing rain":
      case "Light sleet":
      case "Light rain shower":
      case "Light sleet showers":
        setWeatherImg(lightSnow);
        break;
      case "Thundery outbreaks possible":
      case "Patchy light rain with thunder":
      case "Moderate or heavy rain with thunder":
      case "Patchy light snow with thunder":
      case "Moderate or heavy snow with thunder":
        setWeatherImg(thunder);
        break;
    }
  };

  useEffect(() => {
    selectImage();
  });

  return <img className="weather-img" src={weatherImg} alt="Weather" />;
};

export default WeatherImg;
