"use client"
import Navbar from '@/components/Navbar'
import  { useState, useEffect } from 'react'
import { cars } from '@/lib/constants'

export default function page({params}) {
    
    const [car, setCar] = useState(null)
    useEffect(()=>{
        const fetchCar = async () => {
            const res = await fetch(`/api/cars/${params.id}`)
            const data = await res.json()
            setCar(data)
        }
        fetchCar()
    },[])
    
  return (
    <div>
        <Navbar />
        <section className='min-h-screen md:px-28 px-10 md:pt-16 pb-5'>
            {car ? 
                (<p>got car</p>):
                (<p>Loading...</p>)}
        </section>
    </div>
  )
}
