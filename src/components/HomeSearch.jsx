"use client"
// import { uniqueMakesArray,cars } from "@/lib/constants"
import { useState,useEffect } from "react"
import { Search } from "lucide-react";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { generateQueryParams } from "@/lib/utils";

export default function HomeSearch() {

  const [uniqueMakes, setUniqueMakes] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);
  const [formState, setFormState] = useState({});
  const router=useRouter();
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
    router.push(`/search?${generateQueryParams(formState)}`);
    // setReset(a=>!a);
    // setFilters(formState)
  };
  const onFormChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-row justify-center items-center w-full ">

        <div className='flex flex-row gap-2 p-4 rounded-full w-4/5 shadow-lg bg-white items-center justify-center'>
            <div className="flex flex-col w-full">
                <label htmlFor="make" className="px-3">Make</label>
                <select name="make" id="make" className="h-10 w-full rounded-full px-2 border-2 border-gray-100 border-solid" onChange={(e)=>{
                  onMakeSelectChange(e);
                  onFormChange(e);
                }}>
                    <option value={null}>--any--</option>
                    {uniqueMakes.map((make,index)=>
                        <option key={index} value={make}>{make}</option>
                        )}
                </select>
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="model" className="px-3">Model</label>
                <select name="model" id="model" className="h-10 w-full rounded-full px-2 border-2 border-gray-100 border-solid" onChange={onFormChange}>
                    <option value="any">--any--</option>
                    {filteredModels.map((model,index)=>
                        <option key={index} value={model}>{model}</option>
                        )}
                </select>
            </div>
            <div href={"/search"} className="rounded-full bg-red-700 h-10 w-10 p-2 flex items-center justify-center"><Search color="white" strokeWidth={1} onClick={onApplyFilters}/></div>
        </div>
    </div>
  )
}
