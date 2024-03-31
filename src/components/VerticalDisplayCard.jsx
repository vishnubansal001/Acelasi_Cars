import React from "react";
import { Fuel, Trash } from "lucide-react";
import axios from "axios";
import Link from "next/link";

const VerticalDisplayCard = ({
  img_link,
  car_title,
  price,
  year,
  _id,
  fuel_type,
  condition,
  access,
  carId,
}) => {
  const userId = localStorage.getItem("token");
  const handleClick = () => {
    axios
      .delete(`/api/ad-car/${_id}`, { data: { userId } })
      .then((res) => {
        if (res.status === 200) {
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Link href={`/car/${carId}`} className="hover:scale-105 transition-all flex flex-col items-center rounded-lg overflow-hidden shadow-md w-full bg-white">
      <img src={img_link} alt={car_title} className="w-full h-auto shadow-md" />
      <h2 className="md:text-xl font-bold mt-4 text-center md:text-[1rem]">
        {car_title}
      </h2>
      <p className="text-gray-600 mt-2">${price}</p>
      <div className="flex flex-row justify-between w-full items-center px-2 py-4">
        <div className="flex flex-col justify-center items-start gap-1">
          <p className="text-gray-500 text-sm">Year:{year}</p>
          <p className="text-gray-500 text-sm flex items-center">
            <Fuel size={20} /> : <span>{fuel_type}</span>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          {access && access === "permitted" ? (
            <Trash color="red" onClick={handleClick} />
          ) : (
            <p
              className={`${
                condition == 1 ? "bg-green-600" : "bg-yellow-500"
              } uppercase py-2 px-4 rounded-full text-white text-[10px]`}
            >
              {condition == 1 ? "Great Price" : "Average Price"}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default VerticalDisplayCard;
