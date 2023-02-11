import React from 'react'

export interface Props {
  skills?: [];
  className?:string;
  classNameUl?: string;
  classNameLi?: string;
  style?: React.CSSProperties;

}


export const Skills = ({ skills, className,classNameUl, classNameLi, style }: Props) => {
  return (
    <>
      <h2>Skills</h2>

        <ul className={`flex flex-col ${classNameUl}`}>
          <li>
            <a href="#" className={classNameLi}>React</a></li>
          <li><a href="#" className={classNameLi}>Laravel</a></li>
          <li><a href="#" className={classNameLi}>JavaScript</a></li>
          <li><a href="#" className={classNameLi}>JavaScript</a></li>

        </ul>
    </>

  )
}
