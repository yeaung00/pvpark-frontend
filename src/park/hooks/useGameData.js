import { useEffect, useState } from 'react'

export default function useGameData(user, parkId) {
  const [gameData, setGameData] = useState({})
  useEffect(() => {
    const gameId = user?.user_metadata.email + String(Date.now())
    setGameData({ name: '', max_players: 6, game_type: 'basketball', player_count: 1, park_id: parkId, id: gameId })
  }, [parkId, user])
  return [gameData, setGameData]
}
