"use client"
import { useState } from 'react';

export default function AddCar() {
  const [image, setImage] = useState(null);
  const [formState, setFormState] = useState({
    title: '',
    make: '',
    model: '',
    year: '',
    price: '',
    location: '',
    postalCode: '',
    ownerName: '',
    ownerEmail: '',
    ownerPhone: '',
    imageUrl: '',
    mileage: '',
    bodyType: '',
    color: '',
    engine: '',
    transmission: '',
    driveTrain: '',
    fuelType: '',
    description: '',
    report: '',
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'car-dealer');
    // upload the image to cloudinary and add the URL to the form data
    
    const response = await fetch('/api/request-sell', {
      method: 'POST',
      body: formData,
    });

    
    const data = await response.json();
    if (data.error) {
      console.error(data.error);
    } else {
      console.log('Car added:', data.data);
    }
  };

  return (
    <form className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <label htmlFor="title" className="block mb-1 font-semibold">
          Title:
        </label>
        <input
          type="text"
          name="title"
          value={formState.title}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="make" className="block mb-1 font-semibold">
            Make:
          </label>
          <input
            type="text"
            name="make"
            value={formState.make}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="model" className="block mb-1 font-semibold">
            Model:
          </label>
          <input
            type="text"
            name="model"
            value={formState.model}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="year" className="block mb-1 font-semibold">
            Year:
          </label>
          <input
            type="number"
            name="year"
            value={formState.year}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="price" className="block mb-1 font-semibold">
            Price:
          </label>
          <input
            type="number"
            name="price"
            value={formState.price}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="location" className="block mb-1 font-semibold">
            Location:
          </label>
          <input
            type="text"
            name="location"
            value={formState.location}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="postalCode" className="block mb-1 font-semibold">
            Postal Code:
          </label>
          <input
            type="text"
            name="postalCode"
            value={formState.postalCode}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="ownerName" className="block mb-1 font-semibold">
          Owner Name:
        </label>
        <input
          type="text"
          name="ownerName"
          value={formState.ownerName}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="ownerEmail" className="block mb-1 font-semibold">
          Owner Email:
        </label>
        <input
          type="email"
          name="ownerEmail"
          value={formState.ownerEmail}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="ownerPhone" className="block mb-1 font-semibold">
          Owner Phone:
        </label>
        <input
          type="tel"
          name="ownerPhone"
          value={formState.ownerPhone}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block mb-1 font-semibold">
          Image
        </label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="mileage" className="block mb-1 font-semibold">
          Mileage:
        </label>
        <input
          type="number"
          name="mileage"
          value={formState.mileage}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="bodyType" className="block mb-1 font-semibold">
          Body Type:
        </label>
        <select
          name="bodyType"
          value={formState.bodyType}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Select a body type</option>
          <option value="Sedan">Sedan</option>
          <option value="Coupe">Coupe</option>
          <option value="SUV">SUV</option>
          <option value="Truck">Truck</option>
          <option value="Van">Van</option>
          <option value="Wagon">Wagon</option>
          <option value="Convertible">Convertible</option>
          <option value="Hatchback">Hatchback</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="color" className="block mb-1 font-semibold">
          Color:
        </label>
        <select
          name="color"
          value={formState.color}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Select a color</option>
          <option value="Black">Black</option>
          <option value="White">White</option>
          <option value="Silver">Silver</option>
          <option value="Grey">Grey</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Brown">Brown</option>
          <option value="Green">Green</option>
          <option value="Yellow">Yellow</option>
          <option value="Orange">Orange</option>
          <option value="Purple">Purple</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="engine" className="block mb-1 font-semibold">
          Engine:
        </label>
        <select
          name="engine"
          value={formState.engine}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Select an engine</option>
          <option value="V4">V4</option>
          <option value="V6">V6</option>
          <option value="V8">V8</option>
          <option value="V12">V12</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="transmission" className="block mb-1 font-semibold">
          Transmission:
        </label>
        <select
          name="transmission"
          value={formState.transmission}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Select a transmission</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="driveTrain" className="block mb-1 font-semibold">
          Drive Train:
        </label>
        <select
          name="driveTrain"
          value={formState.driveTrain}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Select a drive train</option>
          <option value="FWD">FWD</option>
          <option value="RWD">RWD</option>
          <option value="AWD">AWD</option>
          <option value="4WD">4WD</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="fuelType" className="block mb-1 font-semibold">
          Fuel Type:
        </label>
        <select
          name="fuelType"
          value={formState.fuelType}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Select a fuel type</option>
          <option value="Gasoline">Gasoline</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block mb-1 font-semibold">
          Description:
        </label>
        <textarea
          name="description"
          value={formState.description}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="report" className="block mb-1 font-semibold">
          CARFAX Report Link:
        </label>
        <textarea
          name="report"
          value={formState.report}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-red-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          Send Sell Request
        </button>
      </div>
    </form>
  );
}