import "./WeatherForecast.scss";
import WeatherCard from "../../components/WeatherCard/WeatherCard";

const WeatherForecast = ({ forecast }) => {
  const findDay = (date) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const formatDate = new Date(date);
    return days[formatDate.getDay()];
  };

  const renderForecast = forecast.map((day) => (
    <WeatherCard
      key={day.date}
      date={findDay(day.date)}
      sunrise={day.astro.sunrise}
      sunset={day.astro.sunset}
      maxTemp={day.day.maxtemp_c}
      minTemp={day.day.mintemp_c}
      condition={day.day.condition.text}
      icon={day.day.condition.icon}
    />
  ));

  return <div className="weather-forecast">{renderForecast}</div>;
};

export default WeatherForecast;
