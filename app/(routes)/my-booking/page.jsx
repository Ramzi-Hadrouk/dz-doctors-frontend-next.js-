"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingList from "./_components/BookingList"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { useState ,useEffect} from "react";
import{getBookingList} from "@/app/_utils/GlobalApi"

function MyBooking() {
  const { user } = useKindeBrowserClient() ;
  const{bookings,setBookings}=useState([]);
  console.log(user?.email)
  useEffect(() => {
    const fetchBookings = async () => {
        try {
            const response = await getBookingList(user?.email);
            setBookings(response.data.data);
            console.log("Booking:", bookings);
        } catch (error) {
            console.error('Error fetching bookings:', error);
        }
    };

    if (user?.email) { 
      fetchBookings();
    }
}, [user, bookings]);

  return (
    <div className="w-full">
     <h1 className="font-bold text-2xl m-4"> MyBooking</h1>
      <Tabs defaultValue="account" className=" w-full   bg-white rounded-lg p-5">
        <TabsList className="w-full justify-start   border-solid border bg-white border-blue-300      ">
          <TabsTrigger value="Upcoming"  >Upcoming</TabsTrigger>
          <TabsTrigger value="Expired"  >Expired</TabsTrigger>
        </TabsList>
        <TabsContent value="Upcoming">  <BookingList/> </TabsContent>
        <TabsContent value="Expired">Change your password here. <BookingList/> </TabsContent>
      </Tabs>
    </div>
  )
}

export default MyBooking
