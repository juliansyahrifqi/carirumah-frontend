import Image from 'next/image'
import React from 'react'

interface HeroCardItemProps {
  image: string;
  title: string;
}

export default function HeroCardItem(props: HeroCardItemProps) {
  const { image, title } = props;

  return (
    <div className="relative max-h-52 md:max-h-64 rounded-xl w-full transition ease-out duration-300 hover:scale-105">
        <Image src={image} width={250} height={300} alt="Bg Hero" className='w-full h-full object-cover rounded-xl'/>

        <p className='absolute font-medium text-lg md:text-2xl text-white bottom-0 px-4 md:px-10 py-4 md:py-6'>
          { title }
        </p>
    </div>
  )
}
