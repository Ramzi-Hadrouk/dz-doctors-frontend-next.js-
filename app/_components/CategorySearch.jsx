'use client'
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'
import { getCategories } from '@/app/_utils/GlobalApi'
import Image from 'next/image'
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


//-------


//------
function CategorySearch() {

  const [categories, setCategories] = useState([]);

  useEffect(
    () => {
      getCategories().then(
        response => {
          setCategories(response.data.data);
          //console.log(response.data.data)
        }
      ).catch(error => {
        console.error(error);
      });
    },

    []
  );




  return (

    <div className='px-10 '>
      {/* Search Section------------------------ */}
      <h1 className='text-4xl tracking-wide text-center'>Search Doctor</h1>
      <h2 className='text-xl text-gray-600   mb-10 text-center'>Search Your Doctor and Book Appoiment in One Click</h2>
      {/*
      <div className="flex w-full max-w-sm items-center space-x-2 mt-6">
        <Input type="email" placeholder="Search . . . " className=' bg-gray-100' />
        <Button type="submit" className='font-bold '><Search className='px-1 py-1' /> Search</Button>
      </div>*/
      }

      {/* Categories section ---------------------- */}
      
        <Carousel>
          <CarouselContent>
            {categories.length === 0 ? (

              [1, 2, 3, 4, 1, 2, 3, 4, 1, 1].map((value, index) => (
                <div key={index} role="status" className="p-1 border   border-gray-300 rounded shadow animate-pulse w dark:border-gray-700">
                  <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                    <svg className=" w-32 h-32 md:w-56 md:h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    </svg>
                  </div>


                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>

                </div>
              ))
            ) : (
              categories.map((item, index) => (
                <CarouselItem className=" sm:basis-1/2  md:basis-1/3 lg:basis-1/5  hover:scale-90   transition-all">
                <Link href={`/search/` + item.attributes.Name} key={index} className=' shadow-lg border   bg-white  border-blue-300 grid grid-cols-1 gap-2 rounded-lg p-2  hover:bg-blue-200  ease-in-out place-content-center'>
                  <img src={item.attributes.Image.data.attributes.url} alt={item.attributes.Name} className=' h-28 rounded-lg object-cover justify-self-center overflow-hidden' />
                  <label className='text-center text-blue-500'>{item.attributes.Name}</label>
                </Link>
                </CarouselItem>
              ))
            )}


          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      




    </div>
  )
}

export default CategorySearch
