import { useState, useEffect } from 'react'
import { getParksFromDB } from '../../lib/supabase/parks'

export default function useGetParks() {
  const [parks, setParks] = useState([])
  useEffect(() => {
    async function getParks() {
      const parksData = await getParksFromDB('orange county', 'ca')
      setParks(parksData)
    }
    getParks()
  }, [])
  return parks
}
