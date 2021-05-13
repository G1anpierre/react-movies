import React from 'react';
import './search.css';
import Button from '../button/Button';

const Search = () => {
    return (
        <div className="search">
            <input type="search" className="input-search" placeholder='Search your favorite movie'/>
            <Button styling='search-button' search>
                <i className="icon-search" />
            </Button>
        </div>
    )
}

export default Search;
