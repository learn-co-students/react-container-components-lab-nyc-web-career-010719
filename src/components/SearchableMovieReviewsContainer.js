import React, { Component } from 'react';
import 'isomorphic-fetch';
import { NYT_API_KEY } from '../key.js';
import MovieReviews from './MovieReviews';

export default class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: 'lebowski',
    reviews: [],
  };

  handleChange = e => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      reviews: [],
    },

    () => {
      fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`)
      .then(r => r.json())
      .then(reviews => {
        if (!!reviews.results) {
          reviews.results.forEach(r => {
            return this.setState({
              reviews: [...this.state.reviews, r],
            });
          });
        };
      })
    });
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Search for a review" onChange={this.handleChange}/>
          <input type="submit" value="go" />
        </form>
        <div>
          <MovieReviews reviews={this.state.reviews} />
        </div>
      </div>
    );
  };
};
