import { useState, useEffect } from 'react'
import { getGamesFromDB } from '../../lib/supabase/games'

export default function useGetGames(parkId, openModal) {
  const [games, setGames] = useState([])
  useEffect(() => {
    async function getGames() {
      const gamesData = await getGamesFromDB(parkId)
      setGames(gamesData)
    }
    getGames()
  }, [parkId, openModal])
  return [games, setGames]
}