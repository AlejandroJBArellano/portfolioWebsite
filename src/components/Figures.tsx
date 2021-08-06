import React from 'react';
import Figure from './Figure';
import IFigure from './IFigure';
import arrayOfFigures from '../Figures.json';

export default function Figures():JSX.Element {
    return (
        <section>
            {arrayOfFigures.map((e:IFigure, i: number)=><Figure {...e} key={i}/>)}
        </section>
    )
}
