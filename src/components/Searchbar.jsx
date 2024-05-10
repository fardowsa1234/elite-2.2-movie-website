import React, { useState } from 'react';
import axios from 'axios';
import './searchbar.css'

const Searchbar = () => {
    const fallbackImageUrl = 'https://images.unsplash.com/photo-1485095329183-d0797cdc5676?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdmllJTIwdGhlYXRlcnxlbnwwfDB8MHx8fDA%3D'
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        setIsLoading(true);
        const options = {
            method: 'GET',
            url: 'https://streaming-availability.p.rapidapi.com/shows/search/title',
            params: {
                country: 'us',
                title: searchTerm,

            },
            headers: {
                'X-RapidAPI-Key': '071be21102mshca7e263d742dcb1p18c68bjsn3d1d0cf18bd7',
                'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            setSearchResults(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };
    console.log('searchResults:', searchResults)
    return (
        <div className='search-container'>
            <input
                type="text"
                placeholder="Enter movie or show title"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button onClick={handleSearch} className='Search-icon'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt49wINxs1fpxM6aKdLgLF5qPVqIeFKPmcGv-aD2VWMQ&s' alt=' ' />
            </button>
            {isLoading && <p>Loading...</p>}
            {/* Display search results */}
            <div>
                {searchResults.map((result) => (
                    <div key={result.id} className='result-item'>
                        <img src={result.imageSet && result.imageSet.horizontalBackdrop ? result.imageSet.horizontalBackdrop.w720 : fallbackImageUrl}
                            alt={result.title} />
                        <h2 className='movie-detail'>Title: {result.title}</h2>
                        <p className='movie-detail'>showType: {result.showType}</p>
                        <p className='movie-detail'>Released: {result.releaseYear}</p>
                        <p className='movie-detail'>overview: {result.overview}</p>
                        <p className='movie-detail'>episodes: {result.episodeCount}</p>
                        <p className='movie-detail'>genre: {result.genres[0]?.name}</p>
                        <p className='movie-detail'>cast: {result.cast.join(', ')} </p>
                        <p className='movie-detail'>directors: {result.direectors}</p>
                        <p className='movie-detail'>rating: {result.rating}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Searchbar;