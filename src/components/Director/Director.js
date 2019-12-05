import React, { Fragment } from 'react';
import { IMAGE_BASE_URL } from '../../config';
import PropTypes from 'prop-types';
import './Director.scss';

const Director = ({ director }) => {

    const POSTER_SIZE = "w154";

    return (
        <Fragment>
            <div className="director">
                <img
                    src={director.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${director.profile_path}` : './images/no-image.svg'}
                    alt="directorthumb"
                />
                <div className="actor-info">
                    <span className="actor-name">{director.name}</span>
                    <span className="actor-character">{director.character}</span>
                </div>
            </div>
           
        </Fragment>

    )
}

Director.propTypes = {
    director: PropTypes.object
}

export default Director;