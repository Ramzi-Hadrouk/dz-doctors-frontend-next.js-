import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react'
import { HeartPulse,Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

function DoctorLis({ list }) {

  if (list.length == 0) {
    const array = [1, 2, 3, 4, 5, 6]
    return (
      array.map((value, index) => (
        <div key={index} role="status" className="max-w-sm p-4 border border-gray-300 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
          <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700  mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          <div className="flex items-center mt-4">

          </div>
          <span className="sr-only">Loading...</span>
        </div>
      ))

    );
  }

  return (

    list.map((doctor, index) => index < 5 && (
      <div key={index} className='grid cursor-pointer shadow-2xl h-90  border rounded-lg p-2  hover:bg-blue-200  px-5 border-solid  border-blue-300 hover:scale-110 transition-all ease-in-out hover:shadow-2xl 

      hover:shadow-blue-500/50'>

        <img src={doctor.attributes.Image.data.attributes.url} alt="doctor image" className='w-36  justify-self-center h-36 border border-blue-300 bg-white   rounded-full  ' />
        <div className=' grid justify-center'>
          <span className='bg-blue-400 rounded-lg  text-white capitalize font-bold text-center  my-6 px-3 shadow-sm'> <HeartPulse className='inline mx-2' /> {doctor.attributes.category.data.attributes.Name}</span>
          <h2 className='font-mono text-center  font-bold pt-2 text-xl'>{doctor.attributes.Name}</h2>
          {/*<h2 className='font-mono  pt-3' > Experience : {doctor.attributes.Experience}  </h2>*/}
          <h2 className='font-mono  pt-3' ><MapPin className='inline' /> {doctor.attributes.Address}  </h2>
          <h2 className='font-mono  pt-3' > <Phone className='inline m-2' />  {doctor.attributes.Phone}  </h2>
        </div>
        <Link href={`/details/${doctor.id}`} className='justify-self-center  w-fit'>
          <Button variant="outline" className='my-9 justify-self-center hover:bg-blue-500 hover:text-white'>

            Book Now
          </Button>
        </Link>

      </div>
    ))


  );
}

export default DoctorLis
