import React, {ChangeEvent, useRef, useState} from "react";

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState <string>("2")

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue (e.currentTarget.value)
    }

    return <select value = {parentValue}
                   onChange={onChange}
           >

        <option> None </option>
        <option value={"1"}>Minsk</option>
        <option value={"2"}>Moscow</option>
        <option value={"3"}>Saint-Petersburg</option>
    </select>
}