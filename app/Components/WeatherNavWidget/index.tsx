import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface WeatherNavWidgetProps {
  time: string;
  weatherIcon: StaticImageData;
  navigationIcon: StaticImageData;
  temperature: string | number;
  speed: string | number;
}

const WeatherNavWidget: React.FC<WeatherNavWidgetProps> = ({ 
  time, 
  weatherIcon,
  navigationIcon,
  temperature, 
  speed 
}) => {
  return (
    <div className="flex flex-col items-center justify-between w-32 h-[270px] bg-gray-800 rounded-[40px] py-8">
      {/* Time */}
      <div className="font-bold text-2xl text-white">
        {time}
      </div>
      
      {/* Weather Icon */}
      <div>
        <Image 
          src={weatherIcon} 
          alt="weather icon"
          width={24}
          height={24}
        />
      </div>
      
      {/* Temperature */}
      <div className="font-bold text-2xl text-white">
        {temperature}°C
      </div>

      {/* Navigation Icon */}
      <div>
        <Image 
          src={navigationIcon} 
          alt="navigation icon"
          width={24}
          height={24}
        />
      </div>
      
      {/* Speed */}
      <div className="font-bold text-2xl text-white">
        {speed}km/h
      </div>
    </div>
  );
};

export default WeatherNavWidget;