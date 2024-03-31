import React from 'react'
import { ChevronRight, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <>
    <section id='footer' className="flex flex-col md:flex-row items-start justify-between px-10 md:px-28 bg-red-700 py-10 gap-4 text-sm">
    <div className="flex flex-col md:w-2/5 gap-4 text-white">
      <h1 className="text-sm font-semibold font-poppins">Subscribe to our newsletter</h1>
      <div className="flex flex-row px-1 py-2 border border-red-100 bg-white border-solid rounded-full md:w-fit w-full">
        <input type="email" placeholder="Enter your email" className="rounded-l-md border-none outline-none px-2 h-8 md:w-60 w-full text-black"/>
        <div className="rounded-full p-2 bg-red-600 flex items-center justify-center h-8 w-8">
          <ChevronRight size={10} color="white" />
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div className='h-8 w-8 rounded-full bg-blue-700 flex justify-center items-center p-1'>
            <Facebook color='white'/>
        </div>
        <div className='h-8 w-8 rounded-full bg-red-500 flex justify-center items-center p-1'>
            <Instagram color="white"/>
        </div>
        <div className='h-8 w-8 rounded-full bg-blue-500 flex justify-center items-center p-1'>
            <Twitter color="white"/>
        </div>
      </div>
    </div>
    <div className="flex flex-col md:w-1/5 gap-4 px-10 text-gray-300">
      <h1 className="text-sm font-semibold font-poppins text-white">Resources</h1>
      <p>Blog</p>
      <p>Guide</p>
      <p>FAQ</p>
      <p>Help Center</p>
     
    </div>
    <div className="flex flex-col md:w-1/5 gap-4 px-10 text-gray-300">
      <h1 className="text-sm font-semibold font-poppins text-white">Buying & Selling</h1>
      <p>Buying a car</p>
      <p>List a car</p>
      <p>List by City</p>
    </div>
    <div className="flex flex-col md:w-1/5 gap-4 px-10 text-gray-300">
      <h1 className="text-sm font-semibold font-poppins text-white">About</h1>
      <p>Company</p>
      <p>Career</p>
      <p>Contact</p>
    </div>
</section>
<div className="w-full px-10 md:px-28 bg-black text-center text-white text-sm">&copy; Acelasi Cars 2024</div></>
  )
}
