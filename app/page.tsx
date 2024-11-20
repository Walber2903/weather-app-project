import React from 'react';
import DarkModeToggle from './Components/DarkMode/Darkmode';
import Image from "next/image";
import WeatherNavWidget from "./Components/WeatherNavWidget";
import Sunny from './Assets/sunny.png';
import Navigation from './Assets/navigation-north.png';
import CardInfo from "./Components/CardInfo";
import Header from './Components/Header/Header';

const Page: React.FC = () => {
  return (
    <div className='flex justify-center h-screen m-auto'>
      <Header />

      <div >


      </div>
      
    {/* <CardInfo />

    <div className="flex flew-row gap-2">
    
    <WeatherNavWidget 
      time="12:00"
      weatherIcon={Sunny}
      navigationIcon={Navigation}
      temperature="26"
      speed="3"
    />
    <WeatherNavWidget 
      time="12:00"
      weatherIcon={Sunny}
      navigationIcon={Navigation}
      temperature="26"
      speed="3"
    />
    <WeatherNavWidget 
      time="12:00"
      weatherIcon={Sunny}
      navigationIcon={Navigation}
      temperature="26"
      speed="3"
    />
    <WeatherNavWidget 
      time="12:00"
      weatherIcon={Sunny}
      navigationIcon={Navigation}
      temperature="26"
      speed="3"
    />
        <WeatherNavWidget 
      time="12:00"
      weatherIcon={Sunny}
      navigationIcon={Navigation}
      temperature="26"
      speed="3"
    />
    </div> */}
    </div>
  );
};

export default Page;
