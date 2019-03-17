import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import LatestMovieReviewsContainer from './LatestMovieReviewsContainer'

const NYT_API_KEY = 'WdOt92ouGeLhaFP6GmgtY1l2DgAdXR7c';
const BASE_URL =
  'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {
  state = {
    reviews: [],
    searchTerm: ""
  }

  fetchSearchedReviews = (e) => {
    e.preventDefault()
    fetch(BASE_URL.concat(this.state.searchTerm))
    .then(res => res.json())
    .then(res => this.setState({ reviews: res.results }));
  }

  handleOnChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
      {console.log(this.state)}
        <form onSubmit={this.fetchSearchedReviews}>
          <label>Search For Movie Reviews: </label>
          <input type="text" value={this.state.searchTerm} onChange={this.handleOnChange}/>
          <input type="submit" value="Search" />
        </form>
        {typeof this.state.reviews === 'object' &&
          this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
export default SearchableMovieReviewsContainer
