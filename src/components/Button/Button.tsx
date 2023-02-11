import React, { CSSProperties } from 'react'



type TypesButton =
| "button" | "submit" | "reset" 

type TypesButtons =
| "button-pagination" | "button-accept" | "button-decline" | "button-submit"  | "button-login"

interface Props {
  type:TypesButton;
  clickHandler?: () => void,
  text: string;
  className?: string;
  style?:CSSProperties;
  disabled?: boolean;
  typeButton: TypesButtons;
}





export const Button = ({ type, clickHandler, text, className,style, disabled,typeButton } : Props) => {

  return (
    <button type={type} onClick={clickHandler} style={style} disabled={disabled} className={`${typeButton} ${className}`}>
      {text}
    </button>
  )
}
