import React from 'react'


interface Props{
  filters:string[];
  setFilter:React.Dispatch<React.SetStateAction<string>>;
  style?:React.CSSProperties;
  className?:string;
}

export const NavFilter = ({filters,setFilter, style,className} : Props) => {
  return (
    <div
    style={style}
    className={className}
  >
    {
      filters.map((filter,i) => (
        
        <a
        key={i}
        onClick={() => setFilter(filter)}
        style={{
          marginRight: '12px',
          marginLeft: '12px',
          padding: '8px 5px',
          borderBottom: '2px solid transparent',
          backgroundColor: 'transparent',
          lineHeight: '1',
          color: '#b5b8bf',
          fontSize: '15px',
          fontWeight: '500',
          textAlign: 'center',
          cursor:'pointer'
        }}
      >{filter}</a>
      ))
    }
 
   
  </div>
  )
}
