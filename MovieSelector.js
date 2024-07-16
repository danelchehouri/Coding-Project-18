// src/components/MovieSelector.js
import React from 'react';

const MovieSelector = ({ movies, selectedMovie, onSelectMovie }) => {
  return (
    <select onChange={(e) => onSelectMovie(e.target.value)} value={selectedMovie.id}>
      {movies.map((movie) => (
        <option key={movie.id} value={movie.id}>
          {movie.title}
        </option>
      ))}
    </select>
  );
};

export default MovieSelector;
