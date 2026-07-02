import { StudentType } from "../2. Object/01.About_me";
import { CityType, HouseType, GovernmentBuildingType } from "../2. Object/02.Building";

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(student: StudentType) {
    student.isActive = true;
}

export const doesStudnetLiveIn = (student: StudentType, cityName: string) => {
    return student.address.city.title === cityName;
}


// =======


export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget;
}

export const repairHouse = (houseType: HouseType) =>  {
    houseType.repaired = true;
}

export function toFireStaff(building: GovernmentBuildingType, staffCountToFire: number) {
    building.staffCount -= staffCountToFire
}

export const toHireStaff = (building: GovernmentBuildingType, staffCountToHire: number) => {
    building.staffCount += staffCountToHire
}

export function createMessage(city: CityType) {
    return "Hello " + city.title + " citizens. I want you be a happy. All " + city.citizensNumber + " men"
}