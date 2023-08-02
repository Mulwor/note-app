import {ChangeEvent, useState} from "react";

export function ControlledInput() {
    const [parentValue, setParentValue] = useState("")

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue (e.currentTarget.value)
    }

    return <input value = {parentValue}
                  onChange={onChange}
            />
}