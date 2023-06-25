import { CustomTextAreaProps } from "@/types/types"

const CustomTextArea = ({ value, placeholderText, adicionalStyles, disabled, onChange }: CustomTextAreaProps) => {

  return (
    <textarea
        disabled={disabled}
        className={`h-[250px] w-full outline-none resize-none text-lg py-3 px-4 ${adicionalStyles}`}
        placeholder={placeholderText}
        value={value}
        onChange={onChange}
        readOnly={disabled}
    >
        
    </textarea>
  )
}

export default CustomTextArea