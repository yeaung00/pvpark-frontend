async function getParks() {
  const apiUrl = 'https://pvpark-api.vercel.app/api/ca/orange county/parks'
  const parksData = await fetch(apiUrl)
  return parksData
}

export {
  getParks,
}