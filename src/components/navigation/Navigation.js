import React from 'react'
import './navigation.css'
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul className="navigation__items">
                    <Link to="/" className="item">Todas</Link>
                    <Link to="/masvaloradas" className="item">Mas valoradas</Link>
                    <Link to="/menosvaloradas" className="item">Menos valoradas</Link>
            </ul>
        </nav>
    )
}

export default Navigation;
