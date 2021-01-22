
import {createMessages, getStreetsTItlesOfGovermentsBuildings, getStreetsTItlesOfHouse} from "./05_02";
import {CityType} from "../02/02_02";

let city : CityType

beforeEach( ()=>
    city={
        title:'New York',
        houses:[
            {
                buildedAt:2012, repaired:false,
                address:{number:100,street:{title:"White street"}}
            },
            {
                buildedAt:208, repaired:false,
                address:{number:100,street:{title:"Happy street"}}
            },
            {
                buildedAt:2020, repaired:false,
                address:{number:101,street:{title:"New street"}}
            },
        ],
        governmentBuildings:[
            {
                type:'HOSPITAL', budget:200000, staffCount:200,
                address:{
                    street:{
                        title:"Central Str"
                    }
                }
            },
            {
                type:'FIRE-STATION', budget:500000, staffCount:1000,
                address:{
                    street:{
                        title:"South Str"
                    }
                }
            },

        ],
        citizensNumber:1000000
    }
)




//01 создайте в отдельном файле функцию. чтобы тетсты прошли
test('list of streers titles of goverments buildings', ()=>{
    let streetsNames = getStreetsTItlesOfGovermentsBuildings(city.governmentBuildings)

    expect(streetsNames.length).toBe(2)

    expect(streetsNames[0]).toBe('Central Str')
    expect(streetsNames[1]).toBe('South Str')
})


//01 создайте в отдельном файле функцию. чтобы тетсты прошли
test('list of streers titles of goverments buildings', ()=>{
    const streets = getStreetsTItlesOfHouse(city.houses);

    expect(streets.length).toBe(3)

    expect(streets[0]).toBe('White street')
    expect(streets[1]).toBe('Happy street')
    expect(streets[2]).toBe('New street')
})

test ( " create greeting messages for streets", ()=>{
    let messages = createMessages (city.houses)
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe( "Hello guys from White street")
    expect(messages[1]).toBe( "Hello guys from Happy street")
    expect(messages[2]).toBe( "Hello guys from New street")
})
