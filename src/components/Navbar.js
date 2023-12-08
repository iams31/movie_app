import React from "react";
import { storeContext } from "../index";
import { addMoviestoList, handleMovieSearch, shutShowSearch } from "../actions";

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
    if (searchText === "") {
      this.props.dispatch(shutShowSearch(false));
      return;
    } else {
      this.props.dispatch(shutShowSearch(true));
      this.props.dispatch(handleMovieSearch(searchText));
    }
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
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange} />
          <button className="search-btn" onClick={this.handleSearch}>
            Search
          </button>

          {showSearchResults && results !== undefined ? (
            <div className="search-results">
              <div className="search-result">
                <img src={results.Poster} alt="search-pic" />
                <div className="movie-info">
                  <span>{results.Title}</span>
                  <span>{results.Actors}</span>
                  <button onClick={() => this.handleAddToMovies(results)}>
                    Add to Movies
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
//Creating NavbarWrapper so that we can access the store here at any place
class NavbarWrapper extends React.Component {
  render() {
    return (
      <storeContext.Consumer>
        {(store) => (
          <Navbar dispatch={store.dispatch} search={this.props.search} />
        )}
      </storeContext.Consumer>
    );
  }
}
export default NavbarWrapper;
