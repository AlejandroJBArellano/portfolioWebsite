import React from 'react';

import IFigure from './IFigure';

export default function Figure(props:IFigure):JSX.Element {
    return <figure>
        <img src={props.src} alt={props.title} title={props.title} />
    </figure>
}
