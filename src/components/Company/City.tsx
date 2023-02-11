import React from 'react'

interface Props {
  city?: string;
  className?: string;
  style?: React.CSSProperties;

}

export const City = ({ city, className, style }: Props) => {

  return (
    <span
      style={style}
      className={className}
    >
      {
        city
      }
    </span>
  )
}
