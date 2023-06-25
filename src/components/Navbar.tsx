"use client"

import Link from 'next/link'

import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

import { fetchRandomWord } from '@/utils'

import { AiOutlineSearch } from 'react-icons/ai'
import { FaBook } from 'react-icons/fa'
import { SiGoogletranslate } from 'react-icons/si'
import { BsTrash } from 'react-icons/bs'
import { CgSync } from 'react-icons/cg'

import CustomButton from './CustomButton'

const Navbar = () => {
  const [search, setSearch] = useState("")
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = async (type: string) => {
    if (type === "search" && search !== "") {
        updateSearchParams(search.toLowerCase())
        setSearch("")
    }

    if (type === "random") {
        const randomWord = await fetchRandomWord()
        updateSearchParams(randomWord)
        setSearch("")
    }
  }

  const updateSearchParams = (search: string) => {
    const searchParams = new URLSearchParams(window.location.search)

    if (search) {
      searchParams.set('search', search)
    } else {
      searchParams.delete('search')
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}` 

    router.push(newPathname)
  }

  const resetSearchParams = () => {
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.delete('search')
  } 

  return (
    <div className="px-12 py-8 w-full bg-banner bg-cover bg-[50%]">        
        <div className='sm:flex justify-between mb-4'>
            <div className='flex items-center gap-4'>
                <Link href="/" onClick={resetSearchParams} className='flex items-center gap-2 bg-gray-700 p-2 rounded-lg mb-4 sm:mb-0 hover:bg-blue-950'>
                    <span className='text-green-500'>
                        <FaBook size={25} />
                    </span>
                    <span className='text-sm sm:text-xl font-bold'>Home Dictionary</span>
                </Link>             
                <Link href="/translation?languageFrom=&languageTo=" className='flex items-center gap-2 bg-gray-700 p-2 rounded-lg mb-4 sm:mb-0 hover:bg-blue-950'>
                    <span className='text-green-500'>
                        <SiGoogletranslate size={25} />
                    </span>
                    <span className='text-sm sm:text-xl font-bold'>Translate Text</span>
                </Link>             
            </div>
            <CustomButton 
                title="Sign"
                containerStyles="bg-white text-blue-950 rounded-full min-w-full sm:min-w-[130px] py-2 px-6 outline-none hover:bg-blue-950 hover:text-white"
                textStyles="font-bold"            
            />    
        </div>
        {pathname !== "/translation" && (
            <div className='grid justify-center gap-4'>
                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extralight'>Search for a word, learn it forever.</h1>
                <div className='flex items-center'>    
                    <input 
                        type="text" 
                        value={search}
                        placeholder='type a word...' 
                        className='w-[95%] sm:w-full h-[52px] p-4 rounded-full text-lg font-semibold text-black border-4 border-gray-800' 
                        onChange={(e) => setSearch(e.target.value)}
                    />  
                    <div className='flex items-center'>
                        <AiOutlineSearch 
                            size={45} 
                            onClick={() => handleClick("search")}
                            className='absolute text-white bg-gray-600 py-2 rounded-full cursor-pointer ml-2' 
                        />               
                    </div>                        
                </div>
                <div className='flex justify-between '>
                    <CustomButton 
                        title="Delete Word"
                        containerStyles="flex items-center gap-2"
                        textStyles="flex items-center gap-2"
                        iconStyles="text-green-500"
                        icon={<BsTrash size={25} />}
                        handleClick={() => setSearch("")}
                    />
                    <CustomButton 
                        title="Random Word"
                        containerStyles="flex items-center gap-2"
                        textStyles="flex items-center gap-2"
                        iconStyles="text-green-500"
                        icon={<CgSync size={30} />}
                        handleClick={() => handleClick("random")}
                    />               
                </div>
            </div>
        )}
    </div>
  )
}

export default Navbar