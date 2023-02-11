import React, { CSSProperties } from "react";

interface Props {
  error: string;
  className?: string;
  style?: CSSProperties;
}

export const ErrorInputMessage = ({ error,className }: Props) => {
  return <>{error && <span className={`text-red-700 ${className}`}>{error}</span>}</>;
};
