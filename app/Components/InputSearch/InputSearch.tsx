'use client';

import React, { useState } from 'react';
import { useWeather } from '@/context/WeatherContext';
import SearchIcon from '../../Assets/search-1.png';
import Image from 'next/image';

const InputSearch: React.FC = () => {
  const { fetchWeather } = useWeather(); // Não precisamos de setError do contexto
  const [searchValue, setSearchValue] = useState<string>('');
  const [localError, setLocalError] = useState<string | null>(null); // Estado local para erros

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const [city, country] = searchValue.split(',').map((str) => str.trim());
      if (!city || !country) {
        setLocalError('Por favor, insira no formato: cidade,país');
        return;
      }
      setLocalError(null); // Limpa erros ao tentar buscar
      fetchWeather(city, country);
    }
  };

  return (
    <div className="relative w-[803px] h-[62px] bg-[#444444] rounded-[40px] flex items-center ml-[44px] shadow-xl">
      <Image
        src={SearchIcon}
        alt="Search Icon"
        className="ml-[33px] w-[40px] h-[46px] mt-[8px] mb-[8px]"
      />
      <input
        type="text"
        placeholder="Search for your preferred city..."
        className="bg-transparent text-white text-[18px] font-normal ml-[29px] outline-none w-full"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleSearch}
      />
      {localError && <p className="text-red-500 mt-2">{localError}</p>}
    </div>
  );
};

export default InputSearch;
