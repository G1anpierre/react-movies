export const getData = async(searchWord) => {

    try {

        const results = await fetch(`http://www.omdbapi.com/?apikey=f675dcb&s=${searchWord}`);
        const data = await results.json();
        console.log('data: ', data);
        // setState(data.Search);
        // fetchInfo(data.Search);
        return data.Search;
    } catch(error) {
        console.log(error);
    }
    // fetch('http://www.omdbapi.com/?apikey=f675dcb&s=batman')
    // .then((success) => { success.json() } )
    // .then((movies) => { 
    //     console.log('movies : ',movies);
    //     setState(movies);
    //  } )
    // .catch((error)=>{ console.log(error)});
}