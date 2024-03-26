import VerticalDisplayCard from "@/components/VerticalDisplayCard";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import HorizontalDisplayCard from "@/components/HorizontalDisplayCard";
import FilterComponent from "@/components/FilterComponent";
import HomeSearch from "@/components/HomeSearch";


export default function Home() {
  return (
    <div className="bg-gray-200">
    <Navbar/>
    <div className="flex flex-row gap-4 min-h-screen items-center justify-center">

      <VerticalDisplayCard img_link="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" car_title="Ferrari la-ferrari" price="100,000" year="2021" fuel_type="Petrol" condition={0}/>  
      <VerticalDisplayCard img_link="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" car_title="Ferrari la-ferrari" price="100,000" year="2021" fuel_type="Petrol" condition={0}/>  
      <VerticalDisplayCard img_link="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" car_title="Ferrari la-ferrari" price="100,000" year="2021" fuel_type="Petrol" condition={0}/>  
      <VerticalDisplayCard img_link="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" car_title="Ferrari la-ferrari" price="100,000" year="2021" fuel_type="Petrol" condition={0}/>  
      
    </div>
    <div className="flex flex-col gap-4 px-6 py-6">

      <HorizontalDisplayCard img_link="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" car_title="Ferrari la-ferrari" price="100,000" year="2021" fuel_type="Petrol" condition={0}/>
      <HorizontalDisplayCard img_link="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" car_title="Ferrari la-ferrari" price="100,000" year="2021" fuel_type="Petrol" condition={0}/>
    </div>
    <FilterComponent />
    <HomeSearch />
    </div>  
  );
}
