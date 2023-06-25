"use client"

import { CustomButtonProps } from "@/types/types"

const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles, iconStyles, icon }: CustomButtonProps) => {

  return ( 
    <button
      disabled={false}
      type="button"
      className={containerStyles}
      onClick={handleClick}
    >
      {icon && (
        <span className={iconStyles}>{icon} </span>
      )}
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>   
    </button>
  )
}

export default CustomButton