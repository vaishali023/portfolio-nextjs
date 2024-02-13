"use client";

import { Socials } from '@/constants'
import Image from 'next/image'
import { NavLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Transition from './Transition';

const Navbar = () => {
  

  return (
    <div className='fixed bottom-10 right-0 z-[40] w-full h-[100px] bg-transparent flex justify-end items-end px-10 md:px-20'>
      <div className='flex flex-row gap-8 mb-2'>
        {Socials.map((social) => (
          <Image 
            key={social.name}
            src={social.src}
            alt={social.name}
            width={28}
            height={28}
          />
        ))}
      </div>
    </div>
  );
  
}

export default Navbar