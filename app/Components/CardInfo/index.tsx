'use client';

import React from 'react';
import { useWeather } from '../../context/WeatherContext';
import Image from 'next/image';
import Sunrise from '../../Assets/sunrise-white 1.png';
import Sunset from '../../Assets/sunset-white 1.png';
import Humidity from '../../Assets/humidity 1.png';
import Wind from '../../Assets/wind 1.png';
import Pressure from '../../Assets/pressure-white 1.png';
import UV from '../../Assets/uv-white 1.png';

const CardInfo: React.FC = () => {
  const { weatherData, error } = useWeather();

  if (error) {
    return (
      <div className="w-[780px] h-[330px] bg-gradient-to-b from-gray-600 to-gray-800 rounded-3xl shadow-2xl flex justify-center items-center">
        <p className="text-red-500 text-lg font-semibold">Error: {error}</p>
      </div>
    );
  }

  if (!weatherData) {
    return (
      <div className="w-[780px] h-[330px] bg-gradient-to-b from-gray-600 to-gray-800 rounded-3xl shadow-2xl flex justify-center items-center">
        <p className="text-gray-300 text-lg font-semibold">No data available</p>
      </div>
    );
  }

  const {
    temperature,
    feelsLike,
    humidity,
    windSpeed,
    pressure,
    icon,
    description,
    sunrise,
    sunset,
    uvIndex
  } = weatherData;

  const formattedSunrise = sunrise.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const formattedSunset = sunset.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="w-[780px] h-[330px] bg-gradient-to-b from-gray-600 to-gray-800 rounded-3xl shadow-2xl flex">
      {/* Primeira Coluna */}
      <div className="w-[204px] h-[291px] my-auto ml-6">
        <div className="text-center">
          <p className="text-gray-200 text-7xl font-bold">{`${temperature}°C`}</p>
          <p className="text-gray-300 text-xl font-semibold">{`Feels Like: ${feelsLike}°C`}</p>
        </div>
        <div className="mt-6 text-center flex flex-col">
          <div className="flex flex-row items-center">
            <Image src={Sunrise} alt="Image of Sunrise" />
            <div className="flex flex-col justify-center ml-3">
              <p className="font-semibold text-white text-xl">Sunrise:</p>
              <p className="font-semibold text-white text-base">{formattedSunrise}</p>
            </div>
          </div>
          <div className="flex flex-row items-center mt-6">
            <Image src={Sunset} alt="Image of Sunset" />
            <div className="flex flex-col justify-center ml-3">
              <p className="font-semibold text-white text-xl">Sunset:</p>
              <p className="font-semibold text-white text-base">{formattedSunset}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Segunda Coluna */}
      <div className="w-[270px] flex flex-col justify-start items-center">
        {/* Ícone Dinâmico */}
        <img
          className="w-52 h-52 -mt-6"
          src={icon}
          alt="Weather Icon"
        />
        <p className="font-semibold text-3xl text-white">{description}</p>
      </div>

      {/* Terceira Coluna */}
      <div className="w-[247px] flex flex-col justify-between items-center p-6">
        {/* Primeira Linha */}
        <div className="flex flex-row justify-between items-center w-full p-2">
          <div className="flex flex-col justify-center items-center">
            <Image src={Humidity} alt="Image of Humidity Icon" />
            <p className="font-semibold text-xl text-white">{`${humidity}%`}</p>
            <p className="font-medium text-base text-white">Humidity</p>
          </div>
          <div className="flex flex-col justify-center items-center mb-1">
            <Image src={Wind} alt="Image of Wind Icon" />
            <p className="font-semibold text-xl text-white">{`${windSpeed} km/h`}</p>
            <p className="font-medium text-base text-white">Wind Speed</p>
          </div>
        </div>

        {/* Segunda Linha */}
        <div className="flex flex-row justify-between items-center w-full p-2">
          <div className="flex flex-col justify-center items-center">
            <Image src={Pressure} alt="Image of Pressure Icon" />
            <p className="font-semibold text-xl text-white">{`${pressure} hPa`}</p>
            <p className="font-medium text-base text-white">Pressure</p>
          </div>
          <div className="flex flex-col justify-center items-center mb-1">
            <Image src={UV} alt="Image of UV Icon" />
            <p className="font-semibold text-xl text-white">{uvIndex}</p>
            <p className="font-medium text-base text-white">UV</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
