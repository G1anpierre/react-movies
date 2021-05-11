import React from 'react';
import './header.css';
import Navigation from '../navigation/Navigation';
import Search from '../search/Search';
import Logo from '../logo/Logo';

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <Logo />
            </div>
            <div className="navigation-container">
                <Navigation />
            </div>
            <div className="search-container">
                <Search />
            </div>
            
        </header>
    )
}

export default Header;
