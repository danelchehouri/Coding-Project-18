//U20452568
// src/components/RateMovieButton.js
import React, { useState } from 'react';

const RateMovieButton = ({ movie }) => {
  const [rating, setRating] = useState(0);
  const [confirmation, setConfirmation] = useState('');

  const handleRating = (rate) => {
    setRating(rate);
    setConfirmation(`You rated ${movie.title} ${rate} stars!`);
  };

  return (
    <div>
      <h3>Rate {movie.title}</h3>
      {[1, 2, 3, 4, 5].map((star) => (
        <button key={star} onClick={() => handleRating(star)}>
          {star} Star{star > 1 ? 's' : ''}
        </button>
      ))}
      {confirmation && <p>{confirmation}</p>}
    </div>
  );
};

export default RateMovieButton;
