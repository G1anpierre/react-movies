import React from 'react';
import './search.css';

const Search = () => {
    return (
        <div className="search">
            <input type="search" className="input-search"/>
            <button className="search-button">
                <i>Lupa</i>
            </button>
        </div>
    )
}

export default Search;
