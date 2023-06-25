import { Words } from '@/types/types'
import { fetchSynonymOrAntonyms, toUpperCase } from '@/utils'

interface CardThesaurus {
  word: string
} 

const CardThesaurus = async ({ word }: CardThesaurus) => {
  const antonymsWords = await fetchSynonymOrAntonyms(word, "antonyms")
  const synonymsWords = await fetchSynonymOrAntonyms(word, "synonyms")
    
  return (
    <div className='bg-white p-6 mt-4'>
        <h1 className='text-4xl sm:text-5xl text-blue-900 font-bold'>Thesaurus</h1>
        <div className='grid sm:grid-cols-2 gap-4 rounded-lg mt-2'>
            <div>
                <h1 className='text-3xl font-bold mb-2'>Synonyms</h1>
                <div className='grid sm:grid-cols-2 sm:gap-x-2'>
                    {synonymsWords.synonyms.length !== 0
                        ? (
                            synonymsWords.synonyms.map((item: string, idx: number) => (
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
            <div>
                <h1 className='text-3xl font-bold'>Antonyms</h1>               
                <div className='grid sm:grid-cols-2 sm:gap-x-2'>
                    {antonymsWords.antonyms.length !== 0
                        ? (
                            antonymsWords.antonyms.map((item: string, idx: number) => (
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
        </div>
    </div>
  )
}

export default CardThesaurus