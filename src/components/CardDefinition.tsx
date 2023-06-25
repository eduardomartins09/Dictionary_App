import { Words } from '@/types/types'
import { toUpperCase } from '@/utils'

interface CardProps {
  word: string
  pronunciation: string
  results: Words[]
}

const CardDefinition = ({ word, pronunciation, results }: CardProps) => {
  return (
    <div className='bg-white p-6'>
        <h1 className='text-5xl text-blue-900 font-bold'>{word}</h1>
        <p className='my-2 font-bold'>Pronunciation: <span className='text-lg text-blue-900 font-medium'>/{pronunciation}/</span></p>
        {results !== undefined 
          ? ( 
            results.map((item, idx) => (
              <div key={idx}>
                <p className='text-lg'>{idx+1}. {toUpperCase(item.definition)} <span className="border-2 border-green-600 px-2 rounded-xl">{item.partOfSpeech}</span></p>                
              </div>        
            ))
          )
          : (
            <p>No Results Found</p>
          )
        }        
    </div>
  )
}

export default CardDefinition