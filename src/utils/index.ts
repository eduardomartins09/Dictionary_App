import { FilterProps, FilterTranslatedProps } from "@/types/types"

const API_KEY = process.env.API_KEY

const headers = {
    'X-RapidAPI-Key': `${API_KEY}`,
    'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
}

export async function fetchWord(filters: FilterProps) {
    const { word } = filters

    const response = await fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}`, {
        headers: headers,
    })

    try {
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
    }
}

export async function fetchSynonymOrAntonyms(word: string, type: string) {
    const response = await fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/${type}`, {
        headers: headers,
    })

    try {
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
    }
}

export async function fetchExamples(word: string) {
    const response = await fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/examples`, {
        headers: headers,
    })

    try {
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
    }
}

export async function fetchRandomWord() {
    const response = await fetch(`https://wordsapiv1.p.rapidapi.com/words/?random=true`, {
        headers: headers,
    })

    try {
        const result = await response.json()
        return result.word
    } catch (error) {
        console.error(error)
    }
}

export async function fetchTranslatedText(filters: FilterTranslatedProps) {
    const url = 'https://text-translator2.p.rapidapi.com/translate'

    const { languageFrom, languageTo, textToBeTranslated } = filters

    if (languageFrom === languageTo) return textToBeTranslated
    if (textToBeTranslated === "") return "Enter some text..."

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '4c1595f45cmshc5c5767175c3b4dp14aecajsn0d4f507867ca',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        },
        body: new URLSearchParams({
            source_language: `${languageFrom}`,
            target_language: `${languageTo}`,
            text: `${textToBeTranslated}`
        })
    }
    
    try {
        const response = await fetch(url, options)
        const result = await response.json()
        return result.data.translatedText
    } catch (error) {
        console.error(error)
    }
}

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search)

    searchParams.set(type, value)
   
    const newPathname = `${window.location.pathname}?${searchParams.toString()}` 

    return newPathname
}

export const toUpperCase = (word: string | object) => {
    if (typeof word === "string") {
      return word[0].toUpperCase() + word.substr(1) + "."
    }
  
    if (typeof word === "object") {
        return word.toString()[0].toUpperCase() + word.toString().substr(1) + "."
    }
}
  
