import React from 'react'
import Sunrise from '../../Assets/sunrise-white 1.png'
import Sunset from '../../Assets/sunset-white 1.png'
import Image from 'next/image'
import Sun from '../../Assets/clear 1.png'
import Humidity from '../../Assets/humidity 1.png'
import Wind from '../../Assets/wind 1.png'
import Pressure from '../../Assets/pressure-white 1.png'
import UV from '../../Assets/uv-white 1.png'

function CardInfo() {
  return ( 
    <div className='w-[780px] h-[330px] bg-gray-700 rounded-3xl shadow-2xl flex'> 
      {/* First column of the card */}
      <div className='w-[204px] h-[291px] my-auto ml-6'>
        {/* Temperature and Feels like temperature */}
        <div className='text-center'>
            <p className='text-gray-200 text-7xl font-bold'>24°C</p>
            <p className='text-gray-300 text-xl font-semibold'>Feels Like: 24°C</p>
        </div>
        <div className='mt-6 text-center flex flex-col'>
          <div className='text-center justify-center items-center flex flex-row'>
            <Image src={Sunrise} alt="Image of Sunrise" />
            <div className='flex flex-col text-center justify-center'>
                <p className='font-semibold text-white text-xl'>Sunrise:</p>
                <p className='font-semibold text-white text-base'>06:00</p>
            </div>
          </div>
          <div className='text-center justify-center items-center flex flex-row mt-6'>
            <Image src={Sunset} alt="Image of Sunset" />
            <div className='flex flex-col text-center justify-center'>
                <p className='font-semibold text-white text-xl'>Sunset:</p>
                <p className='font-semibold text-white text-base'>20:00</p>
            </div>
          </div>
        </div>
      </div>
      {/* Second column of the card */}
      <div className='w-[270px] flex flex-col justify-start items-center'>
        <Image className='-mt-6' src={Sun} alt="Image of Sun"/>
        <p className='font-semibold text-3xl text-white'>Sunny</p>
      </div>
      {/* Third column of the card */}
      <div className='w-[247px] flex flex-col justify-between items-center p-6'>
        {/* the first row of the box */}
        <div className='flex flex-row justify-between items-center w-full p-2'>
            {/* first column of with humidity */}
            <div className='flex flex-col justify-center items-center'>
                <Image src={Humidity} alt="Image of Humidity Icon"/>
                <p className='font-semibold text-xl text-white'>41%</p>
                <p className='font-medium text-base text-white'>Humidity</p>
            </div>
            {/* second column with wind speed */}
            <div className='flex flex-col justify-center items-center mb-1'>
                <Image src={Wind} alt="Image of Wind Icon"/>
                <p className='font-semibold text-xl text-white'>2km/h</p>
                <p className='font-medium text-base text-white'>Wind Speed</p>
            </div>
        </div>
        {/* second row of the box */}
        <div className='flex flex-row justify-between items-center w-full p-2'>
            {/* first column of with humidity */}
            <div className='flex flex-col justify-center items-center'>
                <Image src={Pressure} alt="Image of Pressure Icon"/>
                <p className='font-semibold text-xl text-white'>997hPa</p>
                <p className='font-medium text-base text-white'>Pressure</p>
            </div>
            {/* second column with wind speed */}
            <div className='flex flex-col justify-center items-center mb-1'>
                <Image src={UV} alt="Image of UV Icon"/>
                <p className='font-semibold text-xl text-white'>8</p>
                <p className='font-medium text-base text-white'>UV</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CardInfo
