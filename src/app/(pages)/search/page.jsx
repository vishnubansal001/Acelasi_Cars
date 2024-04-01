"use client"
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
// import { cars } from "@/lib/constants";
import HorizontalDisplayCard from "@/components/HorizontalDisplayCard";
import FilterComponent from "@/components/FilterComponent";
import Footer from "@/components/Footer";
import Link from "next/link";
import axios from "axios";

function page({searchParams}) {
  const [filters,setFilters]=useState(searchParams);
  const [cars,setCars]=useState([]);

  useEffect(()=>{
    console.log(filters)
    axios.post("/api/serach-cars",filters)
    .then(
      (res)=>{
        setCars(res.data)
        console.log(res.data)
      }
    )
    .catch(
      (err)=>console.log(err)
    );
  }
  ,[]);
  
  return (
    <div className="bg-gray-100">
      <Navbar />
      <section className="flex flex-col gap-4 md:px-28 px-10 md:pt-16 pb-5">
        <div className="flex flex-row justify-between items-center py-2">
          <p className="font-semibold text-sm sm:text-lg">
            Search Results : {cars.length}
          </p>
          <FilterComponent filters={filters} setFilters={setFilters} />
        </div>
        {cars.map((car, idx) => (
          <Link key={idx} href={`/car/${car.id}`}>
            <HorizontalDisplayCard
              key={idx}
              fuel_type={car.fuel}
              img_link={car.image_link}
              condition={1}
              car_title={car.title}
              description={car.description}
              year={car.year}
              price={car.price}
            />
          </Link>
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default page;
