import React from 'react';
import NavBar from './NavBar';

function Header() {
    return (
        <div id='main'>
            <NavBar />
            <div className='name'>
                <h1><span>Launch Your App </span> with confidence and creativity</h1>
                <p className='details'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <a href='#' className='cv-btn'>Book Consultation</a>
            </div>
        </div>
    );
}

export default Header;
