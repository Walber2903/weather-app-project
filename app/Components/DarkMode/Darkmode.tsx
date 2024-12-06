"use client";

import React, { useEffect, useState } from 'react';

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load the theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('dark-mode');
    if (savedTheme === 'true') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  // Function to toggle dark mode and save to localStorage
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('dark-mode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('dark-mode', 'false');
    }
  };

  return (
    <div className='w-[109px] h-[61px]'>
      <label className="relative inline-block w-[100px] h-[38px]">
        <input 
          type="checkbox" 
          className="opacity-0 w-0 h-0" 
          checked={isDarkMode} 
          onChange={toggleDarkMode} 
        />
        <span 
          className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 
            bg-gray-300 rounded-[34px] transition duration-400
            ${isDarkMode ? 'bg-blue-500' : ''}
          `}
        />
        <span 
          className={`absolute h-[33px] w-[33px] left-[8px] bottom-[3px] 
            bg-black rounded-full transition-transform duration-400
            ${isDarkMode ? 'transform translate-x-[48px]' : ''}
          `}
        />
      </label>
      {/* Text showing the current state */}
      <div style={{ marginTop: '10px', textAlign: 'center', color: isDarkMode ? '#fff' : '#000' }}>
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </div>
    </div>
  );
};

export default DarkModeToggle;
