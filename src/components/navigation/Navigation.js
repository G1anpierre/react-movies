import React from 'react'
import './navigation.css'

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul className="navigation__items">
                <li className="item active">Todas</li>
                <li className="item">Mas valoradas</li>
                <li className="item">Menos valoradas</li>
            </ul>
        </nav>
    )
}

export default Navigation;
