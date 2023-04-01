import React from "react"
import { Accordion } from './Accordion'

const callback = () => console.log("accordion mode change event fired")
const onClickCallback = () => console.log("item was clicked")

export const UserUncollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback}  items={[
    {title: "Dimych", value:1},
    {title: "Valera", value:2},
    {title: "Artem", value:3},
    {title: "Viktor", value:4}
]} onClick = {onClickCallback}/>

export const MadeChanging = () => {
    const [value, setValue] = React.useState<boolean>(true)
    return <Accordion titleValue={"Users"}
                      collapsed={value}
                      onChange={ ()=> setValue(!value)}
                      items={[
                          {title: "Dimych", value:1},
                          {title: "Valera", value:2},
                          {title: "Artem", value:3},
                          {title: "Viktor", value:4}
                      ]}
                      onClick = {(value) => {alert(`use with iD ${value} should be happy`)}}
    />
}