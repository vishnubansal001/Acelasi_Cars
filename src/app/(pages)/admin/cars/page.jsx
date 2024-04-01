"use client";

import React, { useEffect, useState } from "react";
import HorizontalDisplayCard from "@/components/HorizontalDisplayCard";
import VerticalDisplayCard from "@/components/VerticalDisplayCard";
import axios from "axios";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axios
      .get("/api/cars")
      .then((res) => {
        setCars(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="min-h-screen py-10">
      <div className="flex justify-between items-center my-1">
        <h1 className="text-lg font-semibold">Total Cars = {cars.length}</h1>
        <div className="flex items-center justify-center gap-2">
          <Link href={"/admin/add-car"} className="rounded-md bg-white border border-red-500 text-red-600 px-3 py-2 flex items-center">Add Car&nbsp;&nbsp;<Plus size={15} color="red" /></Link>
          <Link href={"/admin/add-user"} className="rounded-md bg-white border border-red-500 text-red-600 px-3 py-2 flex items-center">Add User&nbsp;&nbsp;<Plus size={15} color="red" /></Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cars.map((car, id) => (
          <VerticalDisplayCard
            key={id}
            _id={car._id}
            fuel_type={car.fuelType}
            img_link={car.imageUrl}
            condition={1}
            car_title={car.title}
            description={car.description}
            year={car.year}
            price={car.price}
            access={"permitted"}
          />
        ))}
      </div>
    </div>
  );
}
