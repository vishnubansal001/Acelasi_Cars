import React from 'react';
import { Fuel } from 'lucide-react';
const HorizontalDisplayCard = ({ img_link, car_title, price, year, fuel_type, condition, description }) => {
    return (
        <div className="flex flex-col gap-3 sm:flex-row items-center bg-white rounded-lg font-poppins shadow-lg overflow-hidden hover:scale-[1.05] transition-all">
            <img src={img_link} alt={car_title} className="w-full sm:w-auto sm:h-40 object-cover" />
            <div className='flex flex-col w-full p-1'>
                <h2 className="text-lg md:text-xl font-semibold">{car_title}</h2>
                <p className="text-gray-700 text-sm lg:text-lg">{description || "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, tempora praesentium. Fuga repellendus praesentium autem. Magni quam aspernatur magnam ipsa."} </p>
                <p className='text-lg text-green-900 font-bold'>${price}</p>
                <div className='flex flex-col gap-1 sm:gap-0 sm:flex-row justify-around items-center'>
                    <p className='text-sm text-gray-500'>Year : {year}</p>
                    <p className='text-sm text-gray-500 flex flex-row'><Fuel size={18} color='gray'/> : {fuel_type}</p>
                    <p className={`${condition==1?"bg-green-600":"bg-yellow-500"} uppercase py-2 px-4 rounded-full text-white text-sm`}>{condition==1?"Great Price":"Average Price"}</p>
                </div>
                
            </div>
        </div>
    );
};

export default HorizontalDisplayCard;