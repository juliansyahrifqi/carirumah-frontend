import Image from 'next/image'
import React from 'react'
import Logo from "/public/logo.svg";
import Button from '../Button';

export default function HeroPrimaryCard() {
  return (
    <div className="flex flex-col justify-between bg-[url('/hero/bg-hero-primary.jpg')] bg-no-repeat bg-cover bg-center rounded-xl p-10 w-full h-full">
      <div>
        <div className='flex items-center gap-2'>
          <svg width="20" height="21" viewBox="0 0 43 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38.6001 17.225L42.9606 21.5855L39.9396 24.6065L21.5001 6.167L3.06055 24.6065L0.0395508 21.5855L21.5001 0.125L32.9001 11.525V5.825H38.6001V17.225ZM21.5001 10.214L38.6001 27.2855V44.3H4.40005V27.2855L21.5001 10.214ZM27.2001 41.45V27.2H15.8001V41.45H27.2001Z" fill="none" className='fill-hero-primary'/>
          </svg>

          <p className='text-hero-primary font-medium'>Cari Rumah</p>
        </div>

        <h2 className='text-4xl text-hero-primary mt-4'>
          Discover <br />
          your <span className='font-bold'>dream house</span>
        </h2>
      </div>

      <div className='mt-auto'>
        <button className='px-8 py-4 rounded-lg font-semibold text-xl bg-[#EFEFEFE0]'>
          Check Product
        </button>
      </div>
    </div>
  )
}
