import React from 'react'
import Movie from '../movie/movie';
import './movie-group.css';

const MovieGroup = () => {
    return (
        <>
            <div className="container">
                <div className="movie-group-top">
                    <div className="movie-group__mov sm-3">
                        <Movie movie={{ name: 'Nombre de la pelicula', description: 'In magna mollit deserunt veniam est. '}} />
                    </div>
                    <div className="movie-group__mov sm-3">
                        <Movie movie={{ name: 'Nombre de la pelicula', description: 'In magna mollit deserunt veniam est. '}}/>
                    </div>
                    <div className="movie-group__mov sm-3">
                        <Movie movie={{ name: 'Nombre de la pelicula', description: 'In magna mollit deserunt veniam est. '}}/>
                    </div>
                    <div className="movie-group__mov sm-3">
                        <Movie movie={{ name: 'Nombre de la pelicula', description: 'In magna mollit deserunt veniam est. '}}/>
                    </div>
                    
                </div>
                <div className="movie-group-bottom">
                <div className="movie-group__mov small-6 medium-4 large-3">
                        <Movie movie={{ name: 'Nombre de la pelicula', description: 'In magna mollit deserunt veniam est. '}}/>
                    </div>
                    <div className="movie-group__mov small-6 medium-4 large-3">
                        <Movie movie={{ name: 'Nombre de la pelicula', description: 'In magna mollit deserunt veniam est. '}}/>
                    </div>
                    <div className="movie-group__mov small-6 medium-4 large-3">
                        <Movie movie={{ name: 'Nombre de la pelicula', description: 'In magna mollit deserunt veniam est. '}}/>
                    </div>
                    <div className="movie-group__mov small-6 medium-4 large-3">
                        <Movie movie={{ name: 'Nombre de la pelicula', description: 'In magna mollit deserunt veniam est. '}}/>
                    </div>
                    <div className="movie-group__mov small-6 medium-4 large-3">
                        <Movie movie={{ name: 'Nombre de la pelicula', description: 'In magna mollit deserunt veniam est. '}}/>
                    </div>
                    <div className="movie-group__mov small-6 medium-4 large-3">
                        <Movie movie={{ name: 'Nombre de la pelicula', description: 'In magna mollit deserunt veniam est. '}}/>
                    </div>
                    <div className="movie-group__mov small-6 medium-4 large-3">
                        <Movie movie={{ name: 'Nombre de la pelicula', description: 'In magna mollit deserunt veniam est. '}}/>
                    </div>
                    <div className="movie-group__mov small-6 medium-4 large-3">
                        <Movie movie={{ name: 'Nombre de la pelicula', description: 'In magna mollit deserunt veniam est. '}}/>
                    </div>
                    <div className="movie-group__mov small-6 medium-4 large-3">
                        <Movie movie={{ name: 'Nombre de la pelicula', description: 'In magna mollit deserunt veniam est. '}}/>
                    </div>
                    <div className="movie-group__mov small-6 medium-4 large-3">
                        <Movie movie={{ name: 'Nombre de la pelicula', description: 'In magna mollit deserunt veniam est. '}}/>
                    </div>
                    <div className="movie-group__mov small-6 medium-4 large-3">
                        <Movie movie={{ name: 'Nombre de la pelicula', description: 'In magna mollit deserunt veniam est. '}}/>
                    </div>
                    <div className="movie-group__mov small-6 medium-4 large-3">
                        <Movie movie={{ name: 'Nombre de la pelicula', description: 'In magna mollit deserunt veniam est. '}}/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MovieGroup;
