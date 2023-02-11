import React from 'react'

interface Props {
  phone?: string;
  className?: string;
  style?: React.CSSProperties;

}

export const Phone = ({ phone, className, style }: Props) => {

  return (
    <h2
      style={style}
      className={className}
    >
      {
        phone
      }
    </h2>
  )
}
