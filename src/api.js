export const getSearchData = async searchWord => {
  try {
    const results = await fetch(
      `http://www.omdbapi.com/?apikey=f675dcb&s=${searchWord}`,
    )
    const data = await results.json()
    console.log('data from omdbapi: ', data)
    return data.Search
  } catch (error) {
    console.log(error)
  }
}
