
export const LogoUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png';

// there are 2 type of export , default export and named export .we can use only time default export 
// in one file while we can use named export multiple time in a single file
export const POPULAR_API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=9facf8213e4597c4a88a15accae142ec&language=en-US';
export const UPCOMING_API_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=9facf8213e4597c4a88a15accae142ec&language=en-US';
export const TOPRATED_API_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=9facf8213e4597c4a88a15accae142ec&language=en-US';
export const NOWPLAYING_API_URL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=9facf8213e4597c4a88a15accae142ec&language=en-US';


export const moviesType = {
    Upcoming : 'upcoming',
    Toprated : 'Top Rated',
    popular :  'Popular'
}