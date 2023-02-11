import React from 'react'

interface Props {
  name?: string;
  className?: string;
  style?: React.CSSProperties;

}

export const Name = ({ name, className, style }: Props) => {

  return (
    <h2
      style={style}
      className={className}
    >
      {
        name
      }
    </h2>
  )
}
