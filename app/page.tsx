import React from 'react';
import DarkModeToggle from './Components/DarkMode/Darkmode';

const Page: React.FC = () => {
  return (
    <div>
      <DarkModeToggle />
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
      </div>
    </div>
  );
};

export default Page;
