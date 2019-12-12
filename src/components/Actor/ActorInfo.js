import React, { Component } from 'react';
import { API_URL, API_KEY } from '../../config';
import Spinner from '../Spinner/Spinner';
import './Actor.scss';

class ActorInfo extends Component {
    state = {
        loading: false,
        birthday: null,
        actor: null,
        pob: null
    }
    // /trailer link format:  https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US
    componentDidMount() {
        const { actorId } = this.props;
        fetch(`${API_URL}person/${actorId}?api_key=${API_KEY}&language=en-US`)
            .then(response => {
                return response.json();
            })
            .then(result => {
                this.setState({ bio: result.biography, birthday: result.birthday, pob: result.place_of_birth});
            })
    }

    render() {
        const { birthday, loading, pob } = this.state;

        return (
            <div className="actor-info">
                {birthday ? 
                <p>{birthday}</p> : null}
                {pob ? 
                <p>{pob}</p> : null}
                {loading ? <Spinner /> : null}
            </div>
        )
    }
}

export default ActorInfo;