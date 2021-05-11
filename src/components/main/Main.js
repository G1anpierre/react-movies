import React from 'react'
import MovieGroup from '../movie-group/MovieGroup';
import Title from '../title/Title';
import './main.css';

const Main = () => {
    return (
        <div className="main">
            <Title />
            <MovieGroup />
        </div>
    )
}

export default Main;
