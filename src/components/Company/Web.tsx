import React from 'react'

interface Props {
  web?: string;
  className?: string;
  style?: React.CSSProperties;

}

export const Web = ({ web, className, style }: Props) => {

  return (
    <a
      style={style}
      className={className}
      href={web}
      target="_blank"
      rel="noopener noreferrer"
    >
      {
        web
      }
    </a>
  )
}
