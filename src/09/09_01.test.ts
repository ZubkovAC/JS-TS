function icreaseAge(u: UsersType) {
    u.age++
}

type UsersType = {
    name: string
    age: number
    address:{title:string}
}

test('big test', () => {
    let user: UsersType = {
        name: 'Dimych',
        age: 32,
        address:{title:'Minsk'}
    }
    icreaseAge(user)


    expect(user.age).toBe(33)

    let superman = user
    superman.age = 1000

    expect(user.age).toBe(1000)
})

test('array test', () => {
    let users: UsersType[] = [
        {
            name: 'Dimych',
            age: 32,
            address:{title:'Minsk'}
        },
        {
            name: 'Dimych',
            age: 32,
            address:{title:'Minsk'}
        },
    ]
    var admins = users
    admins.push({name:'Baryga',age:10,address:{title:'Minsk'}})

    expect(users[1].age).toBe(32)
    expect(users[2].age).toBe(10)
    expect(users[2].name).toBe('Baryga')

})

test ('value type test ', ()=>{
    let usersCount = 199

    let  adminsCount = usersCount

    adminsCount++

    expect(adminsCount).toBe(200)

})

test('referens big test', () => {
    let user: UsersType = {
        name: 'Dimych',
        age: 32,
        address: {title: 'Minsk'}
    }
    let addr = user.address

    let user2: UsersType={
        name:'Natasha',
        age:30,
        address:user.address
    }

    user.address.title = 'Belarus'

    expect(user2.address.title).toBe('Belarus')
})


test('referens array test', () => {
    const address = {
        title:'Minsk'
    }
    let user: UsersType = {
        name: 'Dimych',
        age: 32,
        address: address
    }

    let user2: UsersType={
        name:'Natasha',
        age:30,
        address:address
    }

    const users = [ user,user2 , {name:'Misha',age:4,address:address}]

    address.title='new-Minsk'

    expect(user2.address.title).toBe('new-Minsk')
})

test ('sort array test', ()=>{
    const letter = ['c','d','a','z']
    letter.sort()

    expect(letter).toEqual(['a','c','d','z'])
})