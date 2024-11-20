import React from 'react'
import SearchIcon from '../../Assets/search-1.png'
import Image from 'next/image'

const InputSearch = () => {
  return (
    <div className="relative w-[803px] h-[62px] bg-[#444444] rounded-[40px] flex items-center ml-[44px] shadow-xl">
        <Image
            src={SearchIcon}
            alt="Search Icon"
            className="ml-[33px] w-[40px] h-[46px] mt-[8px] mb-[8px]"
        />
        <input
            type="text"
            placeholder="Search for your preferred city..."
            className="bg-transparent text-white text-[18px] font-normal ml-[29px] outline-none w-full"
        />
    </div>

  )
}

export default InputSearch
