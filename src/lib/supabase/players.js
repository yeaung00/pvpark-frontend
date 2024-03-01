import supabase from "./client"

async function getPlayerInGame(email) {
  const { data, error } = await supabase
    .from('players_in_game')
    .select()
    .eq('email', email)
  if (error) { 
    console.log(error)
  }
  return data[0]
}
async function postPlayerInGame(playerInGame) {
  const { error } = await supabase
    .from('players_in_game')
    .insert(playerInGame)
  if (error) {
    console.log(error)
  }
}
async function getPlayerCountInPark(parkId) {
  const { count, error } = await supabase
    .from('players_in_game')
    .select('*', { count: 'exact', head: true })
    .eq('park_id', parkId)
  if (error) { 
    console.log(error)
  }
  return count
}
async function getPlayerCountInGame(gameId) {
  const { count, error } = await supabase
    .from('players_in_game')
    .select('*', { count: 'exact', head: true })
    .eq('park_id', gameId)
  if (error) { 
    console.log(error)
  }
  return count
}
async function deletePlayerInGame(email) {
  const { error } = await supabase
    .from('players_in_game')
    .delete()
    .eq('email', email)
  if (error) { 
    console.log(error)
  }
}

export {
  postPlayerInGame,
  deletePlayerInGame,
  getPlayerInGame,
  getPlayerCountInPark,
  getPlayerCountInGame
}