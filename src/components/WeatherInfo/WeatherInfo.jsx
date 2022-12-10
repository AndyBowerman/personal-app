import './WeatherInfo.scss'

const WeatherInfo = ({forecast, apiSuccess}) => {
  return (
    <div className='weather-info'>
      {apiSuccess && <h2 className='weather-info__location'>{forecast.location.name}</h2>}
      {apiSuccess && <h3 className='weather-info__temp'>{forecast.current.temp_c + "\u00B0" + "C"}</h3>}
      {apiSuccess && <div className="weather-info__container">
        <img className='weather-info__icon' src={forecast.current.condition.icon} alt="Weather icon" />
        <p className='weather-info__text'>{forecast.current.condition.text}</p>
      </div>}
      {!apiSuccess && <h2 className='weather-info__location'>Forecast currently unavailable</h2>}
    </div>
  )
}

export default WeatherInfo
