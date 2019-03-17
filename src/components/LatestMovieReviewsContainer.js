import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${process.env.REACT_APP_NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {

  state = {
    reviews: []
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

  render() {
    return (
      <div className="latest-movie-reviews">
      <h2>Latest Movie Reviews</h2>
      <MovieReviews movies={this.state.reviews}/>
      </div>
    )
  }
}
