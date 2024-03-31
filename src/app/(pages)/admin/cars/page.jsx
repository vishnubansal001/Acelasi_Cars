import React from 'react'
import { cars } from '@/lib/constants'
import HorizontalDisplayCard from '@/components/HorizontalDisplayCard'
import VerticalDisplayCard from '@/components/VerticalDisplayCard'

export default function page() {
  return (
    <div className='min-h-screen'>
      <div className='text-lg text-gray-700 py-4'>Total Cars : {cars.length}</div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {cars.map((car,id)=>(
          <VerticalDisplayCard key={id} fuel_type={car.fuel} img_link={car.image_link} condition={1} car_title={car.title} description={car.description} year={car.year} price={car.price} access={"permitted"}/>
        ))}
      </div>
    </div>
  )
}
