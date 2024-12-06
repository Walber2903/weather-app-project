// page.tsx
"use client";

import React from 'react';
import CardInfo from "./Components/CardInfo";
import Header from './Components/Header/Header';
import LocationCard from './Components/FirstCard/LocationCard';
import HourlyInfo from './Components/HourlyInfo';
import DaysForecast from './Components/DaysForecast';
import LoginForm from './Components/LoginForm/LoginForm';
import { WeatherProvider } from './context/WeatherContext';
import { AuthProvider, useAuth } from './context/AuthContext';

const Page: React.FC = () => {
  return (
    <AuthProvider>
      <WeatherProvider>
        <PageContent />
      </WeatherProvider>
    </AuthProvider>
  );
};

const PageContent: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className='flex flex-col justify-center h-screen mx-auto'>
      <Header />
      {!isLoggedIn ? (
        <div className="flex items-start h-full ml-10 mt-10">
          <LoginForm />
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Page;
