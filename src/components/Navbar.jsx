"use client"
import Link from 'next/link';
import {useState} from 'react'
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
    const [menu, setMenu] = useState(false)
  return (
    <>
    <div className='hidden md:flex flex-row justify-around items-center py-4 px-32 font-semibold absolute w-full'>
        <div className='flex flex-row items-center justify-center gap-8 w-full text-gray-800'>
            <Link href={"/search"}>Buy a Car</Link>
            <Link href={"/sell"}>Sell Your Car</Link>
        </div>
        <div className='text-3xl font-semibold uppercase font-poppins w-full text-center'>Car&nbsp; <span className='text-xl text-red-700'>Dealership</span></div>
        <div className='flex flex-row items-center justify-center gap-8 w-full text-gray-800'>
            <a href='#footer'>Contact</a>
            <Link href={'/search'}>Search</Link>
        </div>
    </div>
    <nav className='flex flex-row md:hidden py-4 px-8 justify-between items-center w-full '>
        <div className='text-xl font-semibold uppercase font-poppins text-center'>Car&nbsp; <span className=' text-red-700 text-sm'>Dealership</span></div>
        {!menu ? <HiMiniBars3CenterLeft onClick={()=>setMenu(!menu)} className='text-3xl text-gray-800'/> : (
        <div className='absolute top-0 right-0 py-4 flex flex-col gap-5 bg-white pl-6'>
            <div className='w-full flex flex-row-reverse px-8'>
                <RxCross2 onClick={()=>setMenu(!menu)} className='text-3xl text-gray-800'/>
            </div>
            <Link href={"/search"} className='px-10'>Buy a Car</Link>
            <Link href={"/sell"} className='px-10'>Sell Your Car</Link>
            <a href='#footer' className='px-10'>Contact</a>
            <Link href={'/search'} className='px-10'>Search</Link>
            
        </div>
        
        )}
    </nav>
    </>
  )
}

export default Navbar
