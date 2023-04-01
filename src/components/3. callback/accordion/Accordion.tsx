import React, {useState} from "react";
import { AccordionBody } from "./AccordionBody";
import { AccordionTitle } from "./AccordionTitle";

type AccordionPropsType = {
    title: string
}

function Accordion_Callback(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(false)

    return <div>
        <AccordionTitle
            title={props.title}
            onClick={ () => { setCollapsed(!collapsed)}}
        />

        {!collapsed && <AccordionBody/>}
    </div>
}




export default Accordion_Callback;