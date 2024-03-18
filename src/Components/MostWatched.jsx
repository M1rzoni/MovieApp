import React, { useEffect, useRef, useState } from 'react';
import "./Style/MostWatched.css"

function MostWatched() {
    const [mostWatched, setMostWatched] = useState([]);

  const  movieListRef = useRef(null);

    const handleScroll = (e) => {
        if (e.deltaY > 0) {
          movieListRef.current.scrollLeft += 100;
        } else {
          movieListRef.current.scrollLeft -= 100;
        }
      };

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?s=hulk&apikey=a8b01dfe`)
            .then(response => response.json())
            .then(json => setMostWatched(json.Search))
            .catch(error => console.error(error))
    }, []);


    return (
        <div className='most-watched-main-container' ref={movieListRef} onWheel={handleScroll}>
         <div className='flex-most'>
            {mostWatched.map((movie, index) => (
                <div className='movies' key={index}>
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

export default MostWatched;
