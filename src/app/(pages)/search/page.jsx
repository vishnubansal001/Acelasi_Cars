"use client";

import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import HorizontalDisplayCard from "@/components/HorizontalDisplayCard";
import FilterComponent from "@/components/FilterComponent";
import Footer from "@/components/Footer";
import Link from "next/link";
import axios from "axios";

function Page({ searchParams }) {
  // const [reset,setReset]=useState(false);
  const [filters, setFilters] = useState(searchParams);
  const [cars, setCars] = useState([]);
  useEffect(() => {
    // console.log(s);
    console.log(filters);
    axios
      .post("/api/serach-cars", filters)
      .then((res) => {
        console.log(filters);
        setCars(res.data);
      })
      .catch((err) => console.log(err));
  }, [filters,searchParams]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <section className="flex flex-col gap-4 md:px-28 px-10 md:pt-16 pb-5">
        <div className="flex flex-row justify-between items-center py-2">
          <p className="font-semibold text-sm sm:text-lg">
            Search Results : {cars.length}
          </p>
          <FilterComponent setFilters={setFilters} />
        </div>
        {cars.map((car, idx) => (
          <Link key={idx} href={`/car/${car._id}`}>
            <HorizontalDisplayCard
              fuel_type={car.fuelType}
              img_link={car.imageUrl}
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

export default Page;
