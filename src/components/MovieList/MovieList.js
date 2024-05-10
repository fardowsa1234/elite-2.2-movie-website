import React, { useEffect, useState } from 'react'; // Combine import statements
import axios from 'axios';
import './MovieList.css';

const MovieList = () => {
  const fallbackImageUrl = 'https://images.unsplash.com/photo-1595769816263-9b910be24d5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW92aWUlMjB0aGVhdGVyfGVufDB8MHwwfHx8MA%3D%3D';
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://streaming-availability.p.rapidapi.com/shows/search/filters',
      params: {
        country: 'us'
      },
      headers: {
        'X-RapidAPI-Key': '071be21102mshca7e263d742dcb1p18c68bjsn3d1d0cf18bd7',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      }
    };

    axios(options)
      .then(res => {
        setShows(res.data.shows);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Remove the console.log statement as it's not strictly necessary here

  return (
    <div className='movie-grid'>
      {shows.map(show => (
        <div className='movie-item' key={show.id}>
          <div className="movie-image-container">
            <img
              className='movie-image'
              src={show.imageSet && show.imageSet.horizontalBackdrop ? show.imageSet.horizontalBackdrop.w720 : fallbackImageUrl}
              alt={show.title}
            />
            <div className="movie-details-overlay">
              <h2 className='movie-title'>Title: {show.title}</h2>
              <p className='movie-details'>Show Type: {show.showType}</p>
              {show.showType === 'series' && <p className='movie-details'>Episode Count: {show.episodeCount}</p>}
              <p className='movie-details'>Genre: {show.genres[0]?.name || 'N/A'}</p>
              <p className='movie-details'>Directors: {show.directors}</p>
              <p className='movie-details'>Cast: {show.cast.join(', ')}</p>
              <p className='movie-details'>Release Year: {show.releaseYear}</p>
              <p className='movie-details'>Rating: {show.rating}</p>
              <p className='movie-details'>Overview: {show.overview}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

