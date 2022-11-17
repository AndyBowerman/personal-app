import './WeatherCard.scss';

const WeatherCard = ({date, sunrise, sunset, maxTemp, minTemp, condition, icon}) => {
  return (
    <div className='weather-card'>
      <h2 className='weather-card__date'>{date}</h2>
      <ul className='weather-card__list'>
        <li className="weather-card__item">Sunrise: {sunrise}</li>
        <li className="weather-card__item">Sunset:  {sunset}</li>
        <li className="weather-card__item">Max Temperature: {maxTemp+ "\u00B0" + "C"}</li>
        <li className="weather-card__item">Min Temperature: {minTemp+ "\u00B0" + "C"}</li>
      </ul>
      <div className="weather-card__container">
        <img className="weather-card__icon" src={icon} alt="Weather description" />
        <p className="weather-card__condition">{condition}</p>
      </div>
    </div>
  )
}

export default WeatherCard
