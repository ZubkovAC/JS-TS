/*
class DeleteUserAction{
    constructor() {
        this.type = 'DELETE-USER'
        this.paylod = {
            userId:userId
        }
    }
}



const action1 = new DelelteUserAction(121212)
const action2 = new DelelteUserAction(333)
console.log(action1)
console.log(action2)

*/
/*

class User{
    _name=''
    constructior (name,site,dob){
        this._name = name
        this.site = site
        this.dateOfBrirth = dob
        this.counter = 0
    }

    /!*getName() {
        return this.#name
    }

    setName(value) {
        if (value === 'Igor') throw new Error ('Igor is not allowed name')
        this.#name = value
    }*!/
    get name() {
        return this._name
    }

    set name(value) {
        if (value === 'Igor') throw new Error ('Igor is not allowed name')
        this._name = value
    }

    hello(){
        this.counter++;
        console.log(`I am ${this._name} from ${this.site}`)
    }

}

const u1 = new User('Dimych', 'it-incubator',new Date(1988,1,2))
const u2 = new User('Artem', 'it-incubator',new Date(1989,10,12))

// console.log(u1.hello === u2.hello)                          // true
// console.log(u1.hello === User.prototype.hello)              // true

// u2.setName('Igor')   29
// u2.getName()         33

u1.hello()
u2.hello()

u1.name = 'Igor'
console.log(u1.name)

let users = [u1,u2]
users.forEach(u => u.hello())

class Coder extends User{
    constructior(name, site, dob,tech) {
        super.constructior(name, site, dob);
        this.tech = tech
    }

    code(){
        console.log(`I am ${this.name}, here is my code ${this.tech} : function(a+b){...} `)
    }
}
const coder1 = new Coder('Alex-coder','Word',new Date(1990,4,09), 'c#')
coder1.hello()
coder1.code()



class CoderOld extends User{
    constructior(name, site, dob,tech) {
        super.constructior(name, site, dob);
        this.tech = tech
    }

    code(){
        console.log(`I am ${this.name}, here is my code ${this.tech} : function(a+b){...} `)
    }
    hello() {
        super.hello();
        console.log('GO away!'+ this.name)
    }
}
const oldUser = new CoderOld('Dimych', 'it-incubator',new Date(1988,1,2))

class Haker extends CoderOld{
    constructior(name, site, dob,tech) {
        super()
        this.tech = 'XXX'
        this._name = "XXXX"
    }

    code(){
        console.log(`I'll hack everything `)
    }
    hello() {
        throw new Error ('I am Haker in the Dark')          // ошибка - нарушение полиморфизма
    }
}

const nanUser = new Haker('Artem', 'it-incubator',new Date(1989,10,12))
let allUsers = [u1,u2,coder1, oldUser,nanUser]
allUsers.forEach( u => u.hello())*/
