import React from "react";
import { getImageCountry } from "./utilities";

export interface Props {
  country?: string;
  className?: string;
  style?: React.CSSProperties;
}


export const Country = ({ country, className, style }: Props) => {
  return <>{country && <img className={className} style={style} src={getImageCountry(country)} alt={country} />}</>;
};
