import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import MovieGroup from '../movie-group/MovieGroup';
import Title from '../title/Title';
import './main.css';

const Main = ({searchWord}) => {

    const [state, setState] = useState([]);
    

    useEffect(() => {
        console.log('inside useEffect: ', searchWord);
        getData(searchWord);
    }, [searchWord]);

    const getData = async(searchWord) => {

        try {

            const results = await fetch(`http://www.omdbapi.com/?apikey=f675dcb&s=${searchWord}`);
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
    console.log('searchWord : ', searchWord);
    console.log('state : ', state);

    return (
        <div className="main">
            <Title />
            <MovieGroup state={state}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        searchWord: state.search
    }
}

export default connect(mapStateToProps, null)(Main);
