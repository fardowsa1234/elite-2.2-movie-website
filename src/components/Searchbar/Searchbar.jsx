import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './style.css';
import axios from 'axios';

const Searchbar = () => {
  const [input, setInput] = useState("");

  const fetchData = async (searchQuery) => {
    const url = 'https://movies-api14.p.rapidapi.com/movies';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '8caa7f75c5msh318e0e9e57e1d1ap1a4ab4jsnb340659c48fc',
        'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
      }
    };

    try {
      const response = await axios(url, options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className='input-wrapper'>
      <FaSearch className='search-icon' />
      <input
        type='text'
        placeholder='Search movie here...'
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        className='search-input'
      />
    </div>
  );
};

export default Searchbar;

