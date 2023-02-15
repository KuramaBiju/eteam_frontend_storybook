import React, { CSSProperties } from "react";

interface Props {
  className?: string;
  style?: CSSProperties;
}

export const NotFound = ({className,style}: Props) => {
  return (
    <div className="flex items-center justify-center h-64">
      <p className={`text-gray-500 text-lg ${className}`} style={style}>No se encontraron elementos</p>
    </div>
  );
};
