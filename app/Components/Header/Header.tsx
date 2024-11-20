import React from 'react';
import DarkModeToggle from '../DarkMode/Darkmode';
import InputSearch from '../InputSearch/InputSearch';
import Image from 'next/image';
import PlusButton from '../../Assets/plus-button.png';
import ButtonLogin from '../ButtonLogin/ButtonLogin';
import ProfileIcon from '../../Assets/profile-icon.png';

const Header = () => {
  const isLoggedIn = true; // Substitua por sua lógica de autenticação
  const userName = 'Emmanuel';

  return (
    <div className="w-full max-w-[1200px] h-[185px] pt-[73px] pl-[78px] pr-[77px] pb-[60px] flex items-center">
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
        <ButtonLogin
          isLoggedIn={true}
          userName={userName}
          iconPath={ProfileIcon}
        />
      ) : (
        <ButtonLogin isLoggedIn={false} />
      )}
    </div>
  );
};

export default Header;
