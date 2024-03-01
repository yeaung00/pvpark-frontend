import { useEffect, useState } from 'react'
import { getPlayerInGame } from '../../lib/supabase/players'
import supabase from '../../lib/supabase/client'

export default function useGetPlayerInGame() {
  const [player, setPlayer] = useState()
  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser()
      const playerData = await getPlayerInGame(user?.email)
      setPlayer(playerData)
    }
    getUser()
  }, [])
  return player
}
