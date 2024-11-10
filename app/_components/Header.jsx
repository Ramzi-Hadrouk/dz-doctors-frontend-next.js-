
'use client'
import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';
import { LogoutLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"





const Menu = [
    {
        id: 1,
        name: 'Home',
        path: '/'
    },
    {
        id: 2,
        name: 'Explore',
        path: '/'
    },
    {
        id: 3,
        name: 'Contact Us',
        path: '/contactus'
    },
];

function Header() {

    const { user } = useKindeBrowserClient();
    //console.log(user)

    return (
        <header className='grid grid-cols-4 items-center bg-white rounded-lg justify-around shadow-sm p-2 mb-10'>
            <div className='grid grid-cols-2 col-span-3 items-center'>
                <Link href={"/"}>
                <Image src='/dz_doctors.png' alt='logo' width={80} height={80} />
                </Link>
                <ul className='sm:grid grid-flow-col justify-between  hidden'>
                    {Menu.map((item, index) => (
                        <Link href={item.path} key={item.id}>
                            <li key={item.id} className='hover:text-blue-500 hover:scale-125 transition-all ease-in-out cursor-pointer'>{item.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            {!user ?
                <LoginLink className='max-w-20 justify-self-end' ><Button variant="outline" >Login</Button></LoginLink>
                :
                <div className=' justify-self-end w-fit ' >
                    <Popover   >
                        <PopoverTrigger className='w-16 text-center h-16  font-bold p-0     text-[1.8rem] rounded-full bg-blue-100 text-blue-500 '>{(user.given_name).charAt(0)}</PopoverTrigger>
                        <PopoverContent className='w-56 p-2 mt-2  mr-5 md:mr-24'>
                            <ul>
                                <li className=' hover:bg-blue-200 font-bold p-2 rounded-lg   '>  <Link href={'/'}>Profile</Link></li>
                                <li className=' hover:bg-blue-200 font-bold p-2 rounded-lg   '>  <Link href={'/my-booking'}>My Booking</Link></li>
                                <li className=' hover:bg-blue-200 font-bold p-2 rounded-lg  '> <LogoutLink  > Logout</LogoutLink> </li>
                            </ul>


                        </PopoverContent>
                    </Popover>


                </div>



            }


        </header>
    );
}

export default Header;
