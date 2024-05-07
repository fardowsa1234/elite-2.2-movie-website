import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './style.css';

const Searchbar = () => {
  const [input, setInput] = useState("");
  const fetchData = (value) => {
    fetch("")
    .then((response) => response.json())
    .then((json) => {

      const results = json.filter((user) => {
        return (
        value &&
         user && 
         user.name && user.name.tolowerCase().includes(value)
        );
      })
      console.log(results);
    });
  }             

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
  )
}

export default Searchbar;
