import React from 'react'



export interface Props {
  img?: string;
  className?: string;
  style?: React.CSSProperties;

}

export const Image = ({ img, className, style }: Props) => {

  return (
    <>
      <img src={img} alt='Jeronimo' style={style} className={`${className}`} />
    </>
  )
}
