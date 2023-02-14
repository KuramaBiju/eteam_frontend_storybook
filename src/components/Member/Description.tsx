import React from 'react'


export interface Props {
  description?: string;
  className?: string;
  label?:string;
  style?: React.CSSProperties;

}

export const Description = ({ description,label, className, style }: Props) => {

  return (
    <div
    style={style}
    className={className}
    >
      <h3>{label}</h3>
      <p>
        {
          description
        }
      </p>
    </div>
  )
}
