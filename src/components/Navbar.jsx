"use client"
import Link from 'next/link';
import {useState} from 'react'
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import logo from '../../public/assets/logo_2.png'
import Image from 'next/image';

function Navbar() {
    const [menu, setMenu] = useState(false)
  return (
    <>
    <div className='hidden md:flex flex-row justify-around items-center py-1 px-32 font-semibold absolute w-full z-[5]'>
        <div className='flex flex-row items-center justify-center gap-8 w-full text-gray-800'>
            <Link href={'/'} className='hover:text-red-600'>Home</Link>
            <a href='#footer' className='hover:text-red-600'>Contact</a>
        </div>
        <Link href={"/"} className='text-3xl font-italic font-playfair flex items-center justify-center w-full'><Image src={logo} alt="Classic Only Cars" className='rounded-full' height={80} width={80}/></Link>
        <div className='flex flex-row items-center justify-center gap-8 w-full text-gray-800'>
            <Link href={"/search"} className='hover:text-red-600'>Buy a Car</Link>
            <Link href={"/sell"} className='hover:text-red-600'>Sell Your Car</Link>
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
