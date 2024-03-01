import React from 'react'
import { Link } from 'react-router-dom'
import useGetParks from './hooks/useGetParks'
import Cards from './components/Cards'
import ImagePlaceholder from '../common/ImagePlaceholder'

export default function Home() {
  const parks = useGetParks()
  return (
    <div className='flex flex-col justify-center items-center lg:flex-row gap-3'>
      <div className='flex flex-col items-center text-center lg:text-start lg:items-start flex-1 gap-3'>
        <h1 className='text-7xl font-bold'>
          <p>Locate your</p>
          <span className='text-emerald-700'> next game </span>
          <p>with ease.</p>
        </h1>
        <p className='text-xl'>Find and join spontaneous games in your community.</p>
        <Link to="/parks" className='w-fit'>
        <button className='mt-3 text-white rounded-md bg-emerald-700 p-3 text-2xl'>Get started</button>
        </Link>
      </div>
      <div className='flex flex-col items-center lg:place-items-start flex-1 w-full gap-3'>
        <p className='text-4xl font-bold'>Find games from 1000+ parks  </p>
        <Cards parks={parks?.slice(0,16)} />
      </div>
    </div>
  )
}
