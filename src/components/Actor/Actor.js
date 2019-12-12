import React from 'react';
import { IMAGE_BASE_URL } from '../../config';
import PropTypes from 'prop-types';
import './Actor.scss';
import ActorInfo from './ActorInfo';

const Actor = ({ actor }) => {

    const POSTER_SIZE = "w154";

    return (
        <div className="actor">
            <img
                src={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : './images/no-image.svg'}
                alt="actorthumb"
            />
            <div className="actor-info">
                <span className="actor-name">{actor.name}</span>
                <span className="actor-character">{actor.character}</span>
                <div className="more-info"><ActorInfo actorId={actor.id} /></div>
            </div>
            
        </div>
        
    )
}

Actor.propTypes = {
    actor: PropTypes.object
}

export default Actor;