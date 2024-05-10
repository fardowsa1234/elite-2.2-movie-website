import React, { useState } from 'react'; // Combine import statements
import './App.css';
import { Provider } from 'react-redux';
import store from './Reducers/Store'; // Import Redux store

// Import components
import Homepage from './components/homepage';
import Searchbar from './components/Searchbar';
import ContactUs from './components/ContactUs/ContactUs';
import MovieList from './components/MovieList/MovieList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import for routing

function App() {
  const [searchResults,setSearchResults] = useState([]); // State for search results

  return (
    <Provider store={store}> // Wrap app with Redux provider
      <Router>
        <div className="App">
          <Searchbar setSearchResults={setSearchResults} />
          <ContactUs />
          <Routes> {/* Use Routes for cleaner path definitions */}
            <Route path="/" element={<Homepage />} /> {/* Homepage route */}
            <Route path="/movies" element={<MovieList searchResults={searchResults} />} /> {/* Movie listing route with search results prop */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;


