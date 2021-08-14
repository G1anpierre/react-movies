import React, { useState } from 'react';
import './search.css';
import Button from '../button/Button';
import { connect } from 'react-redux';
import { handleSearch } from '../../actions';


const Search = ({handleSearch}) => {

    const [search, setSearch] = useState('');

    const handleChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('handleling submit');
        handleSearch(search);
    }

    const myStyling = {
        width: '100%',
        display: 'flex',
    }

    return (
        <div className="search">
            <form onSubmit={handleSubmit} style={myStyling}>
                <input onChange={handleChange} value={search} type="search" className="input-search" placeholder='Search your favorite movie'/>
                <Button styling='search-button' search>
                    <i className="icon-search" />
                </Button>
            </form>
        </div>
    )
}


const mapDispatchToProps = ( dispatch ) => {
    return {
        handleSearch: (searchWord) => dispatch(handleSearch(searchWord)),
    }
}

export default connect(null, mapDispatchToProps)(Search);
