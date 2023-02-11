import React from 'react'

interface Props {
  state?: string;
  className?: string;
  style?: React.CSSProperties;

}

export const State = ({ state, className, style }: Props) => {

  return (
    <span
      style={style}
      className={className}
    >
      {
        state
      }
    </span>
  )
}
