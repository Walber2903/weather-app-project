import React, { useState, useEffect, useRef } from 'react';
import { Search, Plus, Loader2 } from 'lucide-react';

const OPEN_WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

interface City {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

interface SearchBarProps {
  onAddCity?: (city: City) => void;
}

const SearchBar = ({ onAddCity }: SearchBarProps) => {
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState<City[]>([]);
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchValue.length < 3) {
        setSuggestions([]);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=5&appid=${OPEN_WEATHER_API_KEY}`
        );
        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error('Error fetching city suggestions:', error);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchValue]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCitySelect = (city: City) => {
    setSearchValue('');
    setSuggestions([]);
    setShowSuggestions(false);
    if (onAddCity) {
      onAddCity(city);
    }
  };

  return (
    <div className="relative w-full max-w-3xl">
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" 
            size={20} 
          />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            placeholder="Search for your preferred city..."
            className="w-full h-10 pl-10 pr-4 rounded-lg bg-gray-700/50 
                     text-gray-200 placeholder-gray-400 
                     focus:outline-none focus:ring-2 focus:ring-green-500
                     transition-all duration-200"
          />
          {loading && (
            <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 animate-spin" 
                     size={20} />
          )}
        </div>
        
        <button
          className="flex items-center justify-center w-10 h-10 
                   rounded-lg bg-gray-700/50 text-gray-200
                   hover:bg-gray-600/50 transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-green-500"
          aria-label="Add new city"
        >
          <Plus size={20} />
        </button>
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div 
          ref={suggestionsRef}
          className="absolute z-50 w-full mt-2 bg-gray-800 rounded-lg shadow-lg 
                     border border-gray-700 max-h-64 overflow-y-auto"
        >
          {suggestions.map((city, index) => (
            <button
              key={`${city.lat}-${city.lon}-${index}`}
              onClick={() => handleCitySelect(city)}
              className="w-full px-4 py-2 text-left text-gray-200 
                       hover:bg-gray-700/50 transition-colors duration-200
                       flex flex-col"
            >
              <span className="font-medium">{city.name}</span>
              <span className="text-sm text-gray-400">
                {[city.state, city.country].filter(Boolean).join(', ')}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;