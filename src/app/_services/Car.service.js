import Car from "../_models/car.model";
import { sendMail } from "@/lib/sendMail";

class CarService {
  async getCarById(id) {
    const car = await Car.findById(id);
    if (!car) {
      throw new Error("Car not found");
    }
    return car;
  }

  async getAllCars() {
    const cars = await Car.find();
    return cars;
  }

  async getAllCarMakes() {
    const makes = await Car.find().distinct("make");
    return makes;
  }

  async getAllCarModels() {
    const models = await Car.find().distinct("model");
    return models;
  }

  async createCar({
    make,
    model,
    year,
    price,
    title,
    location,
    postalCode,
    ownerName,
    ownerEmail,
    ownerPhone,
    imageUrl,
    mileage,
    bodyType,
    transmission,
    fuelType,
    description,
    driveTrain,
    engine,
    color,
    report,
  }) {
    const car = await Car.create({
      make,
      model,
      year,
      price,
      title,
      location,
      postalCode,
      ownerName,
      ownerEmail,
      ownerPhone,
      imageUrl,
      mileage,
      bodyType,
      transmission,
      fuelType,
      description,
      driveTrain,
      engine,
      color,
      report,
    });
    return car;
  }

  async updateCar({
    id,
    make,
    model,
    year,
    price,
    title,
    location,
    postalCode,
    ownerName,
    ownerEmail,
    ownerPhone,
    imageUrl,
    mileage,
    bodyType,
    transmission,
    fuelType,
    description,
    driveTrain,
    engine,
    color,
    report,
  }) {
    const updatedCar = await Car.findByIdAndUpdate(id, {
      make,
      model,
      year,
      price,
      title,
      location,
      postalCode,
      ownerName,
      ownerEmail,
      ownerPhone,
      imageUrl,
      mileage,
      bodyType,
      transmission,
      fuelType,
      description,
      driveTrain,
      engine,
      color,
      report,
    });
    return updatedCar;
  }

  async deleteCar(id) {
    await Car.findByIdAndDelete(id);
  }

  async addCarByPeople({
    make,
    model,
    year,
    price,
    title,
    location,
    postalCode,
    ownerName,
    ownerEmail,
    ownerPhone,
    imageUrl,
    mileage,
    bodyType,
    transmission,
    fuelType,
    description,
    driveTrain,
    engine,
    color,
    report,
  }) {
    const data = `Make: ${make}\nModel: ${model}\nYear: ${year}\nPrice: ${price}\nTitle: ${title}\nLocation: ${location}\nPostal Code: ${postalCode}\nOwner Name: ${ownerName}\nOwner Email: ${ownerEmail}\nOwner Phone: ${ownerPhone}\nImage URL: ${imageUrl}\nMileage: ${mileage}\nBody Type: ${bodyType}\nTransmission: ${transmission}\nFuel Type: ${fuelType}\nDescription: ${description}\nDrive Train: ${driveTrain}\nEngine: ${engine}\nColor: ${color}\nReport: ${report}`;
    await sendMail({
      email: ownerEmail,
      subject: "Car Submission",
      data,
    });
  }

  async searchCars({
    make,
    model,
    year,
    minPrice,
    maxPrice,
    postalCode,
    mileage,
    bodyType,
    transmission,
    fuelType,
    driveTrain,
    engine,
    color,
  }) {
    const cars = await Car.find({
      make: make,
      model: model,
      year: year,
      postalCode: postalCode,
      mileage: mileage,
      bodyType: bodyType,
      transmission: transmission,
      fuelType: fuelType,
      driveTrain: driveTrain,
      engine: engine,
      color: color,
      price: { $gte: minPrice, $lte: maxPrice },
    });
    return cars;
  }

  async featuredCars() {
    const cars = await Car.aggregate([{ $sort: { price: 1 } }, { $limit: 4 }]);
    return cars;
  }
}

export default CarService;
