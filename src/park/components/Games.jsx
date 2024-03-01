import GameCard from './GameCard'
import { useEffect, useState, } from 'react'

export default function Games({ user, games }) {
  const [gameCards, setGameCards] = useState()
  useEffect(() => {
    const gameCardsData = games
      .map((game) => (
        <GameCard
          key={game.id}
          {...game}
          email={user?.user_metadata.email}
          setGameCards={setGameCards}
        />))
    setGameCards(gameCardsData)
  }, [games, user])
  

  return (
    <div className='flex flex-col gap-3'>
      {games &&
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {gameCards}
      </div>}
    </div>
  )
}
