import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

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
    return (
        <header className='grid grid-cols-4 items-center justify-around shadow-sm p-2'>
            <div className='grid grid-cols-2 col-span-3 items-center'>
                <img src='./logo.svg' alt='logo' width={50} height={50} />

                <ul className='sm:grid grid-flow-col justify-between  hidden'>
                    {Menu.map((item, index) => (
                        <Link href={item.path}>
                            <li key={item.id} className='hover:text-blue-500 hover:scale-125 transition-all ease-in-out cursor-pointer'>{item.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <Button variant="outline" className='max-w-20 justify-self-end'>Button</Button>
        </header>
    );
}

export default Header;
