import React, { Component } from 'react';
import { API_URL, API_KEY } from '../../config';
import Spinner from '../Spinner/Spinner';
import './Trailer.scss';

class Trailer extends Component {
    state = {
        movie: null,
        loading: false,
        key: null
    }
// /trailer link format:  https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US
    componentDidMount() {
        const { movieId } = this.props;
        fetch(`${API_URL}movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`)
            .then(response => {
                return response.json();      
            })
            .then(result => { 
                this.setState({ key: result.results[1].key });
            })
    }

    render() {
        // const { movieName } = this.props.location;
        const { key, loading} = this.state;

        return (
            <div className="trailer-frame">  
                <h1>TRAILER</h1>         
                <iframe title="trailerFrame" width="100%" height="415" src={`https://www.youtube.com/embed/${key}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                {loading ? <Spinner /> : null}
            </div>
        )
    }
}

export default Trailer;