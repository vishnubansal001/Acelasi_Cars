import cloudinary from "../_cloud/cloudinary";
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

  async getModelByMake(make) {
    const models = await Car.find({ make }).distinct("model");
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
    image,
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
    const imageRes = await cloudinary.uploader.upload(image, {
      upload_preset: "events",
    });
    const imageUrl = imageRes.secure_url;
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
    image,
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
    const data = `Make: ${make}\nModel: ${model}\nYear: ${year}\nPrice: ${price}\nTitle: ${title}\nLocation: ${location}\nPostal Code: ${postalCode}\nOwner Name: ${ownerName}\nOwner Email: ${ownerEmail}\nOwner Phone: ${ownerPhone}\nImage URL: ${image}\nMileage: ${mileage}\nBody Type: ${bodyType}\nTransmission: ${transmission}\nFuel Type: ${fuelType}\nDescription: ${description}\nDrive Train: ${driveTrain}\nEngine: ${engine}\nColor: ${color}\nReport: ${report}`;
    await sendMail({
      email: ownerEmail,
      subject: "Car Submission",
      data,
    });
  }

  async searchCars({
    minYear,
    maxYear,
    minPrice,
    maxPrice,
    minMileage,
    maxMileage,
    ...car
  }) {
    const cars = await Car.find({
      ...car,
      year: { $gte: minYear ? minYear : 0, $lte: maxYear ? maxYear : 10000 },
      price: {
        $gte: minPrice ? minPrice : 0,
        $lte: maxPrice ? maxPrice : 1e18,
      },
      mileage: {
        $gte: minMileage ? minMileage : 0,
        $lte: maxMileage ? maxMileage : 1e9,
      },
    });
    // console.log(cars);
    return cars;
  }

  async featuredCars() {
    const cars = await Car.aggregate([{ $sort: { price: 1 } }, { $limit: 4 }]);
    return cars;
  }
}

export default CarService;
