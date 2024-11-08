import React from 'react';
import NavBar from './NavBar';

function Header() {
    return (
        <div id='main'>
            <div className='name'>
                <div className="content">
                <h1><span>Launch Your App </span> with confidence and creativity</h1>
                
                <button className='cv-btn'><a href='#' >Book Consultation</a></button>
                </div>
                <div className="hero-image">
                    <img src="background6.png" alt="hero-image" />
                </div>
            </div>
        </div>
    );
}

export default Header;
