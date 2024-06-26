"use client";

import VerticalDisplayCard from "@/components/VerticalDisplayCard";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import HomeSearch from "@/components/HomeSearch";
import Brands from "@/components/Brands";
import heroVintage from "../../public/assets/hero_vintage.jpg";
import Link from "next/link";
import { cars } from "@/lib/constants";
import { CreditCard, CarFront, Component } from "lucide-react";
import Footer from "@/components/Footer";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  const [featuredCars, setFeaturedCars] = useState([]);
  useEffect(() => {
    axios
      .get("/api/cars/featured")
      .then((res) => {
        setFeaturedCars(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Navbar />
      <section className="bg-gray-200 font-poppins min-h-screen flex flex-col justify-center items-center pt-16 md:pt=0">
        <div className="flex flex-col md:flex-row md:justify-between justify-center md:px-28 px-10 gap-20 lg:w-fit w-full">
          <div className="md:text-3xl lg:text-6xl text-nowrap font-bold flex flex-col justify-center items-start gap-3">
            <h1 className="w-full text-center">
              Best{" "}
              <span className="text-red-600 font-playfair italic">Dealer</span>{" "}
              For
            </h1>
            <h1 className="font-poppins w-full text-center">
              Your Four Wheeler
            </h1>
            <div className="w-full text-center">
              <Link
                href={"/search"}
                className="px-6 py-3 bg-blue-950 text-white text-sm rounded-full md:text-[16px]"
              >
                Order Now
              </Link>
            </div>
          </div>
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={heroVintage}
              alt="Hero Image"
              width={600}
              height={600}
            />
          </motion.div>
        </div>
        <HomeSearch />
      </section>
      <section className="bg-gray-200 py-10">
        <Brands />
        <div className="flex flex-col gap-6 justify-between items-center mt-16 ">
          <div className="flex flex-row items-center justify-center gap-4">
            <div className="bg-gray-500 w-20 h-[2px] rounded-full"></div>
            <h1 className="text-2xl font-poppins font-extralight text-gray-700">
              Featured Cars
            </h1>
            <div className="bg-gray-500 w-20 h-[2px] rounded-full"></div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-6 px-10 md:px-28">
            {featuredCars?.map((car, index) => (
              <motion.div
                initial={{ opacity: 0, y: index % 2 == 0 ? -50 : 50 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                key={index}
              >
                <VerticalDisplayCard
                  img_link={car.imageUrl}
                  car_title={car.title}
                  price={car.price}
                  fuel_type={car.fuelType}
                  year={car.year}
                  condition={1}
                  carId={car._id}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center py-10 bg-gray-200 gap-6 bg-gradient-to-t from-gray-100 to-gray-200">
        <h1 className="w-full text-center font-poppins text-xl font-medium">
          Our Services
        </h1>
        <p className="w-full text-center text-gray-500 font-poppins mt-3">
          we Provide many of the best servises for you and you will get the best
          benefits here{" "}
        </p>
        <div className="flex flex-row items-center justify-center gap-5 w-full py-3 md:px-28 flex-wrap px-10">
          <Tilt
            options={defaultOptions}
            className="flex flex-col justify-evenly items-start gap-6 p-4 w-full md:w-1/4 rounded-lg bg-white"
          >
            <CarFront size={50} color="#E53935" />
            <h1 className="text-lg font-semibold">Top Buy & Sell Car</h1>
            <p className="text-gray-500">
              we Provide many of the best servises for you and you will get the
              best benefits here{" "}
            </p>
          </Tilt>
          <Tilt
            options={defaultOptions}
            className="flex flex-col justify-evenly items-start gap-6 p-4 w-full md:w-1/4 rounded-lg bg-white"
          >
            <CreditCard size={50} color="#E53935" />
            <h1 className="text-lg font-semibold">Easy Payments</h1>
            <p className="text-gray-500">
              we Provide many of the best servises for you and you will get the
              best benefits here{" "}
            </p>
          </Tilt>
          {/* <Tilt options={defaultOptions}> */}
          <Tilt
            options={defaultOptions}
            className="flex flex-col justify-evenly items-start gap-6 p-4 w-full md:w-1/4 rounded-lg bg-white"
          >
            <Component size={50} color="#E53935" />
            <h1 className="text-lg font-semibold">Easy to Use</h1>
            <p className="text-gray-500">
              we Provide many of the best servises for you and you will get the
              best benefits here{" "}
            </p>
          </Tilt>
          {/* </Tilt> */}
        </div>
      </section>
      <Footer />
    </>
  );
}
