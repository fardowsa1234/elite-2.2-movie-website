import React from 'react';
import './homepage.css';
import Logo from "../assets/ELITE.png"; // add a symlink to it from project's node_modules/.
import { useDispatch } from 'react-redux'; // Import useDispatch
import { Link } from 'react-router-dom';
import ContactUs from './ContactUs/ContactUs';

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
<>
    <div className='homepage-container'>
      <div className='logo'>
        <img src={Logo} alt='logo' />
      </div>
      <div className='links'>
        <Link to ='/movies' className= 'movieLink'>Movies</Link>
        <Link to ="/TV Shows" className="TV Shows">TV Shows</Link>
        <Link to="/TopRated" className="Top Rated">Top Rated</Link>
        <Link to ="/Genres" className="Genres">Genres</Link>
  
      </div>
      
    </div>

    <ContactUs/>
</>
  );
}

export default Homepage;
