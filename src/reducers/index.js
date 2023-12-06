import { combineReducers } from "redux";
import {
  ADD_MOVIES,
  ADD_FAVOURATES,
  ADD_UNFAVOURATES,
  SHOW_FAVOURITE,
  ADD_MOVIE_TO_LIST,
  ADD_SEARCH_RESULT,
} from "../actions/index";
const initialMovieState = {
  list: [],
  favourate: [],
  showFavourite: false,
};
export function movies(state = initialMovieState, action) {
  //We prefer switch case over if else in react
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVOURATES:
      return {
        ...state,
        favourate: [action.movies, ...state.favourate],
      };
    case ADD_UNFAVOURATES:
      const filteredArray = state.favourate.filter(
        (movies) => movies.Title !== action.movies.Title
      );
      return {
        ...state,
        favourate: filteredArray,
      };
    case SHOW_FAVOURITE:
      return {
        ...state,
        showFavourite: action.val,
      };

    default:
      return state;
  }
}
const initialSearchState = {
  result: {},
  showSearchResults: false,
};
export function search(state = initialSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        results: action.movie,
        showSearchResults: true,
      };
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        showSearchResults: false,
      };
    default:
      return state;
  }
}
// const initialRootState = {
//   movies: initialMovieState,
//   search: initialSearchState,
// };
// export default function rootReducer(state = initialRootState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action),
//   };
// }
export default combineReducers({
  movies,
  search,
});
