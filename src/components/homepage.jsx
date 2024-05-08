import React from 'react'
import Logo from './ELIITE.png'

function homepage() {
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
          <a href="#" className="btn">
            Genre
          </a>

            <div className='search-bar'>
               ( /** ammend search bar component */)

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

export default homepage