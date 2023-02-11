import React from 'react'


export interface Props {
  portafolio?: string;
  className?: string;
  style?: React.CSSProperties;

}

export const Portafolio = ({ portafolio, className, style }: Props) => {

  return (
    <div
    style={style}
    className={className}
    >
      <a style={{
        marginTop: '10px',
      }}
        href={portafolio}>{portafolio}</a>
    </div>
  )
}
