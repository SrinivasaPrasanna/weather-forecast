// src/components/Search.js
import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (lat && lng) {
            onSearch(lat, lng);
            setLat('');
            setLng('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter Latitude (e.g., 12.9374569)"
                value={lat}
                onChange={(e) => setLat(e.target.value)}
                aria-label="Latitude"
            />
            <input
                type="text"
                placeholder="Enter Longitude (e.g., 77.5184557)"
                value={lng}
                onChange={(e) => setLng(e.target.value)}
                aria-label="Longitude"
            />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Search;
