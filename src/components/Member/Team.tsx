import React from 'react'


export interface Props {
    team?: {
        name:string
    };
    className?: string;
    style?: React.CSSProperties;

}

export const Team = ({ team, className, style }: Props) => {

    return (
        <div
        style={style}
        className={className}
        >

            <h4>Team </h4>
            <p> { team && team.name}</p>

        </div>
    )
}
