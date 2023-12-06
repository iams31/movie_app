// {
//     type:'ADD_MOVIES'
// }
// {
//     type:'DELETE_MOVIE'
// }
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURATES = "ADD_FAVOURATES";
export const ADD_UNFAVOURATES = "ADD_UNFAVOURATES";
export const SHOW_FAVOURITE = "SHOW_FAVOURITE";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
//action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}
export function addFavourates(movies) {
  return {
    type: ADD_FAVOURATES,
    movies,
  };
}
export function addUnFavourate(movies) {
  return {
    type: ADD_UNFAVOURATES,
    movies,
  };
}
export function showFavourite(val) {
  return {
    type: SHOW_FAVOURITE,
    val,
  };
}
export function addMoviestoList(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
}
export function addMovieSearchResult(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
}
