import { useEffect, useRef } from "react"

export default function Modal({ openModal, setOpenModal, handleSubmit, gameData, setGameData }) {
  const input = useRef(null)
  useEffect(() => {
    if (input.current && openModal) {
      input.current.focus()
    }
  }, [openModal])
  function handleChange(e) {
    const { name, value } = e.target
    
    setGameData(prev => ({ ...prev, [name]: value }))
  }
  return (
    <div className={`border fixed inset-0 overflow-y-auto ${openModal ? 'block' : 'hidden'}`}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <form onSubmit={handleSubmit} className="rounded-lg flex flex-col gap-3 relative bg-slate-50 p-6 max-w-md mx-auto">
          <h2 className="text-2xl font-bold">Create game</h2>
          <input ref={input} name="name" value={gameData.name} onChange={handleChange} type="text" className="rounded-lg p-2 border-2" placeholder="Game name"/>
          <div className="">
            <p>Max players:</p>
            <select onChange={handleChange} name="max_players" value={gameData.max_players} id="" className="rounded-lg p-2 border-2 w-full">
              <option value={6}>6</option>
              <option value={10}>10</option>
            </select>
          </div>
          <div>
            <p>Game type:</p>
            <select onChange={handleChange} name="game_type" value={gameData.game_type} id="" className="rounded-lg p-2 border-2 w-full">
              <option value='Soccer'>Soccer</option>
              <option value='Basketball'>Basketball</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <button type="button" className="bg-red-600 p-2 text-white rounded" onClick={() => setOpenModal(prev => !prev)}>Cancel</button>
            <button type="submit"className="p-2 bg-blue-600 text-white rounded" onClick={() => handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}