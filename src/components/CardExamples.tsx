import { Words } from '@/types/types'
import { fetchExamples, toUpperCase } from '@/utils'

interface CardProps {
  word: string
}

const CardExamples = async ({ word }: CardProps) => {
  const exampleWords = await fetchExamples(word)

  return (
    <div className='bg-white p-6'>
        <h1 className='text-2xl text-gray-700 font-bold'>Exemples</h1>
        <div>
          {exampleWords.examples.length !== 0
            ? (
              exampleWords.examples.map((item: string, idx: number) => (                                                   
                <p key={idx} className='text-lg'>
                  {idx+1}. {toUpperCase(item)}
                </p>                                
              ))
            )
            : (
              <p>No Results Found</p>
            )
          }      
        </div>
    </div>
  )
}

export default CardExamples