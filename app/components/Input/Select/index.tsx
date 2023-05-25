"use client"

import React, { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { GoChevronDown } from 'react-icons/go'

export default function InputSelect({ data }: any) {
  const [selected, setSelected] = useState(data[0])

  return (
    <div className="w-40 z-20">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm border-2 border-[#A8A8A8]">
            <span className="block truncate font-sfpro text-lg">{selected.name} </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <GoChevronDown
                className="h-5 w-5 text-black"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-md text-base">
              {data.map((d: any, index: number) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-4 pr-4 text-[#494949] font-sfpro ${
                      active ? 'bg-[#DEDEDE]' : 'bg-white'
                    }`
                  }
                  value={d}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-bold' : 'font-normal'
                        }`}
                      >
                        {d.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
