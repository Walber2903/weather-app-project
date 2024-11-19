import React from 'react';

function LocationCard() {
  return (
    <div className="w-[510px] h-[330px] absolute top-[174px] left-[80px] bg-[#1C1C1E] rounded-tl-[30px] p-8">
      <div className="flex flex-col">
        {/* City Name */}
        <h1 className="font-['Poppins'] text-[36px] font-bold text-white leading-[54px]">
          Athens
        </h1>

        {/* Time */}
        <div className="mt-4">
          <h2 className="font-['Poppins'] text-[96px] font-bold text-white leading-[144px]">
            09:03
          </h2>
        </div>

        {/* Date */}
        <div className="mt-[-20px]">
          <p className="font-['Poppins'] text-xl font-normal text-white leading-[30px]">
            Thursday, 31 Dec
          </p>
        </div>
      </div>
    </div>
  );
}

export default LocationCard;