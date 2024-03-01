import {  useState } from "react"
import { useParams } from "react-router-dom"
import Card from "../common/Card"
import Weather from "./components/Weather"
import Games from "./components/Games"
import Modal from "./components/Modal"
import Highlights from "./components/Highlights"
import useGetPark from "./hooks/useGetPark"
import useGetGames from "./hooks/useGetGames"
import Search from "../common/Search"
import { postGameToDB } from "../lib/supabase/games"
import { updatePark } from "../lib/supabase/parks"
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom"
import useGetUser from "../auth/hooks/useGetUser"
import { getPlayerInGame, postPlayerInGame } from "../lib/supabase/players"
import useGameData from "./hooks/useGameData"

export default function Park() {
  const user = useGetUser()
  const { parkId } = useParams()
  const [input, setInput] = useState('')
  const [gameData, setGameData] = useGameData(user, parkId)
  const [openModal, setOpenModal] = useState(false)
  const [games, setGames] = useGetGames(parkId, openModal)
  const park = useGetPark(parkId, games)

  async function handleSubmit(e) {
    e.preventDefault()
  }
  async function handleNewGame(e) {
    e.preventDefault()
    const playerInGame = await getPlayerInGame(user?.email)
    if (gameData.name === '') return alert('Please add game name.')
    if (user && !('email' in user)) return alert("Please login to create a new game.")
    if (playerInGame) return alert("Please leave current game to join a new game.")
    const newPlayer = { email: user?.email, game_id: gameData.id, park_id: parkId }
    const newPark = { ...park, player_count: park?.player_count + 1 }
    // console.log(gameData)
    try {
      await postGameToDB(gameData)
      await updatePark(newPark, parkId)
      await postPlayerInGame(newPlayer)
    } catch (error) {
      console.log(error, 'ERROR')
    }
    const gameId = user?.user_metadata.email + String(Date.now())
    setGameData({ name: '', max_players: 6, game_type: 'basketball', player_count: 1, park_id: parkId, id: gameId })
    setOpenModal(false)
  }
  return (
    <div className="flex flex-col gap-3">
      <Link to={'/parks'} className="flex items-center w-fit">
          <FaChevronLeft />
          <p>Back to parks</p>
      </Link>
      <div className="flex flex-col md:flex-row gap-3">
        <Weather city={park.city} state={park.state} />
        <Card {...park} buttonText={''} games={games} />
        <Highlights />
      </div>
      <Search handleSubmit={handleSubmit} setInput={setInput} input={input} />
      <div className="flex items-center gap-3">
        <p className='text-3xl font-bold'>Games</p>
        <button onClick={() => setOpenModal(true)} className='bg-emerald-700 text-white border rounded-md p-2 text-xl w-fit'>New game</button>
      </div>
      <Games games={games} setGames={setGames} user={user} />
      <Modal openModal={openModal} setOpenModal={setOpenModal} handleSubmit={handleNewGame} gameData={gameData} setGameData={setGameData}/>
    </div>
  )
}
