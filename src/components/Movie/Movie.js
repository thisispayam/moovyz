import React, { Component, Fragment } from 'react';
import { API_URL, API_KEY } from '../../config';
import Actor from '../Actor/Actor';
import Director from '../Director/Director';
import MovieInfo from '../MovieInfo/MovieInfo';
import Trailer from '../Trailer/Trailer';
import MovieThumbGrid from '../MovieThumbGrid/MovieThumbGrid';
import Spinner from '../Spinner/Spinner';
import './Movie.scss';
import NotFound from '../NotFound/NotFound';

class Movie extends Component {
    state = {
        movie: null,
        actors: null,
        directors: [],
        loading: false
    }

    componentDidMount() {
        const { movieId } = this.props.match.params;
      
        if (localStorage.getItem(`${movieId}`)) {
            let state = JSON.parse(localStorage.getItem(`${movieId}`))
            this.setState({ ...state })
        } else {
            this.setState({ loading: true })
            // First fetch the movie ...
            let api = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
            this.fetchItems(api);
        }
    }

    fetchItems = (api) => {
        const { movieId } = this.props.match.params;

        fetch(api)
            .then(result => result.json())
            .then(result => {

                if (result.status_code) {
                    // If we don't find any movie
                    this.setState({ loading: false });
                } else {
                    this.setState({ movie: result }, () => {
                        // ... then fetch actors in the setState callback function
                        let api = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
                    
                       
                        fetch(api)
                            .then(result => result.json())
                            .then(result => {
                                const directors = result.crew.filter((member) => member.job === "Director");
                                this.setState({
                                    actors: result.cast,
                                    directors,
                                    loading: false
                                }, () => {
                                    localStorage.setItem(`${movieId}`, JSON.stringify(this.state));
                                    
                                })
                            })
                    })
                }
            })
            .catch(error => console.error('Error:', error))
    }

    render() {
        // const { movieName } = this.props.location;
        const { movie, directors, actors, loading} = this.state;
        const { movieId } = this.props.match.params;
        return (
            <div className="movie">
                {movie ?
                    <Fragment>
                        <div className='name'>
                            <MovieInfo movie={movie} directors={directors} />
                        </div>
                        <div className="trailer">
                            <Trailer movieId={movieId} />
                        </div>
                    </Fragment>
                   
                    : null}
                {/* <iframe title= "trailerFrame" width="560" height="315" src={`https://www.youtube.com/embed/${key}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                {!actors && !loading ? <NotFound /> : null}
                {directors ?
                    <div className="actor-grid">
                        <div className="container">
                            {directors.length > 1 ? <h1>DIRECTORS</h1> : <h1>DIRECTOR</h1>}
                        </div>
                        <MovieThumbGrid>
                            {directors.map((item, j) => (
                                <Director key={j} director={item} />
                            ))}

                        </MovieThumbGrid>
                    </div>
                    : null}
                {!directors && !loading ? <h1 className="container">No director information found</h1> : null}


                {actors ?
                    <div className="actor-grid">
                        <MovieThumbGrid header={'Actors'}>
                            {actors.map((element, i) => (
                                 <Actor key={i} actor={element} />
                            ))}
                           
                        </MovieThumbGrid>
                    </div>
                    : null}
             
                {loading ? <Spinner /> : null}
            </div>
        )
    }
}

export default Movie;