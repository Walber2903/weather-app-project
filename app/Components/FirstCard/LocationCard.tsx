'use client';

import React from 'react';
import { useWeather } from '../../context/WeatherContext';

const LocationCard: React.FC = () => {
  const { weatherData, error } = useWeather();

  if (error) {
    return (
      <div className="w-[510px] h-[330px] flex bg-gradient-to-b from-gray-600 to-gray-800 rounded-3xl shadow-2xl p-8">
        <div className="flex flex-col mx-auto">
          <h1 className="text-[24px] font-bold text-red-500 leading-[54px] text-center">
            {error}
          </h1>
        </div>
      </div>
    );
  }

  if (!weatherData) {
    return (
      <div className="w-[510px] h-[330px] flex bg-gradient-to-b from-gray-600 to-gray-800 rounded-3xl shadow-2xl p-8">
        <div className="flex flex-col mx-auto">
          <h1 className="text-[24px] font-bold text-white leading-[54px] text-center">
            No data available
          </h1>
        </div>
      </div>
    );
  }

  const { cityName, country, currentDateTime } = weatherData;

  return (
    <div className="w-[510px] h-[330px] flex bg-gradient-to-b from-gray-600 to-gray-800 rounded-3xl shadow-2xl p-8">
      <div className="flex flex-col mx-auto">
        {/* Nome da Cidade */}
        <h1 className="text-[36px] font-bold text-white leading-[54px] text-center">
          {`${cityName}, ${country}`}
        </h1>

        {/* Horário */}
        <div className="mt-4">
          <h2 className="text-[96px] font-bold text-white leading-[144px] text-center">
            {currentDateTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
          </h2>
        </div>

        {/* Data */}
        <div className="mt-[-20px] mx-auto">
          <p className="text-xl font-normal text-white leading-[30px]">
            {currentDateTime.toLocaleDateString('en-US', {
              weekday: 'long',
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}
          </p>
        </div>

        {/* <p className="text-lg font-medium text-white text-center mt-2">{`${temperature}°C`}</p>

        <div className="flex justify-center mt-2">
          <img
            src={`https://openweathermap.org/img/wn/${icon}.png`}
            alt="Weather Icon"
            className="w-16 h-16"
          />
        </div> */}
      </div>
    </div>
  );
};

export default LocationCard;
