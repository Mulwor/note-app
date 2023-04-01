import React, {ChangeEvent, useState} from "react";

export default {
    title: "input"
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue (e.currentTarget.value)
    }

    return <input value = {parentValue}
                  onChange={onChange}
            />
}