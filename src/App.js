import React from 'react'; // Combine import statements
import './App.css';
import { Provider } from 'react-redux';
import store from './Reducers/Store'; // Import Redux store

// Import components
import Homepage from './components/homepage';

import MovieList from './components/MovieList/MovieList';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'; // Import for routing


function App() {
  
  return (
    <Provider store={store}> // Wrap app with Redux provider
      <Router>
        <div className="App">
          <Homepage/>
          <Routes> {/* Use Routes for cleaner path definitions */}
            
            <Route path="/movies" element={<MovieList />} /> {/* Movie listing route with search results prop */}
            
          </Routes>
          <Outlet/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;




