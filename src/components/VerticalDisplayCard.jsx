import React from 'react';

const VerticalDisplayCard = ({ img_link, car_title, price, year, fuel_type, condition}) => {
    return (
        <div className="flex flex-col items-center w-1/5 rounded-lg overflow-hidden shadow-md">
            <img src={img_link} alt={car_title} className="w-full h-auto shadow-md" />
            <h2 className="text-xl font-bold mt-4">{car_title}</h2>
            <p className="text-gray-600 mt-2">${price}</p>
            <div className='flex flex-row justify-between w-full items-center px-2 py-4'>
                <div className='flex flex-col justify-center items-start'>
                    <p className='text-gray-500 text-sm'>Year:{year}</p>
                    <p className='text-gray-500 text-sm'>Fuel Type:{fuel_type}</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className={`${condition==1?"bg-green-600":"bg-yellow-500"} uppercase py-2 px-4 rounded-full text-white text-sm`}>{condition==1?"Great Price":"Average Price"}</p>
                </div>
            </div>
        </div>
    );
};

export default VerticalDisplayCard;