import {Accordion} from "./Accordion";

const callback = () => console.log("accordion mode change event fired")
const onClickCallback = () => console.log("item was clicked")

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} 
                                                  collapsed={true} 
                                                  onChange={callback} 
                                                  items={[]} 
                                                  onClick = {onClickCallback}
                                        />