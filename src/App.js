import React, { useState } from 'react';
import './App.css';
import Homepage from './components/homepage';
import Searchbar from './components/Searchbar';
import ContactUs from './components/ContactUs/ContactUs'; 
import MovieList from './components/MovieList/MovieList'; 
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <Router>
      <Searchbar setSearchResults={setSearchResults} />
        {/* Display search results here */}
        <ContactUs /> {/* Include ContactUs component */}
        <MovieList /> {/* Include MovieList component */}
        <Homepage /> {/* Include Homepage component */}
      </Router>
    </div>
  );
};

export default App;

