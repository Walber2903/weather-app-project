import React from 'react';
import Image from 'next/image';
import CloudSun from '../../Assets/cloudy-sun.png';
import Sun from '../../Assets/sun.png';
import Cloud from '../../Assets/cloud.png';
import Rain from '../../Assets/rain.png';

function DaysForecast() {
  const forecasts = [
    { 
      date: 'Friday, 1 Sep', 
      temp: 20, 
      icon: CloudSun,
      alt: 'Partly cloudy weather icon'
    },
    { 
      date: 'Saturday, 2 Sep', 
      temp: 22, 
      icon: CloudSun,
      alt: 'Partly cloudy weather icon'
    },
    { 
      date: 'Sunday, 3 Sep', 
      temp: 27, 
      icon: Sun,
      alt: 'Sunny weather icon'
    },
    { 
      date: 'Monday, 4 Sep', 
      temp: 18, 
      icon: Cloud,
      alt: 'Cloudy weather icon'
    },
    { 
      date: 'Tuesday, 5 Sep', 
      temp: 16, 
      icon: Rain,
      alt: 'Rainy weather icon'
    },
  ];

  return (
    <div className="w-[414px] h-[366px] absolute top-[553px] left-[80px] bg-[#1C1C1E] rounded-2xl p-4">
      <div className="w-[288px] h-[50px] absolute top-[18px] left-[63px]">
        <h2 className="font-['Poppins'] text-2xl font-semibold text-white">
          5 Days Forecast:
        </h2>
      </div>
      
      <div className="mt-16 space-y-2">
        {forecasts.map((forecast, index) => (
          <div 
            key={index}
            className="w-[370px] h-[60px] mx-auto flex items-center justify-between px-6"
          >
            <div className="flex items-center gap-6">
              <div className="w-8 h-8 relative">
                <Image 
                  src={forecast.icon}
                  alt={forecast.alt}
                  width={32}
                  height={32}
                />
              </div>
              <span className="font-['Poppins'] text-2xl font-semibold text-white leading-9">
                {forecast.temp}°C
              </span>
            </div>
            
            <span className="font-['Poppins'] text-xl font-semibold text-white leading-8">
              {forecast.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DaysForecast;