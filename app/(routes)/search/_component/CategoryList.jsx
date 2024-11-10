'use client'
import React, { useEffect, useState } from 'react'
import { getCategories } from '@/app/_utils/GlobalApi'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function CategoryList() {
    const categoryName=usePathname().split('/')[2].replaceAll('%20','').toUpperCase();
    //console.log(categoryName)
    //console.log(usePathname())
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
         
        <Command className='font-medium bg-white  h-fit pb-80'>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList className='h-fit  overflow-visible' >
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions" className=''  >
                    {
                        categories.length === 0 ?
                            (
                                [1, 2, 3, 4].map((value, index) => (
                                    <div key={index} className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5 animate-pulse m-8"></div>
                                ))
                            )
                            :
                            (
                                categories.map((item, index) => (


                                    <CommandItem key={index}  >
                                        <Link href={`${item.attributes.Name}`} className={`p-2 text-blue-grey-900 ${categoryName==(item.attributes.Name).replace(/\s/g, '').toUpperCase()&&'text-blue-600 text-lg w-full rounded-lg'}`}  >

                                            {item.attributes.Name}
                                        </Link>
                                    </CommandItem>
                                ))
                            )
                    }
                </CommandGroup>
                <CommandSeparator />

            </CommandList>
        </Command>
      
    )
}

export default CategoryList
