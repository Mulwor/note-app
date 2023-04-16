import React from "react";
import { AccordionTitle } from "./AccordionTitle";
import { AccordionBody } from "./AccordionBody";

export type ItemType = {
  title: string;
  value: any;
};

type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
  onChange: () => void;
  items: ItemType[];
  onClick: (value: any) => void;
};

export function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={props.titleValue} onChange={props.onChange} />

      {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick} />}
    </div>
  );
}
