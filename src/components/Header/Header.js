import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import './Header.scss';

const Header = () => (
    <div className="header">
        <div className="header-content item-flex-center">
            <Link to="/">
                <div className="logo">
                    {/* <img  src="/images/moovyz-logo.png" alt="moovyz-logo" /> */}
                    <p>M<span>O<span className="l-pupil">.</span>O<span className="r-pupil">.</span></span>VYZ</p>
                </div>
            </Link>  
             
            <Navigation/>   
        </div>
    </div>
)

export default Header;