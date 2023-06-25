import { MouseEventHandler } from "react"

export interface Words {
    definition: string
    partOfSpeech: string
    examples: string
    synonyms: string
    antonyms: string
}

export interface FilterProps {
    word?: string
}

export interface FilterTranslatedProps {
    languageFrom: string
    languageTo: string
    textToBeTranslated: string
}

export interface OptionProps {
    title: string
    value: string
}
  
export interface CustomFilterProps {
    title: string
    indexOptions: number
    options: OptionProps[]
}

export interface CustomButtonProps {
    isDisabled?: boolean
    btnType?: "button" | "submit"
    containerStyles?: string
    textStyles?: string
    title: string
    icon?: React.ReactNode
    iconStyles?: string
    handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface CustomTextAreaProps {
    value: string | undefined
    placeholderText: string
    adicionalStyles: string
    disabled: boolean
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
}