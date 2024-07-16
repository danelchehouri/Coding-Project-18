// src/App.js
import React, { useState } from 'react';
import RateMovieButton from './components/RateMovieButton';
import MovieSelector from './components/MovieSelector';
import UploadButton from './components/UploadButton';
import './App.css';

const App = () => {
  const [movies] = useState([
    { id: 1, title: 'Inception' },
    { id: 2, title: 'The Matrix' },
    { id: 3, title: 'Interstellar' },
  ]);
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  const handleSelectMovie = (movieId) => {
    const movie = movies.find((m) => m.id === parseInt(movieId));
    setSelectedMovie(movie);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Interactive Media Toolbar</h1>
        <MovieSelector movies={movies} selectedMovie={selectedMovie} onSelectMovie={handleSelectMovie} />
        <RateMovieButton movie={selectedMovie} />
        <UploadButton />
      </header>
    </div>
  );
};

export default App;
