import React, { useState } from 'react';
import Searchbar from './components/Searchbar';
import './App.css';
import ContactUs from './components/ContactUs/ContactUs'; 
import MovieList from './components/MovieList/MovieList'; 
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <Router>
        <Searchbar setSearchResults={setSearchResults} />
        {/* Display search results here */}
        <ContactUs /> {/* Include ContactUs component */}
        <MovieList /> {/* Include MovieList component */}
      </Router>
    </div>
  );
};

export default App;


