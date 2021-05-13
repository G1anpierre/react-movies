import React, { useState } from 'react';
import './search.css';
import Button from '../button/Button';


const Search = () => {

    const [search, setSearch] = useState('');

    const handleChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    }

    return (
        <div className="search">
            <input onChange={handleChange} value={search} type="search" className="input-search" placeholder='Search your favorite movie'/>
            <Button styling='search-button' search>
                <i className="icon-search" />
            </Button>
        </div>
    )
}

export default Search;
