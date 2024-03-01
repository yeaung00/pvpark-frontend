async function getParks() {
  const apiUrl = 'http://localhost:3001/api/ca/orange county/parks'
  const parksData = await fetch(apiUrl)
  return parksData
}

export {
  getParks,
}