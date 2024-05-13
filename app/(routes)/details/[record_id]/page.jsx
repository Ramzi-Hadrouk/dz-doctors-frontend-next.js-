import DoctorCard from "../_components/DoctorCard"
import DoctorsList from "../_components/DoctorsList"



function Details({ params }) {
  return (

    <div className="h-screen grid grid-cols-4 gap-6">

      <div className="bg-Slate-50 col-span-4  lg:col-span-3   ">

          
          <DoctorCard doctorId={params.record_id}/> 

      </div>
      <div className=" hidden lg:grid">
        

          <DoctorsList/>
      </div>


    </div>
  )
}

export default Details
