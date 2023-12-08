import React from "react";
import Navbar from "./Navbar";
import { data } from "../data";
import MovieCard from "./MovieCard";
import { addMovies, showFavourite } from "../actions/index";
class App extends React.Component {
  componentDidMount() {
    //Make api call
    //Dispatch function
    const { store } = this.props;
    store.subscribe(() => {
      console.log("UPDATED");
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
    console.log(store.getState());
  }
  isMovieFavourate = (movie) => {
    const { movies } = this.props.store.getState();
    const { favourate } = movies;
    const index = favourate.indexOf(movie);
    if (index !== -1) {
      return true;
    }
    return false;
  };
  onChangeTab = (val) => {
    this.props.store.dispatch(showFavourite(val));
  };
  render() {
    const { movies, search } = this.props.store.getState();
    const { list, showFavourite, favourate } = movies;
    const displayMovies = showFavourite ? favourate : list;
    return (
      <div className="App">
        <Navbar
          movies={movies}
          search={search}
          dispatch={this.props.store.dispatch}
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
              dispatch={this.props.store.dispatch}
              isFavourate={this.isMovieFavourate(movie)}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
