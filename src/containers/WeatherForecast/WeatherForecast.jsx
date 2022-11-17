import './WeatherForecast.scss';
import WeatherCard from '../../components/WeatherCard/WeatherCard';

const WeatherForecast = ({forecast}) => {

    const renderForecast = forecast.map(day => <WeatherCard key={day.date} date={day.date} sunrise={day.astro.sunrise} sunset={day.astro.sunset} maxTemp={day.day.maxtemp_c} minTemp={day.day.mintemp_c} condition={day.day.condition.text} icon={day.day.condition.icon} />)

  return (
    <div className='weather-forecast'>
      {renderForecast}
    </div>
  )
}

export default WeatherForecast
