"use client";

import React, { useState } from 'react';
import './Darkmode.css';

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
      <label className="switch">
        <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
        <span className="slider round"></span>
      </label>
      {/* Text showing the current state */}
      <div style={{ marginTop: '10px', textAlign: 'center', color: isDarkMode ? '#fff' : '#000' }}>
        {isDarkMode ? 'DARK MODE ENABLED' : 'DARK MODE DISABLED'}
      </div>
    </div>
  );
};

export default DarkModeToggle;
