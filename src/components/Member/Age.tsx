import React from 'react'



export interface Props {
  age?: number;
  className?: string;
  style?: React.CSSProperties;

}

export const Age = ({ age, className, style }: Props) => {

  return (
    <span
      style={style}
      className={className}
    >
      {
        age
      }
    </span>
  )
}
