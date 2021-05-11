import React from 'react';
import HardKill from '../../images/Hard Kill.png';
import Star from '../../images/Vector.png';
import './movie.css';

const movie = () => {
    return (
        <div className="movie">
            <div className="movie-wrapper">
                <img src={HardKill} className="image-movie"/>
                <div className="movie-rating">
                    <span className="star"><img src={Star}/></span>
                    <span className="rating">7.1</span>
                </div>
            </div>
            <div className="movie-description">
                <h3 className="movie-description__title">Nombre de la pelicula</h3>
                <p className="movie-description__text">In magna mollit deserunt veniam est. </p>
            </div>

        </div>
    )
}

export default movie
