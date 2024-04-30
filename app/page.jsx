'use client'
import Image from "next/image";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorLis from "./_components/DoctorLis";
import { useEffect, useState } from "react";
import { getDoctors } from '@/app/_utils/GlobalApi'

export default function Home() {
  const [doctors, setDoctors] = useState([]);
  useEffect(
    () => {
      getDoctors()
        .then(response => {
          console.log(response.data.data)
          setDoctors(response.data.data)
        })
        .catch(error=>console.log(error))
    },
    [],
  );
 
 
  return (
    <>
      <Hero />
      <CategorySearch />
      {/**doctors section ------------------------------------- */}
      <h1 className="text-2xl font-bold  text-center">Popular Doctors </h1>
      <div className='mt-10 mb-10 grid lg:gap-10 gap-2 md:gap-5  grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center cursor-pointer  '>
        <DoctorLis list={doctors} />
      </div>
    </>
  );
}
