import React, { useState } from 'react';
import './searchbar.css'

const Searchbar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form className='search-form' onSubmit={handleSubmit}>
            <input
                className='search-input'
                type="text"
                placeholder="Search for a movie or series..."
                value={searchTerm}
                onChange={handleInputChange}
            />
              <button className='Search-icon'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt49wINxs1fpxM6aKdLgLF5qPVqIeFKPmcGv-aD2VWMQ&s' alt=' ' />
            </button>
        </form>
    );
};

export default Searchbar;