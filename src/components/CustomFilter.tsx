"use client"

import Image from "next/image"
import { Fragment, useState } from "react"
import { useRouter } from "next/navigation"
import { Listbox, Transition } from "@headlessui/react"
import { CustomFilterProps } from "@/types/types"
import { updateSearchParams } from "@/utils"

const CustomFilter = ({ title, options, indexOptions }: CustomFilterProps) => {
  const router = useRouter()
  const [selected, setSelected] = useState(options[indexOptions])
 
  const handleUpdateParams = (e: { title: string, value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase())

    router.push(newPathName)
  }

  return (
    <div className="w-fit mx-auto sm:mx-0">
        <Listbox
          value={selected}
          onChange={(e) => {setSelected(e), handleUpdateParams(e)}}
        >
          <div className="relative w-fit z-10">
            <Listbox.Button className="relative w-full min-w-[127px] flex justify-between items-center cursor-default rounded-lg bg-white py-2 px-3 text-left shadow-md sm:text-sm border">
              <span className="block truncate">{selected.title}</span>
              <Image 
                src="/chevron-up-down.svg"
                width={20}
                height={20}
                className="ml-4 object-contain"
                alt="chevron up down"
              />
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-32 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {options.map((option) => (
                  <Listbox.Option 
                    key={option.title}
                    value={option}
                    className={({ active }) => `relative cursor-default select-none py-2 px-4 ${active ? 'text-blue-900' : 'text-gray-900'}`}
                  >
                    {({ selected }) => (
                      <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                        {option.title}
                      </span>
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

export default CustomFilter