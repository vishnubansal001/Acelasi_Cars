import Image from 'next/image'
import React from 'react'
import audi from '../../public/assets/audi_logo.png'
import porche from '../../public/assets/porche_logo.png'
import ferrari from '../../public/assets/ferrari_logo.png'
import mercedes from '../../public/assets/mercedes_logo.jpg'
import bmw from '../../public/assets/bmw_logo.jpg'

export default function Brands() {
  return (
    <div className='w-full flex flex-col justify-between items-center bg-gradient-to-b from-gray-200 to-white py-10'>
        <div className='flex flex-row items-center justify-center gap-4'>
            <div className='bg-gray-500 w-20 h-[2px] rounded-full'></div>
            <h1 className='text-2xl font-poppins font-extralight text-gray-700'>Brands</h1>
            <div className='bg-gray-500 w-20 h-[2px] rounded-full'></div>
        </div>
        <div className='flex flex-row flex-wrap md:flex-nowrap items-center justify-evenly w-full'>
          <div className='grayscale hover:grayscale-0 transition-colors'>
            <Image src={audi} height={150} width={150} alt='audi'/>
          </div>
          <div className='grayscale hover:grayscale-0 transition-colors'>
            <Image src={mercedes} height={150} width={150} alt='mercedes'/>
          </div>
          <div className='grayscale hover:grayscale-0 transition-colors'>
            <Image src={bmw} height={150} width={150} alt='bmw'/>
          </div>
          <div className='grayscale hover:grayscale-0 transition-colors'>
            <Image src={ferrari} height={150} width={150} alt='ferrari'/>
          </div>
          <div className='grayscale hover:grayscale-0'>
            <Image src={porche} height={150} width={150} alt='porche'/>
          </div>
        </div>

    </div>
  )
}
