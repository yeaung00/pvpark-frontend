import { IoPerson } from "react-icons/io5";
import Badges from '../../common/Badges'
import { deletePlayerInGame, postPlayerInGame } from "../../lib/supabase/players";
import useGetPlayerInGame from "../hooks/useGetPlayerInGame";
import { deleteGameFromDB } from "../../lib/supabase/games";

export default function GameCard({ setGameCards, email, name, max_players, game_type, player_count, id }) {
  const player = useGetPlayerInGame()
  const playerIsInGame = player?.game_id == id
  const notJoinable = player_count == max_players && !playerIsInGame
  async function toggleJoinGame() {
    if (notJoinable) {
      return
    }
    if (playerIsInGame) {
      await deletePlayerInGame(email)
      if (player_count == 1) {
        await deleteGameFromDB(id)
        setGameCards(prevGames => prevGames
          .map(game => game.id != id))
      }
    } else {
      await postPlayerInGame({ email, id })
    }
  }
  return (
    <div className='bg-white shadow-md border flex flex-col justify-between gap-1 lg:gap-3 rounded-md p-3 lg:text-xl'>
      <p>{name}</p>
      <div className="flex items-center">
        <IoPerson />{player_count}/{max_players}
      </div>
      <Badges tags={[game_type]} bgColor='bg-indigo-900' />
      <button onClick={toggleJoinGame} className={`w-full mt-1 border rounded-md ${playerIsInGame ? "bg-red-600" : "bg-emerald-700"} ${notJoinable ? 'cursor-not-allowed' : ''} text-white p-1 lg:p-2`}>
        {playerIsInGame ? "Leave" : "Join"}
      </button>
    </div>
  )
}
