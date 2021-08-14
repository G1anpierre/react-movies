import React from 'react'
import Movie from '../movie/movie';
import { connect } from 'react-redux';
import './movie-group.css';

const MovieGroup = ({data}) => {


    return (
        <>
            <div className="container">
                <div className="movie-group-bottom">
                    {data && data.map(({Title, Year, Poster}, index) => (
                        <div className="movie-group__mov small-6 medium-4 large-3" key={index}>
                            <Movie movie={{ name: `${Title}`, description: `${Year}`, image: `${Poster}`}}/>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.data,
    }
}

export default connect(mapStateToProps)(MovieGroup);
