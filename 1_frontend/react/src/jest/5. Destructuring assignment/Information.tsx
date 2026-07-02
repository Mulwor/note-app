import {LessonType} from "./01.About-me";

export type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    address: {
        street: {
            title: string
        }
    }
}


type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}


export const ManComponent: React.FC<PropsType> = (props) => {
    const {title, man, ...values} = props
    return (
        <div>
            <h1>{title}</h1>
            <hr />
            <div> {man.name} </div>
            <div> {values.car.model}</div>
        </div>
    )
}
