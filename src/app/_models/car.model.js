import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  ownerName: {
    type: String,
    required: true,
  },
  ownerEmail: {
    type: String,
    required: true,
  },
  ownerPhone: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  mileage: {
    type: Number,
    required: true,
  },
  bodyType: {
    type: String,
    enum: [
      "Sedan",
      "Coupe",
      "SUV",
      "Truck",
      "Van",
      "Wagon",
      "Convertible",
      "Hatchback",
      "Other",
    ],
    required: true,
  },
  color: {
    type: String,
    required: true,
    enum: [
      "Black",
      "White",
      "Silver",
      "Grey",
      "Red",
      "Blue",
      "Brown",
      "Green",
      "Yellow",
      "Orange",
      "Purple",
      "Other",
    ],
  },
  engine: {
    type: String,
    required: true,
    enum: ["V4", "V6", "V8", "V12", "Other"],
  },
  engineSize: {
    type: Number,
    required: true,
  },
  transmission: {
    type: String,
    required: true,
    enum: ["Automatic", "Manual", "Other"],
  },
  driveTrain: {
    type: String,
    required: true,
    enum: ["FWD", "RWD", "AWD", "4WD", "Other"],
  },
  fuelType: {
    type: String,
    required: true,
    enum: ["Gasoline", "Diesel", "Electric", "Hybrid", "Other"],
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  report: {
    type: String,
  },
});

const Car = mongoose.models["Car"] || mongoose.model("Car", carSchema);

export default Car;
