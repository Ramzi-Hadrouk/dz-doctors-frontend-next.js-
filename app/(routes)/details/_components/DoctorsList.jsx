
'use client'
import { getDoctors } from "@/app/_utils/GlobalApi";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { useEffect, useState } from "react";

function DoctorsList({router}) {
    const [doctors, setDoctors] = useState([]);
    useEffect(
        () => {
            getDoctors()
                .then(response => {
                    setDoctors(response.data.data)
                })
                .catch(error => console.log(error))
        },

        [],);
    return (

        <ScrollArea className="w-full  h-fit rounded-md border p-9  bg-white border-blue-300 shadow-lg ">

            <h1 className="mb-4 text-lg font-medium leading-none">Doctors</h1>
            {doctors.map((doctor, index) => (
                < >
                    <div key={index}  onClick={()=>{router.push(`/details/${doctor.id}`)}} className="grid  grid-cols-2 cursor-pointer  justify-around items-center hover:bg-blue-200 rounded-lg">
                        <img src={doctor.attributes.Image.data.attributes.url} className=" w-16 h-116 rounded-full  bg-white border border-blue-300" />
                        <div className=" grid  h-fit">
                            {doctor.attributes.Name}
                            <span className="text-gray-600">{doctor.attributes.category.data.attributes.Name}</span>

                        </div>
                    </div>
                    <Separator className="my-2" />
                </>
            ))}

        </ScrollArea>

    )
}

export default DoctorsList
