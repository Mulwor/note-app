import React, { useState } from "react"
import { AccordionTitle } from "./AccordionTitle"
import { AccordionBody } from "./AccordionBody"

type AccordionPropsType = {
  title: string
}

export function Accordion_Callback(props: AccordionPropsType) {
  let [collapsed, setCollapsed] = useState(false)

  return (
    <div>
      <AccordionTitle
        title={props.title}
        onClick={() => {
          setCollapsed(!collapsed)
        }}
      />

      {!collapsed && <AccordionBody />}
    </div>
  )
}
