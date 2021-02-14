import {
    makeHairStyle,
    moveUser,
    UserType,
    UserWithLaptopType,
    updateLaptop,
    UserWithBooksType,
    MoveUserToOtherLaptop,
    addBooksUser,
    updateBooksUser,
    removeBooksUser,
    WithCompaniesType,
    updateCompanieUser, updateCompanieTitle, updateCompanieTitleType
} from "./10_01";


test ('reference tyep test ', ()=>{
    let user:UserType = {
        name:'Dimych',
        hair:32,
        address:{
            city:'Minsk'
        }
    }

    const awesomeUser = makeHairStyle(user,2)


    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)

})

test ('change address ', ()=>{
    let user:UserWithLaptopType = {
        name:'Dimych',
        hair:32,
        address:{
            city:'Minsk',
            house:12
        },
        laptop:{
            title:'ZenBook'
        }
    }

    const movedUser = moveUser(user,'Kiev')


    expect(user).not.toBe(movedUser)
    expect(movedUser.address).not.toBe(user.address)

    expect(user.laptop).not.toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
})

test ('upgrate laptop to macbook ', ()=>{
    let user:UserWithLaptopType = {
        name:'Dimych',
        hair:32,
        address:{
            city:'Minsk',
            house:12
        },
        laptop:{
            title:'ZenBook'
        }
    }

    const movedUser = updateLaptop(user,'ASUS-ROG')


    expect(user).not.toBe(movedUser)
    expect(movedUser.laptop.title).not.toBe(user.laptop.title)
    expect(movedUser.address).toBe(user.address)

    expect(user.laptop).not.toBe(movedUser.laptop)
    expect(movedUser.laptop.title).toBe('ASUS-ROG')
    expect(user.laptop.title).toBe('ZenBook')
})


test ('upgrate laptop to macbook ', ()=>{
    let user:UserWithBooksType = {
        name:'Dimych',
        hair:32,
        address:{
            city:'Minsk',
            house:12
        },
        laptop:{
            title:'ZenBook'
        },
        books:['css','html','js','react']
    }

    const movedUser = MoveUserToOtherLaptop(user,'007')


    expect(user).not.toBe(movedUser)
    expect(user.address.house).not.toBe(movedUser.address.house)

    expect(movedUser.address.house).toBe('007')

})

test ('add books to user ', ()=>{
    let user:UserWithBooksType = {
        name:'Dimych',
        hair:32,
        address:{
            city:'Minsk',
            house:12
        },
        laptop:{
            title:'ZenBook'
        },
        books:['css','html','js','react']
    }

    let newBooks = ['ts','angular', 'vuj']

    const movedUser = addBooksUser(user,newBooks)


    expect(user).not.toBe(movedUser)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(user.address).toBe(movedUser.address)

    expect(user.books).not.toBe(movedUser.books)
    expect(movedUser.books[4]).toBe('ts')
    expect(movedUser.books[5]).toBe('angular')
    expect(movedUser.books[6]).toBe('vuj')

})

test ('Update books to user ', ()=>{
    let user:UserWithBooksType = {
        name:'Dimych',
        hair:32,
        address:{
            city:'Minsk',
            house:12
        },
        laptop:{
            title:'ZenBook'
        },
        books:['css','html','js','react','angular', 'vuj']
    }


    const movedUser = updateBooksUser(user,'js','ts')


    expect(user).not.toBe(movedUser)
    expect(user.books).not.toBe(movedUser.books)

    expect(movedUser.books[2]).toBe('ts')

})

test ('Update companies to user ', ()=>{
    let user:WithCompaniesType = {
        name:'Dimych',
        hair:32,
        address:{
            city:'Minsk',
            house:12
        },
        laptop:{
            title:'ZenBook'
        },
        books:['css','html','js','react','angular', 'vuj'],
        companies:[{id:1, title:'Епам'},
            {id:2, title:'It-incubator'}
        ]
    }

    let companies = {
        'Dymich': [{id:1, title:'Епам'}],
        'Artem': [{id:2, title:'It-incubator'}]

    }


    const movedUser = updateCompanieUser(user,1,'EPAM')


    expect(user).not.toBe(movedUser)
    expect(user.companies).not.toBe(movedUser.companies)

    expect(movedUser.companies[0].title).toBe('EPAM')

})
test ('Update companies  ', ()=>{


    let user :updateCompanieTitleType = {
        'Dymich': [{id:1, title:'Епам'},{id:2,title:'It-incubator'}],
        'Artem': [{id:1, title:'It-incubator'}]

    }

    let Name = 'Dymich'

    const userCopy = updateCompanieTitle(user,'Dymich',1,'EPAM')


    expect(user).not.toBe(userCopy)
    expect(userCopy['Dymich']).not.toBe(user['Dymich'])
    expect(userCopy['Artem']).toBe(user['Artem'])

    expect(userCopy['Dymich'][0].title).toBe('EPAM')

})