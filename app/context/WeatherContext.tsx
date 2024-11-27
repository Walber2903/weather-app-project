"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";

interface WeatherData {
  cityName: string;
  country: string;
  timezone: number;
  temperature: number;
  feelsLike: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  icon: string;
  description: string;
  currentDateTime: Date;
  sunrise: Date;
  sunset: Date;
  uvIndex: number;
  forecastDaily: Array<{
    date: Date;
    temperature: number;
    icon: string;
    description: string;
  }>;
  forecastHourly: Array<{
    time: string;
    temperature: number;
    icon: string;
    windDirection: number;
  }>;
}

interface WeatherContextProps {
  weatherData: WeatherData | null;
  fetchWeather: (city: string, country: string) => Promise<void>;
  loading: boolean;
  error: string | null;
}

const WeatherContext = createContext<WeatherContextProps | undefined>(
  undefined
);

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather deve ser usado dentro de um WeatherProvider");
  }
  return context;
};

interface WeatherProviderProps {
  children: ReactNode;
}

export const WeatherProvider: React.FC<WeatherProviderProps> = ({
  children,
}) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const VANCOVER_OFFSET_SECONDS = -8 * 3600; // Fuso horário de Vancouver UTC-8 em segundos

  const fetchWeather = async (city: string, country: string) => {
    setLoading(true);
    setError(null);

    try {
      const currentWeatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
      );

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
      );

      const { coord } = currentWeatherResponse.data;
      const uvResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/uvi?lat=${coord.lat}&lon=${coord.lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
      );

      const currentWeather = currentWeatherResponse.data;
      const forecast = forecastResponse.data;
      const uvIndex = uvResponse.data.value;

      const localOffsetSeconds = currentWeather.timezone;
      const relativeOffsetSeconds =
        localOffsetSeconds - VANCOVER_OFFSET_SECONDS;

        const processedData: WeatherData = {
          cityName: currentWeather.name,
          country: currentWeather.sys.country,
          timezone: currentWeather.timezone,
          temperature: currentWeather.main.temp,
          feelsLike: currentWeather.main.feels_like,
          humidity: currentWeather.main.humidity,
          pressure: currentWeather.main.pressure,
          windSpeed: parseFloat((currentWeather.wind.speed * 3.6).toFixed(1)), 
          icon: `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`,
          description: currentWeather.weather[0].description,
          currentDateTime: new Date(
            (currentWeather.dt + relativeOffsetSeconds) * 1000
          ),
          sunrise: new Date(
            (currentWeather.sys.sunrise + relativeOffsetSeconds) * 1000
          ),
          sunset: new Date(
            (currentWeather.sys.sunset + relativeOffsetSeconds) * 1000
          ),
          uvIndex,
          forecastDaily: forecast.list
            .filter((_item: any, index: number) => index % 8 === 0)
            .map((item: any) => ({
              date: new Date((item.dt + relativeOffsetSeconds) * 1000),
              temperature: item.main.temp,
              icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
              description: item.weather[0].description,
            })),
          forecastHourly: forecast.list.slice(0, 5).map((item: any) => ({
            time: new Date(
              (item.dt + relativeOffsetSeconds) * 1000
            ).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
            temperature: item.main.temp,
            icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
            windDirection: parseFloat((item.wind.speed * 3.6).toFixed(1)), 
          })),
        };
        

      setWeatherData(processedData);
    } catch (err: any) {
      console.error("API Error:", err);
      setError(
        err.response?.data?.message || "Não foi possível buscar os dados do clima."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider
      value={{ weatherData, fetchWeather, loading, error }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
