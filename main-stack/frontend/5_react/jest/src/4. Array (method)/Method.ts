import {CityType, GovernmentBuildingType, HouseType} from "../2. Object/02.Building";

// ==== Filter ======
export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter ( h => !(h.address.street.title == street))
}

export const getBuildingWithStaffCountGreaterThen = (buildings: Array<GovernmentBuildingType>, number: number) => {
    return buildings.filter (build => build.staffCount > number)
}

export const getStreetTitlesOfGovernmentBuilding = (buildings: Array<GovernmentBuildingType>) => {
    return buildings.map( b => b.address.street.title )
}



// ==== Map =======
export type ManType = {
    name: string
    age: number
}


export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator`)
}


export const getStreetTitlesOfHouses = (houses: Array<HouseType>) => {
    return houses.map (b => b.address.street.title)
}

export function createMessages(houses: Array<HouseType>) {
    return houses.map( h => `Hello guys from ${h.address.street.title}`)
}