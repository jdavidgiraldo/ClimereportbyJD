import { useEffect, useState } from 'react'
import './App.css'
import WeatherTop from './components/WeatherTop'
import axios from 'axios'
import WeatherBottom from './components/WeatherBottom'
import ChangeClimeBtn from './components/ChangeClimeBtn'
import CityInput from './components/CityInput'
import Loader from './components/Loader'

const BgImages = {
  '01d': '/images/clear_sky_d.webp',
  '01n': '/images/clear_sky_n.webp',
  '02d': '/images/few_clouds_d.webp',
  '02n': '/images/few_clouds_n.webp',
  '03d': '/images/scattered_clouds_d.webp',
  '03n': '/images/scattered_clouds_n.webp',
  '04d': '/images/broken_clouds_d.webp',
  '04n': '/images/broken_clouds_n.webp',
  '09d': '/images/show_rain_d.webp',
  '09n': '/images/show_rain_n.webp',
  '10d': '/images/rain_d.webp',
  '10n': '/images/rain_n.webp',
  '11d': '/images/thunderstorm_d.webp',
  '11n': '/images/thunderstorm_n.webp',
  '13d': '/images/snow_d.webp',
  '13n': '/images/snow_n.webp',
  '50d': '/images/mist_d.webp',
  '50n': '/images/mist_n.webp',
}

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null)
  const [isCelsius, setIsCelsius] = useState(true)

  const handleRequest = (event) => {
    event.preventDefault()
    const city = event.target.city.value
    const KEY = 'd62d592b176ce21736ee95698c916002'

    const CITY_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`

    axios
      .get(CITY_URL)
      .then(({ data }) => setWeatherInfo(data))
      .catch((error) => console.log(err))
  }

  const succes = (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const API_KEY = 'd62d592b176ce21736ee95698c916002'

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    axios
      .get(URL)
      .then(({ data }) => {
        setWeatherInfo(data)
      })

      .catch((err) => console.log(err))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(succes)
  }, [])

  const handleChangeTemp = () => {
    setIsCelsius(!isCelsius)
  }

  return (
    <main className="font-principal-font main relative min-h-screen text-white flex justify-center items-center p-2 ">
      <div className="absolute w-full h-full">
        <img
          src={BgImages[weatherInfo?.weather[0].icon]}
          className="w-full h-full object-cover"
        />
      </div>

      <section className="relative grid gap-4 justify-items-center">
        {weatherInfo ? (
          <>
            <CityInput handleRequest={handleRequest} />
            <section className="relative grid gap-4 sm:grid-cols-[1fr_auto]">
              <WeatherTop weatherInfo={weatherInfo} isCelsius={isCelsius} />
              <WeatherBottom weatherInfo={weatherInfo} />
            </section>
            <ChangeClimeBtn handleChangeTemp={handleChangeTemp} />
          </>
        ) : (
          <Loader />
        )}
      </section>
    </main>
  )
}

export default App
