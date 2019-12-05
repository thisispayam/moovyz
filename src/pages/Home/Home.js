import React,{Component} from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config';
import Hero from '../../components/Hero/Hero';
import Search from '../../components/Search/Search';
import MovieThumbGrid from '../../components/MovieThumbGrid/MovieThumbGrid';
import MovieThumb from '../../components/MovieThumb/MovieThumb';
import Spinner from '../../components/Spinner/Spinner';
import LoadBtn from '../../components/Buttons/LoadBtn';
class Home extends Component {
    state= {
        movies: [],
        heroImage: null,
        loading: false,
        currentPage: 0,
        totalPages: 0,
        searchTerm: ''
    }
    componentDidMount() {
        this.setState({ loading: true })
        const api = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        this.fetchItems(api);
    }

    loadMoreItems = () => {
        const { searchTerm, currentPage } = this.state;

        let api = '';
        this.setState({ loading: true })

        if (searchTerm === '') {
            api = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage + 1}`;
        } else {
            api = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${currentPage + 1}`;
        }
        this.fetchItems(api);
    }

    fetchItems = (api) => {
      
        const { movies, heroImage, searchTerm } = this.state;

        fetch(api)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    movies: [...movies, ...result.results], // keep the old movies and append the ones when loading more
                    heroImage: heroImage || result.results[0], //grabbing the first result
                    loading: false,
                    currentPage: result.page,
                    totalPages: result.total_pages
                }, () => {
                    // Remember state for the next mount if we´re not in a search view
                    if (searchTerm === "") {
                        sessionStorage.setItem('HomeState', JSON.stringify(this.state));
                    }
                })
            })
            .catch(error => console.error('Error:', error))
    }

    searchItems = (searchTerm) => {

        let api = '';
        this.setState({
            movies: [],
            loading: true,
            searchTerm: searchTerm
        })

        if (searchTerm === "") {
            api = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        } else {
            api = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
        }
        this.fetchItems(api);
    }


    render(){
        const { movies, heroImage, loading, currentPage, totalPages, searchTerm } = this.state;

        return (
            <div className="home">
               {heroImage ?
                    <div className="home-hero-search">
                    <Hero 
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
                    title={heroImage.original_title} 
                    text={heroImage.overview} 
                    clickable={true}
                    movieId={heroImage.id}
                    // trailer={`${API_URL}movie/${heroImage.id}/videos?api_key=${API_KEY}`}
                    />
                    <Search callback={this.searchItems}/>
                    </div> : null }
                <MovieThumbGrid
                    header={searchTerm ? 'Search Result' : 'Popular Movies'}
                    loading={loading}
                >
                    {movies.map((element, i) => (
                        <MovieThumb
                            key={i}
                            clickable={true}
                            image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : './images/no-image.svg'}
                            movieId={element.id}
                            movieName={element.original_title}

                />
            ))}
                </MovieThumbGrid>
                {loading ? <Spinner /> : null}
                {(currentPage <= totalPages && !loading) ?
                    <LoadBtn text="Load Mored" onClick={this.loadMoreItems} />
                    : null
                }
                
            </div>
        )
    }
    
}

export default Home
