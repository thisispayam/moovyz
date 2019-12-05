import React from 'react'
import './Footer.scss'
const Footer = () => {
    return (
        <footer>
            <p>{`${(new Date().getFullYear())}, MOOVYZ`}</p>
            <img src="./images/tmdb.svg" alt="The Movie Database (TMDb)" width="45" height="40" /> 
        </footer>
    )
}

export default Footer