// Configuration for TMDB
// To se the latest configuration fetch it from https://api.themoviedb.org/3/configuration?api_key=b8d2e321f2ba26500bbb823e94772741

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'b8d2e321f2ba26500bbb823e94772741';




// Images
// An image URL looks like this example:
// http://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg

const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/';

//Trailers
// https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US
const VIDEO_BASE_URL = 'https://api.themoviedb.org/3/movie/';
//Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280'

// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w500'

export {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  VIDEO_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
}