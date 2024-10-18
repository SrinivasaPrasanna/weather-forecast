// src/components/Weather.js
import React from 'react';

const Weather = ({ weatherData }) => {
    if (!weatherData || !weatherData.data) {
        return <p>No weather data available.</p>; // Handle case with no data
    }

    // Access the first time data
    const firstWeather = weatherData.data.timed[0]; // Adjust based on actual structure
    
    if (!firstWeather || !firstWeather.values) {
        return <p>No weather details available.</p>; // Handle case if no values exist
    }

    const { temperature } = firstWeather.values; // Adjust based on actual structure

    return (
        <div>
            <h2>Weather Details</h2>
            <p>Temperature: {temperature}°C</p>
        </div>
    );
};

export default Weather;
