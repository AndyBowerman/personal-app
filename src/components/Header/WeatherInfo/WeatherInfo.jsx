import './WeatherInfo.scss'

const WeatherInfo = ({forecast}) => {
  return (
    <div className='weather-info'>
      <h2 className='weather-info__location'>{forecast.location.name}</h2>
      <h3 className='weather-info__temp'>{forecast.current.temp_c + "\u00B0" + "C"}</h3>
      <div className="weather-info__container">
        <img className='weather-info__icon' src={forecast.current.condition.icon} alt="Weather icon" />
        <p className='weather-info__text'>{forecast.current.condition.text}</p>
      </div>
    </div>
  )
}

export default WeatherInfo
