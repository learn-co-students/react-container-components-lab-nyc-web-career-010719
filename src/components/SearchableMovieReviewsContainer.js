import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${process.env.REACT_APP_NYT_API_KEY}`;


// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch(URL)
    .then(resp => resp.json())
    .then(movies => {
      this.setState({
        reviews: movies.results
      })
    })
  }

  handleOnChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let searchURL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=${process.env.REACT_APP_NYT_API_KEY}`;

    fetch(searchURL)
    .then(resp => resp.json())
    .then(movies => {
      this.setState({
        reviews: movies.results
      })
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h2>Searchable Movie Reviews</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleOnChange}></input>
          <input type="submit"></input>
        </form>
        <MovieReviews movies={this.state.reviews}/>
      </div>
    )
  }
}
