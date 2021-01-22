import {StudentType} from "../02/02";
import {GevermentBuildingType, HouseType} from "../02/02_02";

export const sum = (a:number, b:number)=>{
    return a+b;
}


export const addSkill = (student:StudentType, skill:string) => {
    student.technologies.push({
        id:new Date().getTime(),
        title:skill
    })
}
export const addSkill2 = (student:StudentType, skill:string) => {
    student.technologies.push({
        id:new Date().getTime(),
        title:skill
    })
}

export function makeStudentActive(s:StudentType){
    s.isActive=true
}
export const doesStudentLiveIn=(s:StudentType,cityName:string)=>{
    return s.address.city.title === cityName;
}

export const addMoneyToBudget = (buildings: GevermentBuildingType, budget: number) =>{
    buildings.budget += budget;
}

export const repairHouse = (houseType:HouseType) => {
    houseType.repaired = true
}

export function toFireStaff(building:GevermentBuildingType, staffCountToFire:number){
     building.staffCount -= staffCountToFire;
}
export function toHireStaff(building:GevermentBuildingType, staffCountToHire:number){
    building.staffCount += staffCountToHire;
}