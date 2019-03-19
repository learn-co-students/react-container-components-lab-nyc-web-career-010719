import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import { NYT_API_KEY } from '../key.js';

const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;


export default class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    fetch(URL)
    .then(r => r.json())
    .then(reviews => {
      reviews.results.forEach(r => {
        this.setState({
          reviews: [...this.state.reviews, r]
        });
      });
    });
  };

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  };
};
