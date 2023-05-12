import Image from 'next/image'
import React from 'react'
import image from "/public/hero/bg-hero-secondary.jpg";
import Button from '../Button';

export default function HeroSecondaryCard() {
  return (
    <div className="relative max-h-52 md:max-h-64 rounded-xl transition ease-out duration-300 hover:scale-105">
        <Image src={image} alt="Bg Hero" className='h-full object-cover rounded-xl'/>

        <p className='absolute font-medium text-2xl text-white top-0 px-10 py-6'>Best Sales</p>
    </div>
  )
}
