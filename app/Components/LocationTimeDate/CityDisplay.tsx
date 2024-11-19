import React from 'react';
import './CityDisplay.css';

interface CityDisplayProps {
  cityName: string;
  temperature: number;
  date: string;
}

const CityDisplay: React.FC<CityDisplayProps> = ({ cityName, temperature, date }) => {
  return (
    <div className="city-display">
      <h2>{cityName}</h2>
      <h1>{temperature}°C</h1>
      <p>{date}</p>
    </div>
  );
};

export default CityDisplay;
