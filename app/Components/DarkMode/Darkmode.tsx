"use client";

import React, { useState } from 'react';

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className='w-[109] h-[61]'>
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
        >
        </span>
        <span 
          className={`absolute content-[''] h-[33px] w-[33px] left-[8px] bottom-[3px] 
            bg-black rounded-full transition-transform duration-400
            ${isDarkMode ? 'transform translate-x-[48px]' : ''}
          `}
        >
        </span>
      </label>
      {/* Text showing the current state */}
      <div style={{ marginTop: '10px', textAlign: 'center', color: isDarkMode ? '#fff' : '#000' }}>
        {isDarkMode ? 'Dark Mode' : 'White Mode'}
      </div>
    </div>
  );
};

export default DarkModeToggle;
