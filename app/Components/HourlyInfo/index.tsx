import React from 'react';
import WeatherNavWidget from '../WeatherNavWidget'; 
import weatherIcon from '../../Assets/sunny.png'; 
import navigationIcon from '../../Assets/navigation-north.png'; 

const HourlyInfo: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Title */}
      <h2 className="text-3xl font-bold text-white mb-4">Hourly Forecast:</h2>
    <div className="w-[780px] h-[330px] bg-gray-700 rounded-3xl shadow-2xl flex justify-between items-center p-4">
      <WeatherNavWidget
        time="12:00"
        weatherIcon={weatherIcon}
        navigationIcon={navigationIcon}
        temperature={26}
        speed={3}
      />
      <WeatherNavWidget
        time="15:00"
        weatherIcon={weatherIcon}
        navigationIcon={navigationIcon}
        temperature={27}
        speed={2}
      />
      <WeatherNavWidget
        time="18:00"
        weatherIcon={weatherIcon}
        navigationIcon={navigationIcon}
        temperature={27}
        speed={2}
      />
      <WeatherNavWidget
        time="21:00"
        weatherIcon={weatherIcon}
        navigationIcon={navigationIcon}
        temperature={25}
        speed={3}
      />
      <WeatherNavWidget
        time="00:00"
        weatherIcon={weatherIcon}
        navigationIcon={navigationIcon}
        temperature={22}
        speed={3}
      />
    </div>
    </div>
  );
};

export default HourlyInfo;
