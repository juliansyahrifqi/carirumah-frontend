import React from 'react'
import { BiSearch } from 'react-icons/bi'

export default function InputSearch() {
  return (
    <label className="relative">
      <span className="sr-only">Search</span>
      <span className="absolute inset-y-0 right-3 flex items-center pl-2">
        <BiSearch className='text-bold' />
      </span>
      <input className="placeholder:text-slate-400 placeholder:text-md w-1/4 block ml-auto border-2 border-[#AFAFAF] rounded-xl py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm text-left bg-[#EBEBEB]" placeholder="Search" type="text" name="search"/>
    </label>
  )
}
