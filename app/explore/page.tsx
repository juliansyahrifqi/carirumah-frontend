"use client"

import React, { Fragment, useState } from 'react'
import InputSearch from '../components/Input/Search'
import InputSelect from '../components/Input/Select'
import InputSwitch from '../components/Input/Switch'
import CardHome from '../components/Card/CardHome'
import Image from 'next/image'
import House1 from "../../public/hero/bg-hero-item-1.jpg"
import { RxCross2 } from "react-icons/rx";
import { MdLocationOn } from 'react-icons/md'

import BedIcon from "../../public/icon/bed.svg";
import Link from 'next/link'

const price = [
  { id: 1, name: 'Price'},
  { id: 2, name: '< Rp. 500.000.000'},
]

const type = [
  { id: 1, name: 'Type'},
  { id: 2, name: 'Modern'}
]

const houseData = [
  {
    id: 1,
    location: 'Cibiru, Bandung',
    name: 'Mahaba Residence',
    type: '45/80',
    image: '/image/home-1.png',
    facilities: [
      { icon: '/icon/bed.svg', name: '2 Beds' },
      { icon: '/icon/bath.svg', name: '2 Bath' },
      { icon: '/icon/size.svg', name: 'Lt. 150m2' },
    ]
  },
  {
    id: 2 ,
    location: 'Cibiru, Bandung',
    name: 'Cikoneng Indah',
    type: '45/80',
    image: '/image/home-2.png',
    facilities: [
      { icon: '/icon/bed.svg', name: '2 Beds' },
      { icon: '/icon/bath.svg', name: '2 Bath' },
      { icon: '/icon/size.svg', name: 'Lt. 90m2' },
    ]
  },
  {
    id: 3,
    location: 'Cibiru, Bandung',
    name: 'Dago Residence ',
    type: '45/80',
    image: '/image/home-3.png',
    facilities: [
      { icon: 'icon/bed.svg', name: '2 Beds' },
      { icon: 'icon/bath.svg', name: '2 Bath' },
      { icon: 'icon/size.svg', name: 'Lt. 100m2' },
    ]
  },
  {
    id: 4,
    location: 'Cibiru, Bandung',
    name: 'Mahaba Residence',
    type: '45/80',
    image: '/image/home-1.png',
    facilities: [
      { icon: '/icon/bed.svg', name: '2 Beds' },
      { icon: '/icon/bath.svg', name: '2 Bath' },
      { icon: '/icon/size.svg', name: 'Lt. 150m2' },
    ]
  },
  {
    id: 5 ,
    location: 'Cibiru, Bandung',
    name: 'Cikoneng Indah',
    type: '45/80',
    image: '/image/home-2.png',
    facilities: [
      { icon: '/icon/bed.svg', name: '2 Beds' },
      { icon: '/icon/bath.svg', name: '2 Bath' },
      { icon: '/icon/size.svg', name: 'Lt. 90m2' },
    ]
  },
  {
    id: 6,
    location: 'Cibiru, Bandung',
    name: 'Dago Residence ',
    type: '45/80',
    image: '/image/home-3.png',
    facilities: [
      { icon: 'icon/bed.svg', name: '2 Beds' },
      { icon: 'icon/bath.svg', name: '2 Bath' },
      { icon: 'icon/size.svg', name: 'Lt. 100m2' },
    ]
  },
  {
    id: 7,
    location: 'Cibiru, Bandung',
    name: 'Mahaba Residence',
    type: '45/80',
    image: '/image/home-1.png',
    facilities: [
      { icon: '/icon/bed.svg', name: '2 Beds' },
      { icon: '/icon/bath.svg', name: '2 Bath' },
      { icon: '/icon/size.svg', name: 'Lt. 150m2' },
    ]
  },
  {
    id: 8,
    location: 'Cibiru, Bandung',
    name: 'Cikoneng Indah',
    type: '45/80',
    image: '/image/home-2.png',
    facilities: [
      { icon: '/icon/bed.svg', name: '2 Beds' },
      { icon: '/icon/bath.svg', name: '2 Bath' },
      { icon: '/icon/size.svg', name: 'Lt. 90m2' },
    ]
  },
  {
    id: 9,
    location: 'Cibiru, Bandung',
    name: 'Dago Residence ',
    type: '45/80',
    image: '/image/home-3.png',
    facilities: [
      { icon: 'icon/bed.svg', name: '2 Beds' },
      { icon: 'icon/bath.svg', name: '2 Bath' },
      { icon: 'icon/size.svg', name: 'Lt. 100m2' },
    ]
  }
]

