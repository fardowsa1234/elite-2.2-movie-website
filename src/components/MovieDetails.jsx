import React, { useState, useEffect } from "react";

function MovieDetails({ match }) {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const getMovieDetails = async (id) => {
    try {
      const response = await fetch(`'https://movies-api14.p.rapidapi.com/movies';/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch movie details');
      }
      return await response.json();
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    if (match && match.params) { // Check if match and params exist before using them
      const fetchMovieDetails = async () => {
        const movieData = await getMovieDetails(match.params.id);
        setMovie(movieData);
      };
      fetchMovieDetails();
    }
  }, [match]);

  return (
    <div className="movie-details">
      {error && <p>Error fetching movie details: {error.message}</p>}
      {match && match.params ? ( // Display content only if match and params are available
        movie ? (
          <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <div className="movie-info">
              {movie.release_date && ( // Check if release_date exists
                <p>Release Date: {movie.release_date}</p>
              )}
              {movie.genres && movie.genres.length > 0 && ( // Check if genres exist and have content
                <p>
                  Genres: {movie.genres.map((genre) => genre.name).join(', ')}
                </p>
              )}
              {/* Add more details as needed based on your API response */}
            </div>
          </div>
        ) : (
          <p>Loading movie details...</p>
        )
      ) : (
        <p>No movie details found.</p>
      )}
    </div>
  );
}

export default MovieDetails;
