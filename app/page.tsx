import React from 'react';
import CardInfo from "./Components/CardInfo";
import Header from './Components/Header/Header';
import LocationCard from './Components/FirstCard/LocationCard';
import HourlyInfo from './Components/HourlyInfo';
import DaysForecast from './Components/DaysForecast';
import { WeatherProvider } from './context/WeatherContext';

const Page: React.FC = () => {
  return (
    <WeatherProvider>
      <div className='flex flex-col justify-center h-screen mx-auto'>
        <Header />

        <div className='w-[1345px] h-[860px] mt-[60px] mx-auto gap-10 flex flex-col'>
          <div className='flex flex-row gap-5'>
            <LocationCard />
            <CardInfo />
          </div>
          <div className='flex flex-row gap-5'>
            <DaysForecast />
            <HourlyInfo />
          </div>
        </div>
      </div>
    </WeatherProvider>
  );
};

export default Page;
