import React from 'react'
import IProject from "./IProject"

export default function Project(props:IProject):JSX.Element {
    return <section>
        <article>
            <img src={props.src} alt="" />
        </article>
        <article>
            <p>{props.description}</p>
        </article>
    </section>
}
