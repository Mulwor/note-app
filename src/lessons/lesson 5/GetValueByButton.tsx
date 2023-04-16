import {useRef, useState} from "react";


export const GetValueUncontrolledByButton = () => {
    const [value, setValue] = useState("")
   
    const inputRef = useRef<HTMLInputElement>(null)
    // Хук useRef - создает ссылку, привязываем ссылку к элементу, которому хотим ссылаться: <input ref={inputRef}, а затем в нужном
    // месте мы можем (коллбеке) обратиться к этой ссылке. Не очень хорошая практика использование

    const saveValue = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return (
        <div>
            <span>Меняет значение при клике</span>
            <input ref={inputRef}/>
            <button onClick={saveValue}>save</button> - actual value: {value}
        </div>
    )
}