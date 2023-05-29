import React from 'react'
import './styles/WeatherBottom.css'

const WeatherBottom = ({ weatherInfo }) => {
  console.log(weatherInfo)
  return (
    <section className="bottom__section bg-white/60 p-2 p-y4 rounded-3xl grid grid-cols-3 justify-items-center text-sm sm:grid-cols-1 sm:items-center sm:max-h-[248px] sm:mt-[60px] sm:text-xl">
      <article className="flex gap-2 px-2 items-center border-r-2 border-white/30 sm:border-b-2 sm:border-white/30 sm:border-r-0 sm:items-center">
        <div>
          <img className="w-8 h-8" src="/images/wind.png" alt="" />
        </div>
        <span>{weatherInfo?.wind.speed}m/s</span>
      </article>

      <article className="flex gap-2 px-2 items-center  border-white/30 border-r-2 sm:border-b-2 sm:border-r-0 sm:items-center sm:border-white/30">
        <div>
          <img className="w-8 h-8" src="/images/humidity.png" alt="" />
        </div>
        <span>{weatherInfo?.main.humidity}%</span>
      </article>

      <article className="flex gap-2 px-2 items-center sm:items-center">
        <div>
          <img className="w-8 h-8" src="/images/pressure.png" alt="" />
        </div>
        <span>{weatherInfo?.main.pressure}hPa</span>
      </article>
    </section>
  )
}

export default WeatherBottom
