import React from 'react'
import logoBlockbuster from '../../images/logo-blockBuster.png';
import './logo.css';

const Logo = () => {
    return (
        <div className="logo">
            <a href='/'>
                <img src={logoBlockbuster} height="64px" width="106.81px" alt={logoBlockbuster}/>
            </a>
        </div>
    )
}

export default Logo;
