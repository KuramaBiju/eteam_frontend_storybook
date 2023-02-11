import React from 'react'

interface Props {
  logo?: string;
  className?: string;
  style?: React.CSSProperties;

}

export const Logo = ({ logo, className, style }: Props) => {

  return (
    <>
    <img src={logo} alt='Company' style={style} className={`${className}`} />
  </>
  )
}
