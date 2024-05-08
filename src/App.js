import React from 'react';
import './App.css';
import ContactUs from './components/ContactUs/ContactUs';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
    
   
   <Router>
       <ContactUs />
   </Router>
   

    </>
  );
}

export default App;
