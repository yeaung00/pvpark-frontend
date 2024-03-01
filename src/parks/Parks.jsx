import { useState } from 'react'
import Grid from '../common/Grid'
import Search from '../common/Search'
import useGetParks from './hooks/useGetParks'

export default function Parks() {
  const [input, setInput] = useState('')
  const [parks, setParks] = useGetParks()
  

  async function handleSubmit(e) {
    e.preventDefault()
    if (!input.includes(',')) {
      alert('Please separate the city and state with a comma')
      return
    }
    const city = input.split(',')[0], state = input.split(',')[1]
    const apiUrl = `https://pvpark-api.vercel.app/api/${state}/${city}/parks`
    const parksResponse = await fetch(apiUrl)
    const parksData = await parksResponse.json()
    localStorage.setItem("previousParkSearched", JSON.stringify({ city, state }))
    setParks(parksData)
  }
  return (
    <div className='flex flex-col gap-6'>
      <p className='text-3xl font-bold'>Parks</p>
      <Search placeholder='City, State' handleSubmit={handleSubmit} setInput={setInput} />
      {parks && <p className='text-3xl font-bold'>{parks[0]?.near_by}</p>}
      <Grid cells={parks} buttonText={'Find games'} />
    </div>
  )
}