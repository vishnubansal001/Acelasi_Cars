import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import CarService from "@/app/_services/Car.service";
import UserService from "@/app/_services/User.service";

export const PUT = async (req) => {
  try {
    const carId = req.params.carId;
    await connectToDB();
    const car = await req.json();
    if (!car || !car.userId) {
      return new NextResponse("Please fill all the fields", { status: 400 });
    }
    try {
      const user = await new UserService().checkAdmin(car.userId);
      const updatedCar = await new CarService().updateCar({
        ...car,
        id: carId,
      });
      return new NextResponse({
        message: "Car updated successfully",
        id: updatedCar._id,
      });
    } catch (error) {
      return new NextResponse(error.message, { status: 401 });
    }
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};

export const DELETE = async (req, {params}) => {
  try {
    const carId = params.carId;
    await connectToDB();
    const { userId } = await req.json();
    console.log(userId, carId);
    if (!userId || !carId) {
      return new NextResponse("Please fill all the fields", { status: 400 });
    }
    try {
      const user = await new UserService().checkAdmin(userId);
      await new CarService().deleteCar(carId);
      return new NextResponse("Car deleted successfully");
    } catch (error) {
      return new NextResponse(error.message, { status: 401 });
    }
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
