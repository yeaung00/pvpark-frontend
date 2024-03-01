import { useState, useEffect } from 'react'
import { TbTemperatureFahrenheit } from "react-icons/tb";
import { FiSunset, FiSunrise } from "react-icons/fi";
import { FaTemperatureHalf } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";
import TextPlaceHolder from '../../common/TextPlaceholder';
import SmImageSkeleton from '../../common/SmImageSkeleton';

export default function Weather({ city, state }) {
  const [weather, setWeather] = useState({})
  useEffect(() => {
    async function getWeather() {
      const apiUrl = `http://localhost:3001/api/${state.toLowerCase()}/${city.toLowerCase()}/weather`
      const weatherRes = await fetch(apiUrl)
      const weatherData = await weatherRes.json()
      setWeather(weatherData)
    }
    if (!city) {
      return
    }
    getWeather()
  }, [city, state])
  if (Object.keys(weather).length == 0) {
    return <div className='bg-white flex flex-col border rounded-md shadow-md p-3 w-52 gap-3'>
      <div className='border border-black h-28'>
        <SmImageSkeleton />
      </div>
      <TextPlaceHolder />
    </div>
  }
  
  return (
    <div className='bg-white flex flex-col border rounded-md shadow-md p-3 w-52'>
      <p>{city}</p>
      <img className='max-w-16 md:max-w-64' src={`https://openweathermap.org/img/wn/${weather.icon_id}@2x.png`} alt="weather icon" />
      <p>{weather.description}</p>
      <div className='flex'>
        <FaTemperatureHalf className='text-xl' />{weather.temp}<TbTemperatureFahrenheit className='text-2xl' />
      </div>
      <div className='flex'>
        <FaWind className='text-lg'/> {weather.wind_speed} mi/h
      </div>
      <div className='flex'>
        <FiSunrise className='text-xl'/>{weather.sunrise}
      </div>
      <div className='flex'>
        <FiSunset className='text-xl'/>{weather.sunset}
      </div>
    </div>
  )
}
