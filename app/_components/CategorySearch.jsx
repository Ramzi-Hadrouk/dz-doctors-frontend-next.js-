import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {Search} from 'lucide-react' 
function CategorySearch() {
  return (
    <div className='grid w-full place-items-center mt-4'>
      <h1 className='text-4xl tracking-wide'>Search Doctor</h1>
      <h2 className='text-xl text-gray-600 text-center'>Search Your Doctor and Book Appoiment in One Click</h2>
     
      <div className="flex w-full max-w-sm items-center space-x-2 mt-6">
        <Input type="email" placeholder="Search . . . "  className=' bg-gray-100'/>
        <Button  type="submit" className='font-bold '><Search className='px-1 py-1'/> Search</Button>
      </div>

    </div>
  )
}

export default CategorySearch
