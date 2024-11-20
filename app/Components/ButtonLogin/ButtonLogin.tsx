import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface ButtonLoginProps {
  isLoggedIn: boolean;
  userName?: string;
  iconPath?: string | StaticImageData;
}

const ButtonLogin: React.FC<ButtonLoginProps> = ({ isLoggedIn, userName, iconPath }) => {
  return (
    <button
      className="flex items-center justify-center w-[292px] h-[62px] ml-1 bg-[#4CBB17] text-white rounded-[40px] font-extrabold text-[22px]"
    >
      {isLoggedIn ? (
        <div className="flex items-center">
          {iconPath && (
            <Image
              src={iconPath}
              alt="User Icon"
              width={35}
              height={35}
              className="mt-[11px] mb-[16px] mr-[12px]"
            />
          )}
          <span>{userName}</span>
        </div>
      ) : (
        <span>Sign In</span>
      )}
    </button>
  );
};

export default ButtonLogin;
