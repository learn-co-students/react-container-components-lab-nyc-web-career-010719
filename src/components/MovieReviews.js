import React from 'react'

const MovieReviews = (props) => {
  return (
    <div className="review-list">
      {props.movies.map(movie => {return <Movie movie={movie}/>})}
    </div>
  )
}

const Movie = (props) => {
  return (
    <div className="review">
    <h3>{props.movie.display_title}</h3>
    <p>{props.movie.summary_short}</p>
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews
