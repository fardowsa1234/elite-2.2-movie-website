import React, { useState } from 'react';
import Searchbar from './components/Searchbar';
import './App.css';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <h1></h1>
      <Searchbar setSearchResults={setSearchResults} />
      {/* Display search results here */}
    </div>
  );
};

export default App;