export default function Explore() { 
  const [enabled, setEnabled] = useState(false);
  const [showDetail, setShowDetail] = useState({
    status: false,
    id: 0,
  })

  const handleEnabled = () => {
    setEnabled(!enabled);
    setShowDetail({ status: false, id: 0});
  }

  const handleShowDetail = (id: number) => {
    setShowDetail({ status: true, id: id});
  }

  const handleCloseShowDetail = () => {
    setShowDetail({ status: false, id: 0});
  }

  return (
    <main>
      <div className='px-6 md:px-12 py-7'>
        <InputSearch />
      </div>

      <section id="explore-header" className='px-6 md:px-12 py-2'>
        <div>
          <p className='font-sfpro'>
            <span className='text-4xl font-bold text-black font-sfpro'>
              92 Results {""}
            </span>
            in Bandung City
          </p>
        </div>

        <div className='flex justify-between'>
          <div className='flex mt-5 gap-4'>
            <InputSelect data={price} />

            <InputSelect data={type} />
          </div>

          <div className='flex mt-5 gap-4'>
            <InputSwitch enabled={enabled} handleEnabled={handleEnabled} />

            <InputSelect data={type} />
          </div>
        </div>
      </section>

      <div className='relative mt-5 w-full h-[220vh]'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89623.97302445515!2d107.58273621493156!3d-6.907644539912287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Kota%20Bandung%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1684769232969!5m2!1sid!2sid" className='w-full h-full' style={{border: "0"}} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe> 

        <div className='flex absolute top-0 bottom-0 w-full'>
          <div className={`bg-white w-8/12 ${enabled ? '-translate-x-full' : 'translate-x-0'} transition-transform ease-in-out duration-500 rounded-tr-3xl rounded-br-3xl z-20 shadow-lg my-8`}>
            <div className='grid grid-cols-3 gap-4 p-8'>
              {houseData.map((data) => (
                <CardHome key={data.id} data={data} handleShowDetail={handleShowDetail} showDetail={showDetail}/>
              ))}
            </div>
          </div>

          <div className={`bg-white w-[30%] ${showDetail.status ? 'translate-x-0' : '-translate-x-[100vw]'} transition-transform ease-in-out duration-500 my-44 rounded-tr-3xl rounded-br-3xl z-10 relative ${enabled ? 'hidden' : 'block'}`}>
            <div className='bg-[#414141] p-2 absolute top-2 right-2 rounded-full cursor-pointer' onClick={handleCloseShowDetail}>
              <RxCross2 className='text-white'/>
            </div>

            <Image src={House1} alt="House 1" className='w-full h-96 object-cover rounded-tr-3xl'/>

            <div className='grid grid-cols-5 gap-1 overflow-x-scroll mt-1'>
              <Image src={House1} alt="House 1" className='w-20 h-20 object-cover'/>
              <Image src={House1} alt="House 1" className='w-20 h-20 object-cover'/>
              <Image src={House1} alt="House 1" className='w-20 h-20 object-cover'/>
              <Image src={House1} alt="House 1" className='w-20 h-20 object-cover'/>
              <Image src={House1} alt="House 1" className='w-20 h-20 object-cover'/>
            </div>

            <div className='p-6'>
              <div className='flex items-center justify-between'>
                <div className='flex flex-col gap-1'>
                  <h4 className='text-[#222222] font-sfpro text-2xl font-semibold'>Mahaba Residence</h4>

                  <div className='flex gap-1 items-center'>
                    <MdLocationOn />
                    <span className='font-sfpro font-light'>Cibiru, Kota Bandung</span>
                  </div>
                </div>

                <p className='font-medium text-[#2E61E5] text-xl'>Rp. 400jt</p>
              </div> 

              <div className='description mt-4'>
                <p className='font-sfpro text-[#626262] text-lg'>
                  Salah satu perumahan yang terletak di kaki Gunung Manglayang Bandung, dengan suasana yang sejuk dan asri.
                </p>

                <div className='mt-4'>
                  <p className='font-sfpro text-[#626262] text-md'>Dp Start From: 10jt</p>
                  <p className='font-sfpro text-[#626262] text-md'>Cicilan Tenor: 4jt/month x 120</p>
                </div>
              </div>

              <div className='mt-8 flex justify-around flex-wrap gap-8'>
                <div className='flex flex-col gap-1 items-center'>
                  <div className='bg-[#424242] p-4 rounded-full'>
                    <Image src={BedIcon} alt='Bed Icon' height={20} width={20} />
                  </div>
                  <p className='font-sfpro text-[#222222]'>2 Beds</p>
                </div>

                <div className='flex flex-col gap-1 items-center'>
                  <div className='bg-[#424242] p-4 rounded-full'>
                    <Image src={BedIcon} alt='Bed Icon' height={20} width={20} />
                  </div>
                  <p className='font-sfpro text-[#222222]'>2 Beds</p>
                </div>

                <div className='flex flex-col gap-1 items-center'>
                  <div className='bg-[#424242] p-4 rounded-full'>
                    <Image src={BedIcon} alt='Bed Icon' height={20} width={20} />
                  </div>
                  <p className='font-sfpro text-[#222222]'>2 Beds</p>
                </div>

                <div className='flex flex-col gap-1 items-center'>
                  <div className='bg-[#424242] p-4 rounded-full'>
                    <Image src={BedIcon} alt='Bed Icon' height={20} width={20} />
                  </div>
                  <p className='font-sfpro text-[#222222]'>2 Beds</p>
                </div>

                <div className='flex flex-col gap-1 items-center'>
                  <div className='bg-[#424242] p-4 rounded-full'>
                    <Image src={BedIcon} alt='Bed Icon' height={20} width={20} />
                  </div>
                  <p className='font-sfpro text-[#222222]'>2 Beds</p>
                </div>

                <div className='flex flex-col gap-1 items-center'>
                  <div className='bg-[#424242] p-4 rounded-full'>
                    <Image src={BedIcon} alt='Bed Icon' height={20} width={20} />
                  </div>
                  <p className='font-sfpro text-[#222222]'>2 Beds</p>
                </div>

                <div className='flex flex-col gap-1 items-center'>
                  <div className='bg-[#424242] p-4 rounded-full'>
                    <Image src={BedIcon} alt='Bed Icon' height={20} width={20} />
                  </div>
                  <p className='font-sfpro text-[#222222]'>2 Beds</p>
                </div>
              </div>

              <div className='mt-8'>
                <Link href="/home/test123">
                  <p className='text-[#2E61E5] font-sfpro text-center'>
                    See Details {">"}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
