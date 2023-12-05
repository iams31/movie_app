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
