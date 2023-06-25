import Image from 'next/image'

import CardDefinition from '@/components/CardDefinition'
import CardExamples from '@/components/CardExamples'
import CardThesaurus from '@/components/CardThesaurus'

import { fetchWord } from '@/utils'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default async function Home({ searchParams }: { searchParams: { search: string | undefined } }) {
  const wordData = await fetchWord({
    word: searchParams.search || 'wind'
  })

  const isNotDataEmpty = wordData

  return (
    <main className="p-12 bg-gray-200 text-black">
      {searchParams.search === undefined && (
        <p className='capitalize bg-green-600 text-white font-semibold text-lg w-fit p-2 rounded-lg'>Word of the day</p>
      )}
      {searchParams.search !== undefined && (
        <p className='capitalize bg-green-600 text-white font-semibold text-lg w-fit p-2 rounded-lg'>Word result</p>
      )}
      {isNotDataEmpty && (
        <>
          <div className='grid sm:grid-cols-2 gap-4 rounded-lg mt-2'>        
            <CardDefinition 
              word={wordData?.word !== undefined ? wordData?.word  : "This word does not exist"} 
              pronunciation={wordData?.pronunciation?.all !== undefined ? wordData?.pronunciation.all : "No Results Found"}  
              results={wordData?.results} 
            />
            <CardExamples 
              word={wordData?.word !== undefined ? wordData?.word  : "This word does not exist"} 
            />
          </div>       
          <div>
            <CardThesaurus 
              word={wordData?.word !== undefined ? wordData?.word  : "This word does not exist"} 
            />
          </div>
        </>
      )}    
    </main>
  )
}
