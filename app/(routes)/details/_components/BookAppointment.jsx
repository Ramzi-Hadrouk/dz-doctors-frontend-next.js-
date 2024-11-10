"use client"
import { bookAppointment, sendEmail } from "@/app/_utils/GlobalApi"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { useToast } from "@/components/ui/use-toast"


import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
 import { useState, useCallback } from 'react'
const timeList = [
    { time: "08:00" },
    { time: "08:30" },
    { time: "09:00" },
    { time: "09:30" },
    { time: "10:00" },
    { time: "10:30" },
    { time: "11:00" },
    { time: "11:30" },
    { time: "12:00" },
    { time: "12:30" },
    { time: "13:00" },  // 1 PM
    { time: "13:30" },
    { time: "14:00" },  // 2 PM
    { time: "14:30" },
    { time: "15:00" },  // 3 PM
    { time: "15:30" },
    { time: "16:00" },  // 4 PM
    { time: "16:30" },
    { time: "17:00" },  // 5 PM
    { time: "17:30" },
    { time: "18:00" },  // 6 PM
    { time: "18:30" },
    { time: "19:00" },  // 7 PM
    { time: "19:30" },
    { time: "20:00" },  // 8 PM
    { time: "20:30" },
    { time: "21:00" },  // 9 PM
    { time: "21:30" },
    { time: "22:00" },  // 10 PM
    { time: "22:30" },
    { time: "23:00" },  // 11 PM
    { time: "23:30" },
    { time: "00:00" },  // Midnight
];

function BookAppointment({ doctorId }) {
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const { user } = useKindeBrowserClient();
    const { toast } = useToast();

    const handleChangeTime = useCallback((event) => {
        setTime(event.target.value);
    }, []);

    const saveBooking = useCallback(async () => {
        if (!date || !time) {
            toast({
                variant: "destructive",
                description: "Please select both date and time.",
            });
            return;
        }

        try {
            const formattedDate = date.toISOString().split('T')[0];
            const data = {
                data: {
                    Name: `${user.given_name} ${user.family_name}`,
                    Email: user.email,
                    Date: formattedDate,
                    Time: `${time}:00`,
                    Note: '',
                    Doctor: doctorId
                }
            };

            await bookAppointment(data);
            await sendEmail(data)
            toast({
                description: <p className="text-lg font-bold text-green-700">Booked Confirmation Sent on Email</p>,
            });
        } catch (error) {
            const errorMessage = error.response?.data?.error?.details?.errors?.[0]?.message || "Something went wrong. Try again.";
            const errorPoint = error.response?.data?.error?.details?.errors?.[0]?.path || "No additional details.";

            toast({
                variant: "destructive",
                description: (
                    <div>
                        <p className="text-lg font-bold">{errorMessage}</p>
                        <pre className="text-lg overflow-x-auto max-h-32 font-bold">{errorPoint}</pre>
                    </div>
                ),
            });
        }
    }, [date, time, user, doctorId, toast]);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="px-10 py-3">Book Now</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Book an Appointment</DialogTitle>
                    <DialogDescription>
                        Choose your preferred date and time for the appointment.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <label htmlFor="date" className="text-lg">Date:</label>
                        <Calendar
                            id="date"
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border grid  justify-center bg-blue-50"
                            disabled={(day) => day < new Date()}
                        />
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="time-select" className="text-lg">Time:</label>
                        <select
                            id="time-select"
                            onChange={handleChangeTime}
                            value={time || ""}
                            className="text-lg px-3 py-2 rounded-md border  bg-blue-50"
                        >
                            <option value="" disabled>Select a time</option>
                            {timeList.map(({ time }, index) => (
                                <option key={index} value={time}>{time}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline" className="bg-red-500 text-white">Cancel</Button>
                    </DialogClose>
                    <Button onClick={saveBooking} disabled={!date || !time}>
                        Book Appointment
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default BookAppointment