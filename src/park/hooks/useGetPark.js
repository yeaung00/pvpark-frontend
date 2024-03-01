import { useState, useEffect} from 'react'
import { getParkFromDB } from '../../lib/supabase/parks'

export default function useGetPark(parkId, games) {
  const [park, setPark] = useState({})
  useEffect(() => {
    async function getPark() {
      const parkData = await getParkFromDB(parkId)
      setPark(parkData)
    }
    getPark()
  }, [parkId, games])
  return park
}
