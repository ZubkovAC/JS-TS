import {GevermentBuildingType, HouseType} from "../02/02_02";


export const getStreetsTItlesOfGovermentsBuildings = ( buildings : GevermentBuildingType[]) =>{
    return buildings.map( b => b.address.street.title)
}

export const getStreetsTItlesOfHouse = (house:HouseType[] ) =>{
    return house.map( b => b.address.street.title)
}

export function createMessages (house:HouseType[]) {
    return house.map( h => `Hello guys from ${h.address.street.title}`)
}