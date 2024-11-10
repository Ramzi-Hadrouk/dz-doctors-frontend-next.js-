'use client'
import { getDoctorsById } from '@/app/_utils/GlobalApi';
import { useEffect, useState } from "react";
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react'
import { Phone, MapPin, Clock9, HeartPulse } from 'lucide-react';
import Link from 'next/link';
import BookAppointment from './BookAppointment';

function DoctorCard({ doctorId }) {
    let [doctor, setDoctor] = useState(null);

    useEffect(() => {
        getDoctorsById(doctorId)
            .then(response => {
                if (response.data) {
                    setDoctor(response.data.data.attributes); // Set doctor with the relevant data
                } else {
                    console.error("Empty response data");
                }
            })
            .catch(error => console.error("API request failed:", error)); // Log any API request errors
    }, [doctorId]);


    return (
        <div>
            {doctor && (
                <>
                    <div className='grid   grid-cols-1 md:grid-cols-2  rounded-lg border  bg-white place-contnte border-blue-300 shadow-lg  '>

                        <img src={doctor.Image.data.attributes.url} className='shadow md:justify-start justify-self-center  h-56 object-cover m-5 rounded-lg bg-white' />

                        <div className=' grid grid-cols-1 pt-5 px-3 '>

                            <h2 className='font-mono  md:justify-self-start  justify-self-center w-fit font-bold pt-2 text-xl'>{doctor.Name}</h2>
                            {/*<h2 className='font-mono  pt-3' > Experience : {doctor.attributes.Experience}  </h2>*/}
                            <h2 className='font-mono  md:justify-self-start justify-self-center w-fit pt-3' ><MapPin className='inline' /> {doctor.Address}  </h2>
                            <h2 className='font-mono md:justify-self-start  justify-self-center w-fit  pt-3' > <Phone className='inline  ' />  {doctor.Phone}  </h2>
                            <h2 className='font-mono md:justify-self-start  justify-self-center w-fit  pt-3' >  <Clock9 className='inline' />
                                <span className='px-3 text-green-900 font-bold'>{doctor.StartTime}</span>
                                to

                                <span className='px-3 text-red-900 font-bold'>{doctor.EndTime} </span>

                            </h2>
                            <span className='bg-blue-400 md:justify-self-start justify-self-center  rounded-lg  text-white capitalize font-bold   my-6 px-3 shadow-sm w-fit'> <HeartPulse className='inline mx-2' />{doctor.category.data.attributes.Name}</span>

                             

                                <Button variant="outline" className='my-9   px-0  py-0 h-fit md:justify-self-end justify-self-center   w-fit hover:bg-blue-500 bg-blue-100 text-blue-500 hover:text-white   shadow-gray-500 shadow-md font-bold'>

                                    
                                    <BookAppointment doctorId={doctorId}/>
                                </Button>
                          
                          
                        </div>

                    </div>

                    <div className=' rounded-lg border p-4  bg-white my-4 text-lg border-blue-300 shadow-lg     '>
                        <h1 className='text-2xl font-bold   m-2'> About</h1>
                        {doctor.About[0].children[0].text}

                    </div>
                </>
            )}
        </div>
    );
}

export default DoctorCard;
