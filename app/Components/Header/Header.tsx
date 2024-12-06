"use client";

import React from 'react';
import DarkModeToggle from '../DarkMode/Darkmode';
import InputSearch from '../InputSearch/InputSearch';
import Image from 'next/image';
import PlusButton from '../../Assets/plus-button.png';
import ProfileIcon from '../../Assets/profile-icon.png';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { isLoggedIn, userName, logout } = useAuth(); // Get state from AuthContext

  return (
    <div className="w-full max-w-[1345px] h-[185px] pt-[73px] mx-auto pb-[60px] flex items-center">
      <DarkModeToggle />
      <InputSearch />
      <div>
        <Image
          src={PlusButton}
          alt="Image of plus to add city to your profile"
          width={35}
          height={35}
          className="mt-[9px] mb-[9px] ml-[12px] mr-[28px]"
        />
      </div>

      {isLoggedIn ? (
        <div className="flex items-center">
          <Image
            src={ProfileIcon}
            alt="User Icon"
            width={35}
            height={35}
            className="mt-[11px] mb-[16px] mr-[12px]"
          />
          <span className="font-bold mr-4 text-current">{userName}</span>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <span className="font-bold text-current">Please Sign In</span> 
      )}
    </div>
  );
};

export default Header;
