import React from "react"
import { ItemType } from "./Accordion"

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

export function AccordionBody(props: AccordionBodyPropsType) {
    return <ul>
        { props.items.map( (i, index) =>
            <li onClick={ () => props.onClick(i.value)} key={index}> {i.title} </li>) }
    </ul>
}