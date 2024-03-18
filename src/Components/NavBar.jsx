import React from 'react';
import './Style/NavBar.css';

function NavBar(props) {

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;

    if(selectedCategory === 'All'){
      props.filterMoviesByCategory(null);
    } else {
      props.filterMoviesByCategory(selectedCategory);
    }
  }

  return (
    <div className='navbar-main-container'>
      <div className='items-in-navbar-container'>
        <li><a>Home</a></li>
        <li><a>Series</a></li>
        <select name="movies-categories" id="movie-categories" onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Horror">Horror</option>
        </select>
      </div>
      <input onChange={props.search} type='text' placeholder='Search...' />
    </div>
  );
}

export default NavBar;
