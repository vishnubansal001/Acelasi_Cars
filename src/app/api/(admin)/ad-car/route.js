import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import CarService from "@/app/_services/Car.service";
import UserService from "@/app/_services/User.service";

export const POST = async (req) => {
  try {
    await connectToDB();
    const car = await req.json();
    if (
      !car.userId ||
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
      !car.description ||
      !car.driveTrain ||
      !car.engine ||
      !car.color ||
      !car.report
    ) {
      console.log(car);
      return new NextResponse("Please fill all the fields", { status: 400 });
    }
    try {
      const user = await new UserService().checkAdmin(car.userId);
      const carData = await new CarService().createCar(car);
      return NextResponse.json({
        message: "Car added successfully",
        id: carData._id,
      });
    } catch (error) {
      return new NextResponse(error.message, { status: 401 });
    }
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
