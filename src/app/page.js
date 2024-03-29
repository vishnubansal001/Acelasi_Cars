import VerticalDisplayCard from "@/components/VerticalDisplayCard";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import HomeSearch from "@/components/HomeSearch";
import Brands from "@/components/Brands";
import heroVintage from "../../public/assets/hero_vintage.jpg" 
import Link from "next/link";
import { cars } from "@/lib/constants";
import { CreditCard, CarFront, Component, ChevronRight, Facebook, Instagram, Twitter } from "lucide-react";


export default function Home() {
  return (
    <>
    <Navbar/>
    <section className="bg-gray-200 font-poppins min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row md:justify-between justify-center md:px-28 px-10 gap-20 lg:w-fit w-full">
        <div className="text-4xl font-bold flex flex-col justify-center items-start gap-3">
          <h1>Best <span className="text-red-600">Dealer</span> For</h1>
          <h1>Your Four Wheeler</h1>
          <Link href={"/search"} className="px-4 py-2 bg-blue-950 text-white text-sm rounded-full">Order Now</Link>
        </div>
        <div>
          <Image
            src={heroVintage}
            alt="Hero Image"
            width={600}
            height={600}
            />
        </div>
      </div>
      <HomeSearch />
    </section>  
    <section className="bg-gray-200 py-10">
      <Brands />
      <div className="flex flex-col gap-6 justify-between items-center mt-16 ">
        <div className='flex flex-row items-center justify-center gap-4'>
          <div className='bg-gray-500 w-20 h-[2px] rounded-full'></div>
          <h1 className='text-2xl font-poppins font-extralight text-gray-700'>Featured Cars</h1>
          <div className='bg-gray-500 w-20 h-[2px] rounded-full'></div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-6 px-10 md:px-28">
          {cars.slice(0,4).map((car,index)=>(
            <VerticalDisplayCard key={index} img_link={car.image_link} car_title={car.title} price={car.price} fuel_type={car.fuel} year={car.year} condition={1} />
          
          ))}
        </div>
      </div>
    </section>
    <section className="flex flex-col justify-center items-center py-10 bg-gray-200 gap-6">
      <h1 className="w-full text-center font-poppins text-xl font-medium">Our Services</h1>
      <p className="w-full text-center text-gray-500 font-poppins mt-3">we Provide many of the best servises for you  and you will get the best benefits here </p>
      <div className="flex flex-row items-center justify-center gap-5 w-full py-3 md:px-28 flex-wrap px-10">
            <div className="flex flex-col justify-evenly items-start gap-6 p-4 w-full md:w-1/4 rounded-lg bg-white">
              <CarFront size={50} color="#E53935" />
              <h1 className="text-lg font-semibold">Top Buy & Sell Car</h1>
              <p className="text-gray-500">we Provide many of the best servises for you  and you will get the best benefits here </p>
            </div>
            <div className="flex flex-col justify-evenly items-start gap-6 p-4 w-full md:w-1/4 rounded-lg bg-white">
              <CreditCard size={50} color="#E53935" />
              <h1 className="text-lg font-semibold">Easy Payments</h1>
              <p className="text-gray-500">we Provide many of the best servises for you  and you will get the best benefits here </p>
            </div>
            <div className="flex flex-col justify-evenly items-start gap-6 p-4 w-full md:w-1/4 rounded-lg bg-white">
              <Component size={50} color="#E53935" />
              <h1 className="text-lg font-semibold">Easy to Use</h1>
              <p className="text-gray-500">we Provide many of the best servises for you  and you will get the best benefits here </p>
            </div>
      </div>
    </section>
    <section className="flex flex-col md:flex-row items-start justify-between px-10 md:px-28 bg-gray-200 py-10 gap-4 text-sm">
            <div className="flex flex-col w-2/5 gap-4">
              <h1 className="text-sm font-semibold font-poppins">Subscribe to our newsletter</h1>
              <div className="flex flex-row px-1 py-2 border border-gray-500 bg-white border-solid rounded-full w-fit">
                <input type="email" placeholder="Enter your email" className="rounded-l-md border-none outline-none px-2 h-8 w-60"/>
                <div className="rounded-full p-2 bg-red-600 flex items-center justify-center h-8 w-8">
                  <ChevronRight size={10} color="white" />
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <Facebook color="blue"/>
                <Instagram color="red"/>
                <Twitter color="#1DA1F2"/>
              </div>
            </div>
            <div className="flex flex-col w-1/5 gap-4 px-10 text-gray-500">
              <h1 className="text-sm font-semibold font-poppins text-black">Resources</h1>
              <p>Blog</p>
              <p>Guide</p>
              <p>FAQ</p>
              <p>Help Center</p>
             
            </div>
            <div className="flex flex-col w-1/5 gap-4 px-10 text-gray-500">
              <h1 className="text-sm font-semibold font-poppins text-black">Buying & Selling</h1>
              <p>Buying a car</p>
              <p>List a car</p>
              <p>List by City</p>
            </div>
            <div className="flex flex-col w-1/5 gap-4 px-10 text-gray-500">
              <h1 className="text-sm font-semibold font-poppins text-black">About</h1>
              <p>Company</p>
              <p>Career</p>
              <p>Contact</p>
            </div>
    </section>
    <div className="w-full px-10 md:px-28 bg-white text-center text-gray-500 text-sm">&copy; Acelasi Cars 2024</div>
    </>
  );
}
