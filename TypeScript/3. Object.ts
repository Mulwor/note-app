type ManTypeOrigin = {
    name: string
    height: number
}
type CarType = {
    model: string,
    year: number
}

let man: ManTypeOrigin = { name: 'Dima', height: 1.78 }
let car: CarType = { model: 'Reno Stepway', year: 2016 }
let man1: ManType = { name: 'Dima', height: 1.78 }



// Объединения типов - |
type manCarType = ManType | CarType

// Необязательный тип => ?
type manAndCarType = {
    name: string,
    height: number,
    surname?: string
}
let man2: manAndCarType = { name: 'Dima', height: 1.78, surname: "Vladelin" }
let man3: manAndCarType = { name: 'Sasha', height: 1.8 }



// Массив, в котором есть два объекта
type ManAnotherType = {
    name: string
    height: number
}

let mans: Array<ManAnotherType> = [
    {name: 'Dima', height: 1.78},
    {name: 'Sasha', height: 1.8}
]