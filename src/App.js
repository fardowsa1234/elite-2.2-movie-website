import React, { useState, useEffect } from 'react';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(null); // State for error message

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading indicator to true
      setError(null); // Clear any previous errors

      try {
        const response = await fetch(`https://movies-api14.p.rapidapi.com/movies?=${searchTerm}`); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        setSearchResults(data.results || []); // Handle potential data structure variations
      } catch (error) {
        setError(error.message); // Set error message
      } finally {
        setIsLoading(false); // Set loading indicator to false after fetch (success or error)
      }
    };

    if (searchTerm) {
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div className="App">
      <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search..." />
      {isLoading && <p>Loading...</p>} {/* Display loading indicator */}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>} {/* Display error message */}
      <div>Search Results: {searchResults.length > 0 ? searchResults.map((result) => <p key={result.id}>{result.name}</p>) : 'No results found.'}</div>
    </div>
  );
};

export default App;

