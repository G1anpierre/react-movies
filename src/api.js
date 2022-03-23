export const getSearchData = async searchWord => {
  try {
    const results = await fetch(
      `http://www.omdbapi.com/?apikey=f675dcb&s=${searchWord}`,
    )
    const data = await results.json()
    return data.Search
  } catch (error) {
    console.log(error)
  }
}
