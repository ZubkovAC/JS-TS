import {UsersType} from "./08_01";


let users :UsersType

beforeEach(()=>{
    users={
        '105':{id:105,name:'Dimych'},
        '12231':{id:12231,name:'Natasha'},
        '511':{id:511,name:'Valera'},
        '201':{id:201,name:'Katya'}
    }}
    )


test ('should select correspoinding user grom obj', () =>{

    users['201'].name = 'Ekaterina'
    users['511'].id = 59103
    users[7731]={id:7731,name:'Petr'}
    delete users[12231]

    expect (users['105'].name).toBe('Dimych')
    expect (users[511].id).toBe(59103)                  // [511] == ['511']
    expect (users['201'].name).toBe('Ekaterina')
    expect( users[7731].name).toBe('Petr')
    expect( users['7731'].id).toBe(7731)

    expect( users['12231']).toBe(undefined)

})
