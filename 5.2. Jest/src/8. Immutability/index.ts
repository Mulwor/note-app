export type UserType = {
    name: string
    hair: number
    address: {city: string, house?: number }
}
export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = {
    books: Array<string>
}
export type WithCompaniesType = {
    companies: Array<{id: number, title: string}>
}

type CompanyTypeSecond = {id: number, title: string}



export function makeHairstyle (u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    return copy
}

export function moveUser(u: UserWithLaptopType, namingCity: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: namingCity
        }
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }

}

export function upgradeUserLaptop(u: UserWithLaptopType, namingLaptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: namingLaptop
        }
    }
}

export function addNewBooksToUser (u: UserWithLaptopType & UserWithBooksType, namingBooks: string) {
    return {
        ...u,
        books: [...u.books, namingBooks]
    }
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
   return {
        ...u,
        books: u.books.map(b => b === oldBook ? newBook : b)
    }
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, bookForDelete: string) {
    return {
        ...u,
        books: u.books.filter(b => b !== bookForDelete)
    }
}

export function updateCompanyTitle (u: WithCompaniesType,
                                    companyId: number,
                                    newTitle: string)
    {
    return {
        ...u,
        companies: u.companies.map(b => b.id === companyId ? {...b, title: newTitle} : b)
    }
}

export const updateCompanyTitleUpdate = (companies: {
                                    [key: string]: Array<CompanyTypeSecond>  },
                                    userName: string,
                                    companyId: number,
                                    newTitle: string) => {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)
    return companyCopy
}