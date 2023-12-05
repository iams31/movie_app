import React from "react";
import { addFavourates, addUnFavourate } from "../actions";
class MovieCard extends React.Component {
  handleFavourateClick = () => {
    const { movies } = this.props;
    this.props.dispatch(addFavourates(movies));
  };
  handleUnFavourateClick = () => {
    const { movies } = this.props;
    this.props.dispatch(addUnFavourate(movies));
  };
  render() {
    const { movies, isFavourate } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie_poster" src={movies.Poster}></img>
        </div>
        <div className="right">
          <div className="title">{movies.Title}</div>
          <div className="plot">{movies.Plot}</div>
          <div className="footer">
            <div className="rating">{movies.imdbRating}</div>
            {isFavourate ? (
              <button
                className="favourate-btn"
                onClick={this.handleUnFavourateClick}
                style={{ backgroundColor: "red", color: "white" }}
              >
                UnFavourate
              </button>
            ) : (
              <button
                className="favourate-btn"
                onClick={this.handleFavourateClick}
                style={{ backgroundColor: "blue", color: "white" }}
              >
                Favourate
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default MovieCard;
