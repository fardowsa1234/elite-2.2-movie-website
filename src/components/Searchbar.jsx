import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './searchbar.css';
import axios from 'axios';

const Searchbar = () => {
  const [input, setInput] = useState("");

 
  return (
    <div className='input-wrapper'>
      <FaSearch className='search-icon' />
      <input
        type='text'
        placeholder='Search movie here...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='search-input'
      />
    </div>
  );
};

export default Searchbar;