<!-- import React from 'react';
import DarkModeToggle from './Components/DarkMode/Darkmode'; -->
import Image from "next/image";
import WeatherNavWidget from "./Components/WeatherNavWidget";
import Sunny from './Assets/sunny.png';
import Navigation from './Assets/navigation-north.png';
import CardInfo from "./Components/CardInfo";

const Page: React.FC = () => {
  return (
    <div>
<!--       <DarkModeToggle />
      <div style={{ textAlign: 'center', paddingTop: '100px' }}>
        <h1>Modo Oscuro</h1>
        <p>
          Cambia entre el modo claro y el modo oscuro para probar el fondo negro puro.
        </p>
        {/* Bloque para confirmar el fondo */}
        <div
          style={{
            backgroundColor: '#000',
            width: '200px',
            height: '200px',
            margin: '20px auto',
            border: '1px solid #fff',
          }}
        ></div>
      </div> -->
      
    <CardInfo />

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
    </div>
    </div>
  );
};

export default Page;
