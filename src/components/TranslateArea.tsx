"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { FaExchangeAlt } from 'react-icons/fa'

import { countries } from '@/constants'
import CustomFilter from '@/components/CustomFilter'
import { fetchTranslatedText } from '@/utils'

import CustomButton from './CustomButton'
import CustomTextArea from './CustomTextArea'

const TranslateArea = ({ searchParams }: { searchParams: { languageFrom: string, languageTo: string } }) => {
  const router = useRouter()
  const [textFrom, setTextFrom] = useState("")
  const [resultTextTo, setResultTextTo] = useState<string | undefined>("")

  const fetchTranslationData = async () => {
   const textTranslated = await fetchTranslatedText({ 
     languageFrom: searchParams.languageFrom,
     languageTo: searchParams.languageTo,
     textToBeTranslated: textFrom,
   })

   setResultTextTo(textTranslated)
  }

  const exchangeLanguages = () => {
    const pathTo = searchParams.languageTo
    const pathFrom = searchParams.languageFrom

    const searchParamsUrl = new URLSearchParams(window.location.search)

    searchParamsUrl.set('languageFrom', pathTo)
    searchParamsUrl.set('languageTo', pathFrom)
 
    const newPathname = `${window.location.pathname}?${searchParamsUrl.toString()}` 

    router.push(newPathname)
  }

  const findIndexParams = (fromTo: string) => {
    if (searchParams.languageFrom !== undefined && searchParams.languageTo !== undefined) {
        if (fromTo === "languageFrom") {
            const countryIndex = countries.filter(currentCountry => currentCountry.value === searchParams.languageFrom)
     
            return  countries.indexOf(countryIndex[0], 0)
        } else {
           const countryIndex = countries.filter(currentCountry => currentCountry.value === searchParams.languageTo)
           
           return countries.indexOf(countryIndex[0], 0)
        }
    } else {
        return 0
    }
  }

  return (
    <>
        <div className="rounded-md border-2 border-zinc-500">
            <div className="sm:flex border-b-2 border-zinc-500">
                <CustomTextArea 
                    value={textFrom} 
                    placeholderText={"Enter text"}
                    adicionalStyles={"border-none"} 
                    disabled={false}
                    onChange={(e) => setTextFrom(e.target.value)}
                />
                <CustomTextArea 
                    value={resultTextTo} 
                    placeholderText={"Translation"}
                    adicionalStyles={"px-4 border-t-2 sm:border-t-0 sm:border-l-2 border-zinc-500"} 
                    disabled={true}
                />
            </div>
            <ul className="mx-auto my-auto sm:flex items-center justify-around py-4 px-4">
                <li>
                    <CustomFilter
                        title="languageFrom"
                        options={countries}   
                        indexOptions={findIndexParams("languageFrom")}       
                    />
                </li>
                <li className='my-14 sm:mx-0 sm:my-0'>
                    <FaExchangeAlt 
                        size={25} 
                        className='cursor-pointer mx-auto sm:mx-0'
                        onClick={exchangeLanguages} 
                    />
                </li>
                <li>                           
                    <CustomFilter
                        title="languageTo"
                        options={countries}
                        indexOptions={findIndexParams("languageTo")}
                    />
                </li>
            </ul>
        </div>
        <CustomButton
            title="Translate Text"
            btnType='submit'
            containerStyles="w-full p-4 border-none outline-none mt-5  rounded-md bg-blue-900 hover:bg-blue-500"
            textStyles="text-white font-semibold text-xl"
            handleClick={fetchTranslationData}
        /> 
    </>
  )
}

export default TranslateArea