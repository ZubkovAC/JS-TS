export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        house?: number
    }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserWithLaptopType & {
    books: string[]
}
export type WithCompaniesType = UserWithBooksType & {
    companies:Array<{id:number,title:string}>
}


export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }

    //copy.hair = u.hair/power

    return copy
}

export function moveUser(user: UserWithLaptopType, newcity: string) {
    //const copy =

    return {
        ...user,
        address: {...user.address, city: newcity},
        laptop: {...user.laptop}
    }
    /*copy.address = {
        ...copy.address,
        city: city
    }
    copy.laptop = {
        ...copy.laptop
    }*/
    //return copy
}

export function updateLaptop(user: UserWithLaptopType, newlaptop: string) {

    return {
        ...user,
        laptop: {...user.laptop, title: newlaptop}
    }
}


export function MoveUserToOtherLaptop(user: UserWithBooksType, house: string) {

    return {
        ...user,
        address: {...user.address, house: house}
    }
}


export function addBooksUser(user: UserWithBooksType, newBooks: string[]) {

    return {
        ...user,
        books: [...user.books, ...newBooks]
        //books:[...user.books,newBooks] newBooks - not  array
        //user.books.push ('ts') - immutability   - user (onalog) ['css','html','js','react','ts']
        //books.concat(newBooks) NO immutability !
        //books:[...user.books,newBooks]  - books:['css','html','js','react',['ts','angular', 'vuj']] - false
    }
}

export function updateBooksUser(user: UserWithBooksType, oldBooks: string, updateBooks: string) {

    return {
        ...user,
        books: [...user.books.map(b => b === oldBooks ? updateBooks : b)]
        //books: user.books.map(b => b === oldBooks ? updateBooks : b)     - best analog
    }
}

export function removeBooksUser(user: UserWithBooksType, oldBooks: string) {

    return {
        ...user,
        books: user.books.filter(b => b !== oldBooks )
    }
}
export function updateCompanieUser(user: WithCompaniesType, compid:number,newTitle:string) {

    return {
        ...user,
        companies: user.companies.map( c => c.id ===compid ? {id:compid, title:newTitle} : c )
        //companies: user.companies.map( c => c.id ===compid ? {...c, title:newTitle} : c )
    }
}

export type updateCompanieTitleType = {
    [key:string]:Array<{id:number,title:string}>
}

export function updateCompanieTitle(companies: updateCompanieTitleType, compid:string,id:number,newTitle:string) {

    let compani =  {
        ...companies}
    compani[compid] = compani[compid].map( c => c.id === id ? {...c,title:newTitle} : c  )
    return compani
    }
