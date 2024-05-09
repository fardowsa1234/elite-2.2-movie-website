import React from 'react';
import './App.css';
import ContactUs from './components/ContactUs/ContactUs'; 
import MovieList from './components/MovieList/MovieList'; 
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        {/* Use either ContactUs or MovieList here */}
        {/* <ContactUs /> */}
        <MovieList />
      </Router>
    </>
  );
}

export default App;

