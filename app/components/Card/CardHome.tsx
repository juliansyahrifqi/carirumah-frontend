"use client"

import Image from 'next/image'
import React from 'react'
import { MdLocationOn } from "react-icons/md";

export default function CardHome({ data, handleShowDetail, showDetail}: any) {
  return (
    <div className={`relative rounded-3xl bg-white shadow-xl cursor-pointer ${showDetail.id === data.id ? 'scale-[103%] transition-transform ease-in-out duration-500': ''}`} onClick={() => handleShowDetail(data.id)}>
      <Image src={data.image} alt="Image 1" height={400} width={400} className='w-full object-cover'/>

      <div className='flex flex-col p-4'>
        <div className='flex gap-1 items-center'>
          <MdLocationOn />
          <p className='text-sm font-light'>{data.location}</p>
        </div>

        <h4 className='font-semibold font-sfpro text-xl'>{data.name}</h4>

        <p className='text-[#919191] font-sfpro text-sm'>
          Type{" "}
          <span className='text-[#222222] font-sfpro font-medium'>
            {data.type}
          </span>
        </p>

        <div className='flex items-center gap-2 flex-wrap mt-4'>
          {data.facilities.map((facility: any, index: number) => (
            <div className='flex gap-2 items-center' key={index}>
              <div className='bg-[#424242] p-2 rounded-full'>
                <Image src={facility.icon} alt='Bed Icon' height={15} width={15} />
              </div>
              <p className='font-sfpro'>{facility.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
