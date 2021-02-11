
export const users1Array = ['Dimych','Natasha','Valera','Katya']

export const usersObj = {
    '0':'Dimych',
    '1':'Natasha',
    '2':'Valera',
    '3':'Katya'
}

export type UsersType = {
    [key:string]:{
        id:number
        name:string
    }
}


export const users :UsersType ={
    '105':{id:105,name:'Dimych'},
    '12231':{id:12231,name:'Dimych'},
    '511':{id:511,name:'Dimych'},
    '201':{id:201,name:'Dimych'}
}

var user = {id:2291,name:'Halva'}
// @ts-ignore
//users[user.id]={user}

//delete users[user.id]
//users[user.id].name = 'Vitya'

export const usersArray =[
    {id:105,name:'Dimych'},
    {id:12231,name:'Dimych'},
    {id:511,name:'Dimych'},
    {id:201,name:'Dimych'}
]

//usersArray.find(u => u.id === 201)
//let usersArraB = [...usersArray.filter(),user]
//let usersArray = usersArray.filter ( u => u.id !== id)