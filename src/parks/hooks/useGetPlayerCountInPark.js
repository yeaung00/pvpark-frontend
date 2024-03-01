import { useEffect, useState } from 'react'
import { getPlayerCountInPark } from '../../lib/supabase/players'


export default function useGetPlayerCountInPark(parkId, games) {
  const [gameCount, setGameCount] = useState()
  useEffect(() => {
    async function getPlayerCount() {
      console.log(parkId)
      const gameCountData = await getPlayerCountInPark(parkId)
      setGameCount(gameCountData)
    }
    getPlayerCount()
  }, [parkId, games])
  return gameCount
}
