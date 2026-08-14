type CityType = {
    title: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: CityType
}

type TechType = {
    id: number
    title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean

    address: AddressType
    technologies: Array <TechType>
}

export const student: StudentType = {
    id: 1,
    name : "Ali",
    age: 25,
    isActive: false,
    address: {
        streetTitle: "Dollar Ciyar",
        city: {
            title: "Azerbaijan",
            countryTitle: "Baku"
        }
    },
    technologies: [
        { id: 1, title: "HTML" },
        { id: 2, title: "CSS" },
        { id: 3, title: "React"}
    ]
}

