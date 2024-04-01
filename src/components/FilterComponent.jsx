"use client";

import { useEffect, useState } from "react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { Filter } from "lucide-react";
import axios from "axios";

function FilterComponent({ filters, setFilters }) {
  const [uniqueMakes, setUniqueMakes] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);
  const [formState, setFormState] = useState({});
  useEffect(() => {
    axios
      .get("/api/make")
      .then((res) => {
        setUniqueMakes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const onMakeSelectChange = (e) => {
    axios
      .post("/api/models", { make: e?.target?.value })
      .then((res) => {
        setFilteredModels(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onApplyFilters = () => {
    console.log(formState);
    
  };
  const onFormChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <Drawer>
      <DrawerTrigger>
        <div className="flex flex-row items-center justify-center gap-2 border border-gray-400 p-2 rounded-md relative z-10">
          <p>Filter</p>
          <Filter strokeWidth={1} size={20} />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Choose the best need of yours</DrawerTitle>
        </DrawerHeader>
        <DrawerFooter>
          <form className="flex flex-col gap-2 sm:gap-6 text-sm">
            <div className="flex flex-row w-full gap-6">
              <div className="flex flex-col w-full">
                <label htmlFor="make">Make</label>
                <select
                  name="Make"
                  id="make"
                  className="h-10 w-full rounded-md border-2 border-gray-200 border-solid"
                  onChange={(e) => {
                    onMakeSelectChange(e);
                    onFormChange(e);
                  }}
                >
                  <option value={null}>--any--</option>
                  {uniqueMakes.map((make, index) => (
                    <option key={index} value={make}>
                      {make}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="model">Model</label>
                <select
                  name="model"
                  id="model"
                  className="h-10 w-full rounded-md border-2 border-gray-200 border-solid"
                  onChange={onFormChange}
                >
                  <option value={null}>--any--</option>
                  {filteredModels.map((model, index) => (
                    <option key={index} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-row w-full gap-6">
              <div className="flex flex-col w-full">
                <label htmlFor="minPrice">Minimum Price</label>
                <input
                  type="number"
                  id="minPrice"
                  className="h-8 w-full rounded-md border-2 border-gray-200 border-solid"
                  onChange={onFormChange}
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="maxPrice">Maximum Price</label>
                <input
                  type="number"
                  id="maxPrice"
                  className="h-8 w-full rounded-md border-2 border-gray-200 border-solid"
                  onChange={onFormChange}
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="minYear">Minimum Year</label>
                <input
                  type="number"
                  id="minYear"
                  className="h-8 w-full rounded-md border-2 border-gray-200 border-solid"
                  onChange={onFormChange}
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="maxYear">Maximum Year</label>
                <input
                  type="number"
                  id="maxYear"
                  className="h-8 w-full rounded-md border-2 border-gray-200 border-solid"
                  onChange={onFormChange}
                />
              </div>
            </div>
            <div className="flex flex-row w-full gap-2 sm:gap-6">
              <div className="flex flex-col w-full">
                <label htmlFor="minMileage">Minimum Mileage</label>
                <input
                  type="number"
                  id="minMileage"
                  className="h-8 w-full rounded-md border-2 border-gray-200 border-solid"
                  onChange={onFormChange}
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="maxMilage">Maximum Milage</label>
                <input
                  type="number"
                  id="maxMilage"
                  className="h-8 w-full rounded-md border-2 border-gray-200 border-solid"
                  onChange={onFormChange}
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="bodyType">Body Type</label>
                <select
                  name="bodyType"
                  id="bodyType"
                  className="h-8 w-full rounded-md border-2 border-gray-200 border-solid"
                  onChange={onFormChange}
                >
                  <option value={null}>--any--</option>
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
              <div className="flex flex-col w-full">
                <label htmlFor="color">Color</label>
                <select
                  name="color"
                  id="color"
                  className="h-8 w-full rounded-md border-2 border-gray-200 border-solid"
                  onChange={onFormChange}
                >
                  <option value={null}>--any--</option>
                  <option value="Black">Black</option>
                  <option value="White">White</option>
                  <option value="Red">Red</option>
                  <option value="Silver">Silver</option>
                  <option value="Grey">Grey</option>
                  <option value="Blue">Blue</option>
                  <option value="Brown">Brown</option>
                  <option value="Green">Green</option>
                  <option value="Yellow">Yellow</option>
                  <option value="Orange">Orange</option>
                  <option value="Purple">Purple</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row w-full gap-2 sm:gap-6 mb-6">
              <div className="flex flex-col w-full">
                <label htmlFor="engine">Engine</label>
                <select
                  name="engine"
                  id="engine"
                  className="h-8 w-full rounded-md border-2 border-gray-200 border-solid"
                  onChange={onFormChange}
                >
                  <option value={null}>--any--</option>
                  <option value="V4">V4</option>
                  <option value="V6">V6</option>
                  <option value="V8">V8</option>
                  <option value="V12">V12</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="fuelType">Fuel Type</label>
                <select
                  name="fuelType"
                  id="fuelType"
                  className="h-8 w-full rounded-md border-2 border-gray-200 border-solid"
                  onChange={onFormChange}
                >
                  <option value={null}>--any--</option>
                  <option value="Petrol">Gasoline</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Electric">Electric</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="driveTrain">Drive Train</label>
                <select
                  name="driveTrain"
                  id="driveTrain"
                  className="h-8 w-full rounded-md border-2 border-gray-200 border-solid"
                  onChange={onFormChange}
                >
                  <option value={null}>--any--</option>
                  <option value="FWD">FWD</option>
                  <option value="RWD">RWD</option>
                  <option value="AWD">AWD</option>
                  <option value="4WD">4WD</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="transmission">Transmission</label>
                <select
                  name="transmission"
                  id="transmission"
                  className="h-8 w-full rounded-md border-2 border-gray-200 border-solid"
                  onChange={onFormChange}
                >
                  <option value={null}>--any--</option>
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </form>
          <div className="flex flex-row justify-center items-center gap-6 ">
            <Button
              variant="default"
              onClick={() => {
                onApplyFilters();
              }}
            >
              Apply Filters
            </Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default FilterComponent;
