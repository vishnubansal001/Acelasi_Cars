"use client";

import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import Image from "next/image";
import { TbManualGearbox, TbAutomaticGearbox } from "react-icons/tb";
import { ChevronDown, ChevronUp, Fuel, Gauge } from "lucide-react";
import { cars } from "@/lib/constants";
import Footer from "@/components/Footer";
import "@/styles/cars.css";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { formatPrice, formatDistance } from "@/lib/utils";
import axios from "axios";

export default function Page({ params }) {
  const [car, setCar] = useState();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fetchCar = async () => {
      const res = await axios.get(`/api/cars/${params.id}`);
      const data = res.data;
      setCar(data);
    };
    fetchCar();
  }, [params.id]);

  return (
    <div>
      <Navbar />
      <section className="min-h-screen flex flex-col md:flex-row justify-between md:px-24 px-10 md:pt-28 pb-5 pt-10 w-full relative">
        <div className="flex flex-col gap-3 md:w-3/5 w-full pb-10">
          <Image
            src={car?.imageUrl}
            alt={car?.make + " " + car?.model}
            width={400}
            height={400}
            className="w-full h-auto bg-car"
            loading="lazy"
          />
          <h1 className="text-2xl font-poppins font-semibold text-gray-800">
            {car?.title}
          </h1>
          <p>{car?.description}</p>
          <h1 className="text-3xl italic font-playfair font-semibold text-green-700 w-full text-center">
            $ {formatPrice(parseInt(car?.price))}
          </h1>
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-row items-center justify-center">
              {car?.transmission === "Automatic" ? (
                <TbAutomaticGearbox size={20} color="red" />
              ) : (
                <TbManualGearbox size={20} color="red" />
              )}{" "}
              : {car?.transmission}
            </div>
            <div className="flex flex-row items-center justify-center">
              <Gauge size={20} color="red" /> :{" "}
              {formatDistance(parseInt(car?.mileage))} Km
            </div>
            <div className="flex flex-row items-center justify-center">
              <Fuel size={20} color="red" /> : {car?.fuelType}
            </div>
          </div>
          <h1>
            View Car History Report{" "}
            <a href={car?.report} className="text-red-600 underline">
              Here
            </a>
          </h1>
          <Collapsible onOpenChange={() => setOpen((o) => !o)}>
            <CollapsibleTrigger>
              <h1 className="text-lg font-semibold w-full text-gray-700 flex flex-row items-center gap-6">
                Complete Description{" "}
                {!open ? (
                  <ChevronDown size={20} color="gray" />
                ) : (
                  <ChevronUp size={20} color="gray" />
                )}
              </h1>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="flex flex-col text-sm gap-1 py-4">
                <div>Make : {car?.make}</div>
                <div>Model : {car?.model}</div>
                <div>Year : {car?.year}</div>
                <div>Transmission : {car?.transmission}</div>
                <div>Mileage : {car?.mileage}</div>
                <div>Fuel-Type : {car?.fuelType}</div>
                <div>Drive Train : {car?.driveTrain}</div>
                <div>Body-Type : {car?.bodyType}</div>
                <div>Color : {car?.color}</div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
        <form className="md:w-1/3 w-full rounded-md bg-blue-900 h-fit p-7 text-sm flex flex-col text-white gap-4">
          <div className="w-full text-center text-xl text-white font-medium">
            Check Availability
          </div>
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full rounded-md p-2 bg-gray-200 text-black"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full rounded-md p-2 bg-gray-200 text-black"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="w-full rounded-md p-2 bg-gray-200 text-black"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              className="w-full rounded-md p-2 bg-gray-200 text-black"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 font-medium text-white rounded-md p-2"
          >
            Submit Inquiry
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
}
