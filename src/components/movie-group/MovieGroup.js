import React from 'react'
import Movie from '../movie/movie';
import './movie-group.css';

const MovieGroup = () => {
    return (
        <>
            <div className="container">
                <div className="movie-group-top">
                    <div className="movie-group__mov sm-3">
                        <Movie />
                    </div>
                    <div className="movie-group__mov sm-3">
                        <Movie />
                    </div>
                    <div className="movie-group__mov sm-3">
                        <Movie />
                    </div>
                    <div className="movie-group__mov sm-3">
                        <Movie />
                    </div>
                    
                </div>
                <div className="movie-group-bottom">
                <div className="movie-group__mov small-6 medium-4 large-3">
                        <Movie />
                    </div>
                    <div className="movie-group__mov small-6 medium-4 large-3">
                        <Movie />
                    </div>
                    <div className="movie-group__mov small-6 medium-4 large-3">
                        <Movie />
                    </div>
                    <div className="movie-group__mov small-6 medium-4 large-3">
                        <Movie />
                    </div>
                    <div className="movie-group__mov small-6 medium-4 large-3">
                        <Movie />
                    </div>
                    <div className="movie-group__mov small-6 medium-4 large-3">
                        <Movie />
                    </div>
                    <div className="movie-group__mov small-6 medium-4 large-3">
                        <Movie />
                    </div>
                    <div className="movie-group__mov small-6 medium-4 large-3">
                        <Movie />
                    </div>
                    <div className="movie-group__mov small-6 medium-4 large-3">
                        <Movie />
                    </div>
                    <div className="movie-group__mov small-6 medium-4 large-3">
                        <Movie />
                    </div>
                    <div className="movie-group__mov small-6 medium-4 large-3">
                        <Movie />
                    </div>
                    <div className="movie-group__mov small-6 medium-4 large-3">
                        <Movie />
                    </div>
                    <Movie />

                </div>
            </div>
        </>
    )
}

export default MovieGroup;
