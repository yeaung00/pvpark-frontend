import supabase from "./client"

async function getGamesFromDB(parkId) {
  const { data } = await supabase
    .from('games')
    .select()
    .eq('park_id', parkId)
  return data
}

async function postGameToDB(game) {
  const { error } = await supabase
    .from('games')
    .insert(game)
  console.log(error)
}
async function updateGame(gameId, game) {
  await supabase
    .from('games')
    .update(game)
    .eq('id', gameId)
}
async function deleteGameFromDB(gameId) {
  await supabase
    .from('games')
    .delete()
    .eq('id', gameId)
}
export {
  getGamesFromDB,
  postGameToDB,
  updateGame,
  deleteGameFromDB,
}