import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieThumb.scss';

const MovieThumb = ({ image, movieId, movieName, clickable }) => (
    <div className="movie-thumb">
        {/* You can send props via the Links "to" object. Here we create our own "movieName" */}
        {clickable ?
            <Link to={{ pathname: `/${movieId}`, movieName: `${movieName}` }}>
                <img className="clickable" src={image} alt="movie thumb" />
            </Link>
            :
            <img src={image} alt="movie thumb" />
           
        }
    </div>
)

MovieThumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    movieName: PropTypes.string,
    clickable: PropTypes.bool
}

export default MovieThumb;