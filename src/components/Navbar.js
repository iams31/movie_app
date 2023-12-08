import React from "react";
import { addMoviestoList, handleMovieSearch } from "../actions";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchResults: false,
      searchText: "",
    };
  }
  handleAddToMovies = (movie) => {
    this.props.dispatch(addMoviestoList(movie));
  };
  handleSearch = () => {
    const { searchText } = this.state;

    this.props.dispatch(handleMovieSearch(searchText));
  };
  handleChange = (event) => {
    this.setState({
      searchText: event.target.value,
    });
    const { searchText } = this.state;
    if (searchText === "") {
      this.props.search.showSearchResults = false;
    }
  };
  render() {
    const { showSearchResults } = this.props.search;
    const { results } = this.props.search;
    console.log(showSearchResults);
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange} />
          <button className="search-btn" onClick={this.handleSearch}>
            Search
          </button>

          {showSearchResults && (
            <div className="search-results">
              <div className="search-result">
                <img src={results.Poster} alt="search-pic" />
                <div className="movie-info">
                  <span>{results.Title}</span>
                  <button onClick={() => this.handleAddToMovies(results)}>
                    Add to Movies
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Navbar;
