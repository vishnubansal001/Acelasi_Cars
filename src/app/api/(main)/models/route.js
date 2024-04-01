import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import CarService from "@/app/_services/Car.service";

export const GET = async (req) => {
  try {
    await connectToDB();
    const cars = await new CarService().getAllCarModels();
    return NextResponse.json(cars);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};

export const POST = async (req) => {
  try {
    await connectToDB();
    const car = await req.json();
    if (!car.make || !car) {
      return new NextResponse("Please fill all the fields", { status: 400 });
    }
    const data = await new CarService().getModelByMake(car.make);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
