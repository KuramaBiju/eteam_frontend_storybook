import React from 'react'

interface Props{
    className?: string;
    style?: React.CSSProperties;
    name: string;
}
export const TagRole = ({name,style,className} :Props ) => {
  return (
    <div
    style={style}
    className={`ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full ${className}`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-arrow-right mr-2"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
    {name}
  </div>
  )
}
