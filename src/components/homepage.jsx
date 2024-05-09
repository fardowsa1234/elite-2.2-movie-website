import React, { useState } from 'react'
import './homepage.css'
//import Genres from './genres'
import Logo from "../assets/ELITE.png"; // add a symlink to it from project's node_modules/.


function Homepage() {
  const [showList, setShowList] = useState(false);
  



  const handleMouseEnter = () => {
    setShowList(true);
  };

  const handleMouseLeave = () => {
    setShowList(false);
  };
  
  return (
    <div className='homepage-container'>
        <div className='logo'>
            <img src={Logo} alt='logo'/>

        </div>
        <div className='links'>
        <a href="" className="btn">
            Movies
          </a>
          <a href="" className="btn">
            TV Shows
          </a>
          <a href="" className="btn">
            Top Rated
          </a>
          <a href="#" className="btn"
                 onMouseEnter={handleMouseEnter} 
                 onMouseLeave={handleMouseLeave}>
            Genre
          </a>
          {showList && (
        <ul className='genres'>
          
        </ul>
      )}

            <div className='search-bar'>
               

            </div>

        </div>
        <div className='movie-container'>
            (/** ammend movies rendered component */)

        </div>
        <div className='footer'>
           ( /** ammend footer component */)

        </div>

    </div>
  )
}

export default Homepage