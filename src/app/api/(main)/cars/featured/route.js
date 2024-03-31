import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import CarService from "@/app/_services/Car.service";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    const carService = new CarService();
    const cars = await carService.featuredCars();
    return NextResponse.json(cars);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
