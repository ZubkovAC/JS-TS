const deleteUser = (userId) => {
    const action = {
        type: 'DELETE-USER',
        payload: {
            userId: userId
        },
        m() {

        }
    }
    return action
}


const action1 = delteUser('123132')
const action2 = delteUser('4444')

console.log(action1)
console.log(action2)


const userFabric = (name) => {
    const user = {
        name: name,
        site: 'it-incubator.by',
        dateIdBirth: new Date(1988, 1, 2),
        hello() {
            console.log(`I am ${this.name} from ${this.site}`)
        }
    }
    return user
}


const u1 = userFabric('Dimych')
const u2 = userFabric('Artem')

console.log(u1)
console.log(u2)
u1.hello()
u2.hello()
