import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import CarService from "@/app/_services/Car.service";

export const GET = async (req) => {
  try {
    await connectToDB();
    const cars = await new CarService().getAllCars();
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
    if (
      !car ||
      !car.make ||
      !car.model ||
      !car.year ||
      !car.price ||
      !car.title ||
      !car.location ||
      !car.postalCode ||
      !car.ownerName ||
      !car.ownerEmail ||
      !car.ownerPhone ||
      !car.imageUrl ||
      !car.mileage ||
      !car.bodyType ||
      !car.transmission ||
      !car.fuelType ||
      !car.engineSize ||
      !car.description ||
      !car.driveTrain ||
      !car.engine ||
      !car.color ||
      !car.report
    ) {
      return new NextResponse("Please fill all the fields", { status: 400 });
    }
    const carData = await new CarService().addCarByPeople(car);
    return NextResponse.json({ message: "Car add request sent successfully" });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
