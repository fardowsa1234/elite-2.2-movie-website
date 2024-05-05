import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    handleSearch(e.target.value);
  };

  const clearSearch = () => {
    setQuery('');
    handleSearch('');
  };

  return (
    <div className="search-bar-container">
      <div className="search-icon">
        <FaSearch />
      </div>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={handleChange}
        className="search-bar"
      />
      {query && (
        <div className="clear-icon" onClick={clearSearch}>
          <FaTimes />
        </div>
      )}
    </div>
  );
};

export default SearchBar;

