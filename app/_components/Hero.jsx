import React from 'react'
import { Button } from "@/components/ui/button";

function Hero() {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">

                    <img
                        alt=""
                        src="doctors_avatar.jpg"
                        className=" justify-self-center inset-0  min-w-72 max-w-full object-cover rounded-3xl  h-36    sm:h-80 lg:order-last lg:h-96 "
                    />


                    <div className="lg:py-24  md:block grid grid-cols-1 justify-center ">
                        <h2 className="text-3xl font-bold sm:text-4xl text-center md:text-left">Dz doctors </h2>

                        <p className="mt-4 text-gray-600 text-center md:text-left">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                            eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
                            quidem quam repellat.
                        </p>

                        {/* <a
                            href="#"
                            className="mt-8 inline-block rounded bg-blue-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Get Started Today
                       </a>*/}

                        <Button variant="outline" className='w-52 min-w-20 mt-1.5 justify-self-center'>more . . .</Button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero
