import React, { useState } from 'react';

const API_KEY = '8caa7f75c5msh318e0e9e57e1d1ap1a4ab4jsnb340659c48fc';

const Searchbar = ({ setSearchResults, searchTerm }) => {
  const [userInput, setUserInput] = useState('');

  const handleSearch = async () => {
    if (!userInput) return;

    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${userInput}`);
    const data = await response.json();
    setSearchResults(data.results);
    setUserInput('');
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for movies"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Searchbar;
