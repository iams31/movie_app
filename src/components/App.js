import React from "react";
import { data } from "../data";
import MovieCard from "./MovieCard";
import { addMovies, showFavourite } from "../actions/index";
import { connect } from "react-redux";
import NavbarWrapper from "./Navbar";
class App extends React.Component {
  componentDidMount() {
    //Make api call
    //Dispatch function
    this.props.dispatch(addMovies(data));
    console.log(this.props);
  }
  isMovieFavourate = (movie) => {
    const { movies } = this.props;
    const { favourate } = movies;
    const index = favourate.indexOf(movie);
    if (index !== -1) {
      return true;
    }
    return false;
  };
  onChangeTab = (val) => {
    this.props.dispatch(showFavourite(val));
  };
  render() {
    const { movies, search } = this.props;
    const { list, showFavourite, favourate } = movies;
    const displayMovies = showFavourite ? favourate : list;
    return (
      <div className="App">
        <NavbarWrapper
          movies={movies}
          search={search}
          dispatch={this.props.dispatch}
        />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourite ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourite ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favourate
            </div>
          </div>
        </div>
        <div className="list">
          {displayMovies.length === 0 ? <div>No Movies to display</div> : null}
          {displayMovies.map((movie, index) => (
            <MovieCard
              movies={movie}
              key={`movies-${index}`}
              dispatch={this.props.dispatch}
              isFavourate={this.isMovieFavourate(movie)}
            />
          ))}
        </div>
      </div>
    );
  }
}
//Creating app wrapper class
// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <storeContext.Consumer>
//         {(store) => <App store={store} />}
//       </storeContext.Consumer>
//     );
//   }
// }
//Connect
function mapStateToProps(state) {
  return {
    movies: state.movies,
    search: state.search,
  };
}
const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;
