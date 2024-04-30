"use client"
import DoctorLis from "@/app/_components/DoctorLis";
import { getDoctorsByCategory } from "@/app/_utils/GlobalApi";
import { useState, useEffect } from "react";

function Search(props) {
  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    // Fetch doctors by category
    getDoctorsByCategory(props.params.cname)
      .then(response => {
        console.log("API response:", response.data.data);
        console.log("doctorList:", doctorList);

        setDoctorList(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []); 

  return (
   
    <DoctorLis list={doctorList}  />
 
    
  );
}

export default Search;