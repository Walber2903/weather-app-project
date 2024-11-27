'use client';

import React from 'react';
import { useWeather } from '../../context/WeatherContext';
import WeatherNavWidget from '../WeatherNavWidget';
import fixedIcon from '../../Assets/navigation-north.png'

const HourlyInfo: React.FC = () => {
  const { weatherData, error } = useWeather();

  if (error) {
    return (
      <div className="w-[870px] h-[366px] bg-gradient-to-b from-gray-600 to-gray-800 rounded-3xl shadow-2xl flex justify-center items-center">
        <p className="text-red-500 text-lg font-semibold">Error: {error}</p>
      </div>
    );
  }

  if (!weatherData) {
    return (
      <div className="w-[870px] h-[366px] bg-gradient-to-b from-gray-600 to-gray-800 rounded-3xl shadow-2xl flex justify-center items-center">
        <p className="text-gray-300 text-lg font-semibold">No data available</p>
      </div>
    );
  }

  const { forecastHourly } = weatherData;

  return (
    <div className="w-[870px] h-[366px] bg-gradient-to-b from-gray-600 to-gray-800 rounded-3xl shadow-2xl flex flex-col items-center">
      <h2 className="text-3xl mt-4 font-bold text-white mb-4">Hourly Forecast:</h2>
      <div className="flex flex-row justify-between items-center gap-4">
        {forecastHourly.slice(0, 5).map((forecast, index) => (
          <WeatherNavWidget
            key={index}
            time={forecast.time}
            weatherIcon={forecast.icon}
            navigationIcon={fixedIcon}
            temperature={forecast.temperature}
            speed={forecast.windDirection}
          />
        ))}
      </div>
    </div>
  );
};

export default HourlyInfo;
