"use client";

import React, { useEffect, useState } from "react";
import HorizontalDisplayCard from "@/components/HorizontalDisplayCard";
import VerticalDisplayCard from "@/components/VerticalDisplayCard";
import axios from "axios";

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
    <div className="min-h-screen py-16">
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
