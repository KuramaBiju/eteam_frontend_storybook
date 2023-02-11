import React from 'react'

interface Props {
  address?: string;
  className?: string;
  style?: React.CSSProperties;

}

export const Address = ({ address, className, style }: Props) => {

  return (
    <span
      style={style}
      className={className}
    >
      {
        address
      }
    </span>
  )
}

