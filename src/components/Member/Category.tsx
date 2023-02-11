import React from 'react'



export interface Props {
  category?: string;
  className?: string;
  style?: React.CSSProperties;

}

export const Category = ({ category, className, style }: Props) => {

  return (
    <a
      href="#" className={`${className}`} style={style}>
      {
        category
      }
    </a>
  )
}
