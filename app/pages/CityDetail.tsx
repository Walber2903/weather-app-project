import CardInfo from '@/Components/CardInfo'
import DaysForecast from '@/Components/DaysForecast'
import LocationCard from '@/Components/FirstCard/LocationCard'
import Header from '@/Components/Header/Header'
import HourlyInfo from '@/Components/HourlyInfo'
import React from 'react'

const CityDetail = () => {
  return (
    <div className='flex flex-col justify-center h-screen mx-auto'>
      <Header />

      <div className='w-[1345px] h-[860px] mt-[60px] mx-auto gap-10 flex flex-col'>
        <div className='flex flex-row gap-5'>
          <LocationCard />
          <CardInfo />
        </div>
        <div className='flex flex-row gap-5'>
          <DaysForecast />
          <HourlyInfo />
        </div>
      </div>
    </div>
  )
}

export default CityDetail
