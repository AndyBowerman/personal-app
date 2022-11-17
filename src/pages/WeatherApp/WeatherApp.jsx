import './WeatherApp.scss'
import Layout from "../../components/Layout/Layout"
import WeatherForecast from '../../containers/WeatherForecast/WeatherForecast'
import { useState, useEffect } from 'react'

const WeatherApp = () => {
    const [forecast, setForecast] = useState("");
    const [isLoading, setIsLoading] = useState(true)

    const getForecast = async () => {
        const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=cbfc2a5185254cceaff142413220911&q=Bristol&api=no&days=7')
        const weatherData = await response.json();
        setForecast(weatherData.forecast.forecastday)
        setIsLoading(false);
    }

    useEffect(() => {
        getForecast();
    }, [])

  return (
    <Layout>
        {!isLoading && <WeatherForecast forecast={forecast} />}
    </Layout>
  )
}

export default WeatherApp
