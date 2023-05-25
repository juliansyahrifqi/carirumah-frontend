"use client"

import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function InputSwitch({ enabled, handleEnabled }: any) {
  return (
    <div className='flex items-center gap-2'>
      <Switch
        checked={enabled}
        onChange={handleEnabled}
        className={`${enabled ? 'bg-[#38CA46]' : 'bg-slate-300'}
          relative inline-flex h-[34px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Map View</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-10' : 'translate-x-0'}
            pointer-events-none inline-block h-[30px] w-[30px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <p className='font-semibold font-sfpro text-xl'>Map View</p>
    </div>
  )
}
