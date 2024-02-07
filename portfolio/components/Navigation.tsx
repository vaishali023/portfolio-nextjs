"use client";
import { NavLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Transition from './Transition';
import { Socials } from '@/constants'
import Image from 'next/image'

const Navigation = () => {
    const [isRouting, setIsRouting] = useState(false);
    const path = usePathname();
    const [prevPath, setPrevPath] = useState("/");

    useEffect(() => {
        if(prevPath !== path) {
             setIsRouting(true);
        }
    },[path, prevPath]);

   useEffect(() => {
    if(isRouting) {
        setPrevPath(path);
        const timeout = setTimeout(() => {
            setIsRouting(false)
        }, 1200)
        return() => clearTimeout(timeout)
    }
   },[isRouting])

  return (
    <div className='fixed top-0 right-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20'>
    {/* Left Section */}
    <div className='flex flex-row gap-3 items-center'>
        <div className='relative'></div>
        <h1 className='text-white text-[25px] font-semibold'>Vaishali</h1>
    </div>

    {/* Right Section */}
    <div className='flex flex-row gap-3 items-center'>
        <div style={{ right: '5%' }} className='absolute z-[50] right-0
         -bottom-20 w-[50%] md:w-[20%] max-h-[100px] rounded-full 
         flex justify-between items-center  py-7'>
            {isRouting && <Transition />}
            {NavLinks.map((nav) => (
                <Link key={nav.name} href={nav.link} className='mb-16 pl-4 min-w-[20%]'>
                    <nav.icon className={`w-[24px] h-[24px] ${path === nav.name ? 'text-purple-800' : 'text-white'}`} />
                </Link>
            ))}
        </div>
    </div>
</div>



  )
}

export default Navigation