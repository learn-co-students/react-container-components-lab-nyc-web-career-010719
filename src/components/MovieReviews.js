import React from 'react';
import { NYT_API_KEY } from '../key.js';
import 'isomorphic-fetch';
const uuid = require('uuid/v4');

const MovieReviews = props => {
  const renderReviews = reviews => {
    return reviews.map(r => {
      return <div key={uuid()} className="review">{r.headline}</div>
    });
  };

  return <div className="review-list">{renderReviews(props.reviews)}</div>
};

export default MovieReviews;
