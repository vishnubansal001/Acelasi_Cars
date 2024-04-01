import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import CarService from "@/app/_services/Car.service";

export const GET = async (req) => {
  try {
    await connectToDB();
    const cars = await new CarService().getAllCarMakes();
    return NextResponse.json(cars);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
