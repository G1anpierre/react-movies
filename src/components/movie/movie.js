import React from 'react';
import Star from '../../images/Vector.png';
import './movie.css';

const movie = ({ movie: {name: movieName, description: movieDescription, image: movieImage} }) => {

    return (
        <div className="movie">
            <div className="movie-wrapper">
                <img src={movieImage} className="image-movie" alt={movieName} height="239px" width="353px"/>
                <div className="movie-rating">
                    <span className="star"><img src={Star} alt='star'/></span>
                    <span className="rating">7.1</span>
                </div>
            </div>
            <div className="movie-description">
                <h3 className="movie-description__title">{movieName}</h3>
                <p className="movie-description__text">{movieDescription}</p>
            </div>
        </div>
    )
}

export default movie
