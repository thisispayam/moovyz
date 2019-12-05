import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navigation.scss';

const Navigation = ({ movie }) => (
    <div className="navigation">
        <div className="navigation-content item-flex-center ">
            <Link to="/">
                {/* <p>Home</p> */}
            </Link>
            {movie ? <p>{movie}</p> : null }
            
        </div>
    </div>
)

Navigation.propTypes = {
    movie: PropTypes.string
}

export default Navigation;