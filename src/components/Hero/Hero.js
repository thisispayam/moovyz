import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './Hero.scss';

const Hero = ({ image, text, title, movieId, clickable, movieName, trailer, ...props }) => (
  
    <div className="hero"
        style={{
            background:
                `linear-gradient(to bottom, rgba(0,0,0,0)
        39%,rgba(0,0,0,0)
        41%,rgba(0,0,0,0.65)
        100%),
        url('${image}'), #1c1c1c`
        }}
    >
        { console.log(props)}
        <div className="hero-content">
            <div className="hero-text">
                <p className="red-title">Trending</p>
                <h1>{title}</h1>
                <p>{text}</p>
                <p>{trailer}</p>
                {clickable ?
                    <Link to={{ pathname: `/${movieId}`, movieName: `${movieName}` }}>
                        <p className="learn-more">Learn more</p>
                    </Link>
                    :
                    null
                }
               
            </div>
        </div>
    </div>
)

Hero.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
}

export default Hero;