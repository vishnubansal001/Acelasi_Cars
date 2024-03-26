"use client"
import { uniqueMakesArray,cars } from "@/lib/constants"
import { useState } from "react"
import { Search } from "lucide-react";

export default function HomeSearch() {

    const [filteredModels, setFilteredModels] = useState([...new Set(cars.map(car => car.model))]);
    function filterModelsByMake(selectedMake) {
        const filteredModels = [... new Set(cars
          .filter(car => car.make === selectedMake)
          .map(car => car.model))]
      
        return filteredModels;
      }
      
      // Example onchange event handler for <select>
      function onMakeSelectChange(event) {
        const selectedMake = event.target.value;
        if(selectedMake === "any") return setFilteredModels([...new Set(cars.map(car => car.model))]);
        const filteredModels = filterModelsByMake(selectedMake);
      
        // Assuming you have a <select> element for models with id "modelSelect"
        setFilteredModels(filteredModels);
      }

  return (
    <div className="flex flex-row justify-center items-center w-full ">

        <div className='flex flex-row gap-2 p-4 rounded-full w-4/5 shadow-lg bg-white items-center justify-center'>
            <div className="flex flex-col w-full">
                <label htmlFor="make" className="px-3">Make</label>
                <select name="Make" id="make" className="h-10 w-full rounded-full px-2 border-2 border-gray-100 border-solid" onChange={onMakeSelectChange}>
                    <option value="any">--any--</option>
                    {uniqueMakesArray.map((make,index)=>
                        <option key={index} value={make}>{make}</option>
                        )}
                </select>
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="model" className="px-3">Model</label>
                <select name="model" id="model" className="h-10 w-full rounded-full px-2 border-2 border-gray-100 border-solid">
                    <option value="any">--any--</option>
                    {filteredModels.map((model,index)=>
                        <option key={index} value={model}>{model}</option>
                        )}
                </select>
            </div>
            <div className="rounded-full bg-red-700 h-10 w-10 p-2 flex items-center justify-center"><Search color="white" strokeWidth={1}/></div>
        </div>
    </div>
  )
}
