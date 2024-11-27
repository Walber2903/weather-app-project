'use client';

import React from 'react';
import { useWeather } from '../../context/WeatherContext';

const DaysForecast: React.FC = () => {
  const { weatherData, error } = useWeather();

  if (error) {
    return (
      <div className="w-[414px] h-[366px] mb-[60px] bg-gradient-to-b from-gray-600 to-gray-800 rounded-3xl shadow-2xl flex justify-center items-center">
        <p className="text-red-500 text-lg font-semibold">Error: {error}</p>
      </div>
    );
  }

  if (!weatherData) {
    return (
      <div className="w-[414px] h-[366px] mb-[60px] bg-gradient-to-b from-gray-600 to-gray-800 rounded-3xl shadow-2xl flex justify-center items-center">
        <p className="text-gray-300 text-lg font-semibold">No data available</p>
      </div>
    );
  }

  const { forecastDaily } = weatherData;

  const getDayOfWeek = (date: Date): string => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  };

  return (
    <div className="w-[414px] h-[366px] mb-[60px] bg-gradient-to-b from-gray-600 to-gray-800 rounded-3xl shadow-2xl flex flex-col">
      <h2 className="text-xl text-center mt-4 font-semibold text-white">5 Days Forecast:</h2>
      <div className="flex flex-col">
        {forecastDaily.map((forecast, index) => {
          const dayOfWeek = getDayOfWeek(forecast.date);
          const formattedDate = forecast.date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
          });

          return (
            <div
              key={index}
              className="w-[370px] h-[60px] mx-auto flex items-center justify-between px-1"
            >
              <div className="flex items-center gap-6">
                <div className="w-8 h-8 relative">
                  <img
                    src={forecast.icon}
                    alt={forecast.description}
                    className="w-full h-full"
                  />
                </div>
                <span className="text-2xl font-semibold text-white leading-9">
                  {forecast.temperature}°C
                </span>
              </div>
              <span className="text-xl font-semibold text-white leading-8">
                {dayOfWeek}, {formattedDate}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DaysForecast;
