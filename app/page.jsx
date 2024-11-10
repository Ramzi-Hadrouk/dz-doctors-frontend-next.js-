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
      <h1 className="text-2xl font-bold  text-center my-5">Popular Doctors </h1>
      <div className='  px-10  '>
        <DoctorLis list={doctors} />
      </div>
    </>
  );
}
