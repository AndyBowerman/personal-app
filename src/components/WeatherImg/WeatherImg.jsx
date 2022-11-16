import './WeatherImg.scss';
import sun from "../../assets/sun.jpg"

const WeatherImg = () => {
  return (
    <img className='weather-img' src={sun} alt="Sunny Day" />
  )
}

export default WeatherImg
