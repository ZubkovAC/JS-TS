
type TechnologiesType={
    id:number
    title:string
}

type CityType1= {
    title:string
    countryTitle:string
}

type StudentAddressType = {
    streetTitle:string
    city: CityType1
}

export type StudentType  = {
    id:number
    name:string
    age:number
    isActive:boolean
    address: StudentAddressType
    technologies: TechnologiesType[]
}

export const student:StudentType={
    id:1,
    name:'Dimych',
    age:32,
    isActive:false,
    address:{
        streetTitle:'Surganova 2',
        city:{
            title:'Minsk',
            countryTitle:'Belarus'
        }
    },
    technologies:[
        {
            id:1,
            title:'HTML'
        }
        ,
        {
            id:2,
            title:'CSS'
        }
        ,
        {
            id:3,
            title:'React'
        }
    ]
}