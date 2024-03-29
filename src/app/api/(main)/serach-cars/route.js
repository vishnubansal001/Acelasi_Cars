import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import CarService from "@/app/_services/Car.service";

export const POST = async (req) => {
  try {
    await connectToDB();
    const car = await req.json();

    const cars = await new CarService().searchCars(car);
    return NextResponse.json(cars);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
