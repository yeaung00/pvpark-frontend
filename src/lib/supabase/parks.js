import supabase from "./client"

async function getParksFromDB(city, state) {
  const { data, error } = await supabase
    .from('parks')
    .select('*')
    .eq('near_by', `${city},${state}`)
    .order('player_count', { ascending: false })
  if (error) { 
    console.log(error)
  }
  return data
}
async function getParkFromDB(parkId) {
  const { data, error } = await supabase
    .from('parks')
    .select()
    .eq('id', parkId)
  if (error) { 
    console.log(error)
  }
  return data[0]
}
async function postParksToDB(parks) {
  const { error } = await supabase
    .from('parks')
    .upsert(parks, { ignoreDuplicates: false })
  if (error) { 
    console.log(error)
  }
}
async function updatePark(park, parkId) {
  const { error } = await supabase
    .from('parks')
    .upsert(park)
    .eq('id', parkId)
  if (error) {
    console.log(error, 'ERROR PARK')
  }
}
export {
  getParksFromDB,
  getParkFromDB,
  postParksToDB,
  updatePark,
}