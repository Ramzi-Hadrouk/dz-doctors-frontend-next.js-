'use client'
import DoctorCard from "../_components/DoctorCard"
import DoctorsList from "../_components/DoctorsList"
import { useRouter } from 'next/navigation';


function Details({ params }) {
  const router = useRouter();

  return (

    <div className="h-screen grid grid-cols-4 gap-6">

      <div className="bg-Slate-50 col-span-4  lg:col-span-3   ">

          
          <DoctorCard doctorId={params.record_id}/> 

      </div>
      <div className=" hidden lg:grid">
        

          <DoctorsList router={router}/>
      </div>


    </div>
  )
}

export default Details
