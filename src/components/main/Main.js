import React, { useState, useEffect } from 'react';
import MovieGroup from '../movie-group/MovieGroup';
import Title from '../title/Title';
import './main.css';

const Main = () => {

    const [state, setState] = useState([]);
    

    useEffect(() => {
        getData();
    }, []);

    const getData = async() => {

        try {

            const results = await fetch('http://www.omdbapi.com/?apikey=f675dcb&s=batman');
            const data = await results.json();
            console.log('data: ', data);
            setState(data.Search);
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

    return (
        <div className="main">
            <Title />
            <MovieGroup state={state}/>
        </div>
    )
}

export default Main;
