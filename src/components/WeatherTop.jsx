
import { kelvinToCelsius, kelvinToFahrenheit } from '../utils/temp'
import './styles/WeatherTop.css'

const WeatherTop = ({ weatherInfo, isCelsius }) => {
  console.log(weatherInfo)

  return (
    <section className="text-center grid gap-6 text-3xl">
      <h2 className='city_name sm:text-4xl'>
        {weatherInfo?.name}, {weatherInfo?.sys.country}
      </h2>

      <section>
        <article className="top__section bg-white/60 p-2 rounded-3xl relative grid grid-cols-2 items-center">

          <h3 className="col-span-2 capitalize text-2xl sm:text-3xl">
            {weatherInfo?.weather[0].description}
          </h3>

          <span className="text-4xl">
            {isCelsius
              ? kelvinToCelsius(weatherInfo?.main.temp)
              : kelvinToFahrenheit(weatherInfo?.main.temp)}
          </span>

          <div>
            <img
              src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`}
              alt=""
            />
          </div>
        </article>
      </section>
    </section>
  )
}

export default WeatherTop
