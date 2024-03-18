import React, { useEffect, useState } from 'react';
import "./App.css";
import MovieList from './Components/MovieList';
import NavBar from './Components/NavBar';
import MostWatched from './Components/MostWatched';
import MostWatchedTitle from './Components/MostWatchedTitle';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');


  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=a8b01dfe`)
      .then(response => response.json())
      .then(json => {
        if (json.Search) {
          setData(json.Search);
        } else {
          setData([]);
        }
      })
      .catch(error => console.error(error));
  }, [search]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  const filterMoviesByCategory = (category) => {
    if (category === null || category === "All"){
      setData([...data]); 
    } else {
      const filteredMovies = movies.filter(movie => movie.Genre === category);
      setData(filteredMovies); // Postavite listu filmova na filtriranu listu
    }
  };

  return (
    <div>
      <NavBar filterMoviesByCategory={filterMoviesByCategory} search={handleSearch}  />
      <MovieList movies={data} />
      <MostWatchedTitle />
      <MostWatched />
    </div> 
  );
}

export default App;
