
export type StreetType={
    title: string
}

export type AddressType = {
    number?: number
    street:StreetType
}
export type HouseType={
    id?:number
    buildedAt:number
    repaired:boolean
    address:AddressType
}

export  type GevermentBuildingType ={
    type:"HOSPITAL" | "FIRE-STATION"
    budget:number
    staffCount:number
    address:AddressType
}
export type CityType ={
    title:string
    houses: Array<HouseType>
    governmentBuildings:Array<GevermentBuildingType>
    citizensNumber:number
}