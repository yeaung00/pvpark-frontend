import { useState, useEffect } from 'react'
import { getParksFromDB, postParksToDB } from '../../lib/supabase/parks'
import { getParks } from '../../lib/parks'

export default function useGetParks() {
  const [parks, setParks] = useState([])
  useEffect(() => {
    async function initiateParks() {
      let previousParkSearched = localStorage.getItem('previousParkSearched');
      let city, state;
      if (!previousParkSearched) {
        city = 'orange county'
        state = 'ca'
      }
      let parksData
      try {
        parksData = await getParksFromDB(city, state)
      } catch(error) {
        parksData = await getParks()
        await postParksToDB()
      }
      setParks(parksData)
    }
    initiateParks()
  }, [])
  return [parks, setParks]
}
