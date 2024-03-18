import React, { useRef } from 'react';
import "./Style/MovieList.css";

function MovieList(props) {
  const movieListRef = useRef(null);

  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      movieListRef.current.scrollLeft += 100;
    } else {
      movieListRef.current.scrollLeft -= 100;
    }
  };

  const handleMovieClick = () => {
    window.open('https://www.imdb.com/', '_blank'); 
  };

  return (
    <div className='movie-list-main-container' onWheel={handleScroll} ref={movieListRef}>
      <div className='movie-list'>
        {props.movies.map((movie, index) => (
          <div  className='movies' key={index} onClick={() => handleMovieClick(movie.URL)}>
            <div className='movie-info'>
              <img src={movie.Poster} alt={`Poster ${index}`} />
              <p>{movie.Title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
