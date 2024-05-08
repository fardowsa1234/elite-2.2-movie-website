import React from 'react';

const Results = ({ results }) => {
  return (
    <div className="results">
      {results.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>  {/* Access movie details from API response */}
        </div>
      ))}
    </div>
  );
};

export default Results;
