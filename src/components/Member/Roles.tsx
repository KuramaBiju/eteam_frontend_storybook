import React from 'react'

export interface Props {
  roles?: [];
  className?: string;
  classNameUl?: string;
  classNameLi?: string;
  style?: React.CSSProperties;

}


export const Roles = ({ roles, className, classNameUl, classNameLi, style }: Props) => {
  return (
    <>
      <h2>Roles</h2>

        <ul className={`flex flex-col ${classNameUl}`}>
          <li>
            <a href="#" className={classNameLi}>Full stack developer</a></li>
          <li><a href="#" className={classNameLi}>Tech Lead</a></li>
        </ul>
    </>

  )
}
