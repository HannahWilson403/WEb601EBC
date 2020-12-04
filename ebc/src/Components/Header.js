import React from 'react';
import './Header.css';
import logo from '../ebcLogo.png';

function Header() {
    return (
        <div className="Header">
            <header>
            <img scr={require('./ebcLogo.png')} alt="Logo"/>
            <h1>EBC</h1>
            <h3>Extreme Bike Club</h3>
            </header>
           
        </div>
    )
} 

export default Header;