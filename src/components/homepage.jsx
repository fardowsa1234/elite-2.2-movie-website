import React, { useState } from 'react';
import './homepage.css';
import Logo from "../assets/ELITE.png"; // add a symlink to it from project's node_modules/.
import { useDispatch } from 'react-redux'; // Import useDispatch

function Homepage() {
  const dispatch = useDispatch(); // Utilize useDispatch for dispatching actions

  const handleMovieClick = () => {
    dispatch({ type: 'SET_VIEW', payload: 'movies' }); // Dispatch action to set current view
  };

  const handleTvShowClick = () => {
    dispatch({ type: 'SET_VIEW', payload: 'tvShows' }); // Dispatch action to set current view
  };

  const handleGenresClick = () => {
    dispatch({ type: 'SET_VIEW', payload: 'genres' }); // Dispatch action to set current view
  };

  return (
    <div className='homepage-container'>
      <div className='logo'>
        <img src={Logo} alt='logo' />
      </div>
      <div className='links'>
        <a href="" className="btn" onClick={handleMovieClick}>Movies</a>
        <a href="" className="btn" onClick={handleTvShowClick}>TV Shows</a>
        <a href="" className="btn">Top Rated</a>
        <a href="" className="btn" onClick={handleGenresClick}>Genres</a>
  
      </div>
    </div>
  );
}

export default Homepage;
