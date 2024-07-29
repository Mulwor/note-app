import React, {ChangeEvent, useState} from "react";

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue (e.currentTarget.checked)
    }

    return <input type = "checkbox"
                  checked={parentValue}
                  onChange={onChange}
    />
}