import { FaExchangeAlt } from 'react-icons/fa'
import { countries } from '@/constants'

import TranslateArea from '@/components/TranslateArea'

const page = ({ searchParams }: { searchParams: { languageFrom: string, languageTo: string } }) => {

  return (
    <main className="p-12 bg-gray-200 text-black">
        <p className='capitalize bg-green-600 text-white font-semibold text-lg w-fit p-2 rounded-lg'>Translate your text</p>
        <div className='p-2 mt-4'>       
          <h1 className='text-5xl text-blue-900 font-bold'>Translate</h1>
          <div className="p-6 mt-4 bg-white rounded-lg">
            <TranslateArea searchParams={searchParams}  />               
          </div>
        </div>
    </main>
  )
}

export default page