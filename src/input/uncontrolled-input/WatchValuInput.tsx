import {ChangeEvent, useState} from "react";

export const WatchValueUncontrolledInput = () => {
    const [value, setValue] = useState("")

    const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue)
    }

    return (
        <div>
            <span>Меняет значение при написании: </span>
            <input onChange={ onChangeValue }/> - {value}
        </div>
    )
}