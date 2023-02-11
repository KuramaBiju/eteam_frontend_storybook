import React from 'react'

interface Props {
  zip?: string;
  className?: string;
  style?: React.CSSProperties;

}

export const Zip = ({ zip, className, style }: Props) => {

  return (
    <span
      style={style}
      className={className}
    >
      {
        zip
      }
    </span>
  )
}
