import React from "react";
import AccordionTitle from "./1. AccordionTitle";
import { AccordionBody } from "./2. AccordionBody";

type AccordionPropsType = {
    titleValue: string
    collapsed?: boolean
}

function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.titleValue}/>
        {props.collapsed === false && <AccordionBody/>}
    </div>
}

export default Accordion;