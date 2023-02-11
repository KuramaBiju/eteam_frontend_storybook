import React from 'react'


export interface Props {
  description?: string;
  className?: string;
  style?: React.CSSProperties;

}

export const Description = ({ description, className, style }: Props) => {

  return (
    <div
    style={style}
    className={className}
    >
      <h3>Description</h3>
      <p>
        {
          description
        }
      </p>
    </div>
  )
}
