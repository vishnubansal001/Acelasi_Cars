"use client"

import { useState } from "react"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { Button } from "./ui/button"
import { uniqueMakesArray,cars } from "@/lib/constants"
import { Filter } from "lucide-react"
  

function FilterComponent() {
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
    <Drawer>
        <DrawerTrigger>
            <div className="flex flex-row items-center justify-center gap-2 border border-gray-400 p-2 rounded-md">
                <p>Filter</p>
                <Filter strokeWidth={1} size={20}/>
            </div>
        </DrawerTrigger>
        <DrawerContent>
            <DrawerHeader>
                <DrawerTitle>Choose the best need of yours</DrawerTitle>
            </DrawerHeader>
            <DrawerFooter>
                <form className="flex flex-col gap-6">
                    <div className="flex flex-row w-full gap-6">
                        <div className="flex flex-col w-full">
                            <label htmlFor="make">Make</label>
                            <select name="Make" id="make" className="h-10 w-full rounded-md border-2 border-gray-200 border-solid" onChange={onMakeSelectChange}>
                                <option value="any">--any--</option>
                                {uniqueMakesArray.map((make,index)=>
                                    <option key={index} value={make}>{make}</option>
                                    )}
                            </select>
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="model">Model</label>
                            <select name="model" id="model" className="h-10 w-full rounded-md border-2 border-gray-200 border-solid">
                                <option value="any">--any--</option>
                                {filteredModels.map((model,index)=>
                                    <option key={index} value={model}>{model}</option>
                                    )}
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-row w-full gap-6">
                        <div className="flex flex-col w-full">
                            <label htmlFor="minPrice">Minimum Price</label>
                            <input type="number" id="minPrice" className="h-8 w-full rounded-md border-2 border-gray-200 border-solid"/>
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="maxPrice">Maximum Price</label>
                            <input type="number" id="maxPrice" className="h-8 w-full rounded-md border-2 border-gray-200 border-solid"/>
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="minYear">Minimum Year</label>
                            <input type="number" id="minYear" className="h-8 w-full rounded-md border-2 border-gray-200 border-solid"/>
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="maxYear">Maximum Year</label>
                            <input type="number" id="maxYear" className="h-8 w-full rounded-md border-2 border-gray-200 border-solid"/>
                        </div>
                    </div>
                    
                </form>
                <div className="flex flex-row justify-center items-center gap-6 ">
                    <Button variant='default' onClick={()=>{alert("filters applied")}}>Apply Filters</Button>
                    <DrawerClose>
                        <Button variant='outline'>Cancel</Button>
                    </DrawerClose>
                </div>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>

  )
}

export default FilterComponent
